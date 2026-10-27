"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Isometric grid visualization – faithful port of sigmoidal.io hero  */
/* ------------------------------------------------------------------ */

const rgba = (c: number[], a: number) =>
  `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${a})`;

const clamp = (v: number, lo: number, hi: number) =>
  v < lo ? lo : v > hi ? hi : v;

const hexToRgb = (hex: string): number[] | null => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const v = parseInt(m[1], 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
};

/* Layer geometry: 6 horizontal diamond planes stacked vertically */
const LAYERS = [
  { y: -1.05, ox: 0.1,  oz: -0.06, a: 0.86, b: 0.64, amp: 11, freq: 0.62, ph: 0,   swa: 4.5, swf: 0.42, swp: 1.1 },
  { y: -0.62, ox: -0.13, oz: 0.09,  a: 0.7,  b: 0.52, amp: 8,  freq: 0.78, ph: 1.9, swa: 3.4, swf: 0.55, swp: 4   },
  { y: -0.21, ox: 0.05,  oz: 0.02,  a: 0.8,  b: 0.6,  amp: 6,  freq: 0.7,  ph: 3.6, swa: 3,   swf: 0.48, swp: 2.3 },
  { y: 0.21,  ox: -0.09, oz: -0.1,  a: 0.62, b: 0.47, amp: 6.5,freq: 0.86, ph: 5.2, swa: 3.8, swf: 0.6,  swp: 5.4 },
  { y: 0.63,  ox: 0.12,  oz: 0.07,  a: 0.72, b: 0.53, amp: 9,  freq: 0.66, ph: 2.7, swa: 3.2, swf: 0.5,  swp: 0.6 },
  { y: 1.05,  ox: -0.05, oz: -0.03, a: 0.54, b: 0.4,  amp: 12, freq: 0.74, ph: 4.4, swa: 4.2, swf: 0.44, swp: 3.2 },
];

/* Vertical connectors between layers */
const COLUMNS = [
  { x: 0.3,  z: 0.16,  lo: 0, hi: 2 },
  { x: -0.22, z: -0.12, lo: 1, hi: 4 },
  { x: 0.08, z: -0.2,  lo: 3, hi: 5 },
];

export default function IsometricGrid({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    /* Resolve CSS custom-property colours */
    const styles = getComputedStyle(document.documentElement);
    const css = (name: string, fallback: number[]) =>
      hexToRgb(styles.getPropertyValue(name)) ?? fallback;
    const teal = css("--color-teal", [42, 161, 152]);
    const deepTeal = css("--color-deep-teal", [12, 60, 60]);

    /* Canvas sizing */
    let W = 0, H = 0, cx = 0, cy = 0, scale = 1;
    let sizeOk = false;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width; H = rect.height;
      sizeOk = W > 2 && H > 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W >= 1024 ? 0.72 * W : 0.5 * W;
      cy = 0.5 * H;
      scale = Math.min(0.25 * H, 0.22 * W);
    };

    /* Rotation state (smoothed mouse tilt) */
    let rotY = 0, rotYv = 0, rotX = 0, rotXv = 0;
    let targetRotY = 0, targetRotX = 0;
    let mouseX = -1e4, mouseY = -1e4;
    let mouseInside = false;

    const onPointerMove = (e: PointerEvent) => {
      if (!sizeOk) return;
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseInside = mouseY > -0.2 * rect.height && mouseY < 1.2 * rect.height;
      const nx = clamp(mouseX / rect.width * 2 - 1, -1.1, 1.1);
      const ny = clamp(mouseY / rect.height * 2 - 1, -1.1, 1.1);
      targetRotY = mouseInside ? 0.087 * nx : 0;
      targetRotX = mouseInside ? 0.052 * ny : 0;
    };

    const onPointerOut = () => {
      mouseInside = false;
      targetRotY = 0; targetRotX = 0;
      mouseX = -1e4; mouseY = -1e4;
    };

    /* Node index helpers */
    const NODES_PER_LAYER = 24; // 6 cols x 4 rows
    const totalLayerNodes = NODES_PER_LAYER * LAYERS.length;

    /* Build column-node list */
    interface ColNode { col: number; k: number }
    const colNodes: ColNode[] = [];
    for (let c = 0; c < COLUMNS.length; c++) {
      for (let k = COLUMNS[c].lo; k <= COLUMNS[c].hi; k++) {
        colNodes.push({ col: c, k });
      }
    }

    const totalNodes = totalLayerNodes + colNodes.length;

    /* Position arrays */
    const px = new Float64Array(totalNodes);
    const py = new Float64Array(totalNodes);
    /* Spring displacement */
    const dx = new Float64Array(totalNodes);
    const dy = new Float64Array(totalNodes);
    const vx = new Float64Array(totalNodes);
    const vy = new Float64Array(totalNodes);

    const nodeIdx = (layer: number, col: number, row: number) =>
      NODES_PER_LAYER * layer + 6 * row + col;

    /* Animated particles on connectors */
    interface Particle { col: number; u: number; speed: number }
    const particles: Particle[] = [];

    /* Time */
    let time = 0;

    /* Per-layer state */
    const layerOrder = Array.from({ length: LAYERS.length }, (_, i) => i);
    const layerDepth = new Float64Array(LAYERS.length);
    const layerAlpha = new Float64Array(LAYERS.length);
    const layerBobX = new Float64Array(LAYERS.length);
    const layerBobY = new Float64Array(LAYERS.length);

    /* Projection helpers */
    let cosY = 1, sinY = 0, cosX = 1, sinX = 0;

    const project = (x3: number, y3: number, z3: number, li: number): [number, number] => {
      const rx = x3 * cosY - z3 * sinY;
      const rz = x3 * sinY + z3 * cosY;
      return [
        cx + rx * scale + layerBobX[li],
        cy - (y3 * cosX - rz * sinX) * scale + layerBobY[li],
      ];
    };

    /* ---- Main render ---- */
    const render = (dt = 0) => {
      if (!sizeOk) return;
      const baseAngle = Math.PI / 4 + rotY;
      const tiltAngle = 0.58 + rotX;
      cosY = Math.cos(baseAngle); sinY = Math.sin(baseAngle);
      cosX = Math.cos(tiltAngle); sinX = Math.sin(tiltAngle);

      /* Per-layer animation */
      for (let i = 0; i < LAYERS.length; i++) {
        const L = LAYERS[i];
        const breath = prefersReduced ? 0.5 : 0.5 + 0.5 * Math.sin(time * L.freq + L.ph);
        layerBobY[i] = -Math.sign(L.y) * L.amp * breath;
        layerBobX[i] = prefersReduced ? 0 : Math.sin(time * L.swf + L.swp) * L.swa;
        layerDepth[i] = L.y * sinX + (L.ox * sinY + L.oz * cosY) * cosX;
        layerAlpha[i] = clamp(0.8 * layerDepth[i] + 0.5, 0, 1);
      }

      /* Compute projected positions – layer grid nodes */
      for (let i = 0; i < LAYERS.length; i++) {
        const L = LAYERS[i];
        for (let row = 0; row < 4; row++) {
          const z3 = L.oz - L.b + (row / 3) * L.b * 2;
          for (let col = 0; col < 6; col++) {
            const x3 = L.ox - L.a + (col / 5) * L.a * 2;
            const idx = nodeIdx(i, col, row);
            const [sx, sy] = project(x3, L.y, z3, i);
            px[idx] = sx; py[idx] = sy;
          }
        }
      }

      /* Column connector nodes */
      for (let c = 0; c < colNodes.length; c++) {
        const cn = colNodes[c];
        const col = COLUMNS[cn.col];
        const [sx, sy] = project(col.x, LAYERS[cn.k].y, col.z, cn.k);
        px[totalLayerNodes + c] = sx;
        py[totalLayerNodes + c] = sy;
      }

      /* Spring physics (mouse repulsion) */
      if (dt > 0 && !prefersReduced) {
        const active = mouseInside && !isCoarse;
        for (let i = 0; i < totalNodes; i++) {
          let fx = 0, fy = 0;
          if (active) {
            const ex = px[i] + dx[i] - mouseX;
            const ey = py[i] + dy[i] - mouseY;
            const dist = Math.hypot(ex, ey);
            if (dist < 120) {
              const t = 1 - dist / 120;
              const force = 1800 * t * t;
              if (dist > 0.5) { fx = (ex / dist) * force; fy = (ey / dist) * force; }
              else fy = -force;
            }
          }
          vx[i] += (fx - 60 * dx[i] - 9 * vx[i]) * dt;
          vy[i] += (fy - 60 * dy[i] - 9 * vy[i]) * dt;
          dx[i] += vx[i] * dt;
          dy[i] += vy[i] * dt;
        }
      }

      /* ---- Draw ---- */
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;

      /* Vertical connector lines */
      for (let c = 0; c < colNodes.length - 1; c++) {
        const a = colNodes[c], b = colNodes[c + 1];
        if (a.col !== b.col) continue;
        const ia = totalLayerNodes + c, ib = totalLayerNodes + c + 1;
        ctx.strokeStyle = rgba(deepTeal, 0.13);
        ctx.beginPath();
        ctx.moveTo(px[ia] + dx[ia], py[ia] + dy[ia]);
        ctx.lineTo(px[ib] + dx[ib], py[ib] + dy[ib]);
        ctx.stroke();
      }

      /* Sort layers back-to-front */
      layerOrder.sort((a, b) => layerDepth[a] - layerDepth[b]);

      for (const li of layerOrder) {
        const alpha = layerAlpha[li];

        /* Diamond fill */
        const tl = nodeIdx(li, 0, 0);
        const tr = nodeIdx(li, 5, 0);
        const br = nodeIdx(li, 5, 3);
        const bl = nodeIdx(li, 0, 3);
        ctx.fillStyle = rgba(teal, 0.02 + 0.02 * alpha);
        ctx.beginPath();
        ctx.moveTo(px[tl] + dx[tl], py[tl] + dy[tl]);
        ctx.lineTo(px[tr] + dx[tr], py[tr] + dy[tr]);
        ctx.lineTo(px[br] + dx[br], py[br] + dy[br]);
        ctx.lineTo(px[bl] + dx[bl], py[bl] + dy[bl]);
        ctx.closePath();
        ctx.fill();

        /* Grid lines */
        ctx.strokeStyle = rgba(teal, 0.1 + 0.18 * alpha);
        ctx.lineWidth = 1;
        ctx.beginPath();
        // Horizontal lines
        for (let row = 0; row < 4; row++) {
          for (let col = 0; col < 5; col++) {
            const a = nodeIdx(li, col, row);
            const b = nodeIdx(li, col + 1, row);
            ctx.moveTo(px[a] + dx[a], py[a] + dy[a]);
            ctx.lineTo(px[b] + dx[b], py[b] + dy[b]);
          }
        }
        // Vertical lines
        for (let col = 0; col < 6; col++) {
          for (let row = 0; row < 3; row++) {
            const a = nodeIdx(li, col, row);
            const b = nodeIdx(li, col, row + 1);
            ctx.moveTo(px[a] + dx[a], py[a] + dy[a]);
            ctx.lineTo(px[b] + dx[b], py[b] + dy[b]);
          }
        }
        ctx.stroke();

        /* Grid nodes */
        for (let n = 0; n < NODES_PER_LAYER; n++) {
          const idx = NODES_PER_LAYER * li + n;
          const disp = Math.min(1, Math.hypot(dx[idx], dy[idx]) / 24);
          const r = (1 + 1.2 * alpha) * (1 + 0.35 * disp);
          ctx.fillStyle = rgba(teal, Math.min(0.85, 0.2 + 0.3 * alpha + 0.3 * disp));
          ctx.beginPath();
          ctx.arc(px[idx] + dx[idx], py[idx] + dy[idx], r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* Animated particles along connectors */
      if (!prefersReduced) {
        for (const p of particles) {
          const col = COLUMNS[p.col];
          const span = col.hi - col.lo;
          const u = p.u * span;
          const seg = Math.min(u | 0, span - 1);
          const frac = u - seg;
          let offset = 0;
          for (let c = 0; c < p.col; c++) offset += COLUMNS[c].hi - COLUMNS[c].lo + 1;
          const ia = totalLayerNodes + offset + seg;
          const ib = ia + 1;
          const mx = px[ia] + dx[ia] + (px[ib] + dx[ib] - px[ia] - dx[ia]) * frac;
          const my = py[ia] + dy[ia] + (py[ib] + dy[ib] - py[ia] - dy[ia]) * frac;

          const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 9);
          grad.addColorStop(0, rgba(teal, 0.2));
          grad.addColorStop(1, rgba(teal, 0));
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(mx, my, 9, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = rgba(teal, 0.65);
          ctx.beginPath();
          ctx.arc(mx, my, 1.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* Column connector nodes */
      for (let c = 0; c < colNodes.length; c++) {
        const idx = totalLayerNodes + c;
        const layerA = layerAlpha[colNodes[c].k];
        const pulse = prefersReduced ? 1 : 0.75 + 0.25 * Math.sin(0.9 * time + 1.3 * c);
        const disp = Math.min(1, Math.hypot(dx[idx], dy[idx]) / 24);
        ctx.fillStyle = rgba(teal, Math.min(0.9, (0.34 + 0.2 * layerA) * pulse + 0.25 * disp));
        ctx.beginPath();
        ctx.arc(px[idx] + dx[idx], py[idx] + dy[idx], 2.3 + 0.7 * disp, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /* ---- Static mode (reduced motion) ---- */
    resize();
    if (prefersReduced) {
      render();
      const ro = new ResizeObserver(() => { resize(); render(); });
      ro.observe(container);
      return () => ro.disconnect();
    }

    /* ---- Animated mode ---- */
    let raf = 0;
    let lastT = performance.now();
    let visible = false;
    let inViewport = true;
    let lastParticleSpawn = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;
      time += dt;

      // Smooth rotation
      rotYv += (48 * (targetRotY - rotY) - 12 * rotYv) * dt;
      rotY += rotYv * dt;
      rotXv += (48 * (targetRotX - rotX) - 12 * rotXv) * dt;
      rotX += rotXv * dt;

      // Spawn particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].u += dt * particles[i].speed;
        if (particles[i].u >= 1) particles.splice(i, 1);
      }
      if (now - lastParticleSpawn > 1100 && particles.length < 3) {
        particles.push({ col: (Math.random() * COLUMNS.length) | 0, u: 0, speed: 0.24 + 0.16 * Math.random() });
        lastParticleSpawn = now;
      }

      render(dt);
      if (visible) raf = requestAnimationFrame(tick);
    };

    const checkVisibility = () => {
      const shouldRun = inViewport && !document.hidden && sizeOk;
      if (shouldRun !== visible) {
        visible = shouldRun;
        if (visible) { cancelAnimationFrame(raf); lastT = performance.now(); raf = requestAnimationFrame(tick); }
        else cancelAnimationFrame(raf);
      }
    };

    checkVisibility();

    const ro = new ResizeObserver(() => { resize(); checkVisibility(); render(); });
    ro.observe(container);

    const io = new IntersectionObserver(([entry]) => { inViewport = entry.isIntersecting; checkVisibility(); }, { threshold: 0 });
    io.observe(container);

    const onVisChange = () => checkVisibility();
    document.addEventListener("visibilitychange", onVisChange);

    const onResize = () => { resize(); checkVisibility(); render(); };
    window.addEventListener("resize", onResize);

    if (!isCoarse) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout", onPointerOut, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisChange);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
