"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
}

interface Edge {
  a: number;
  b: number;
}

const LAYERS = 6;
const GRID = 7;
const SPACING = 38;
const LAYER_GAP = 52;
const ISO_X = Math.cos(Math.PI / 6);
const ISO_Y = Math.sin(Math.PI / 6);

function project(x: number, y: number, z: number, cx: number, cy: number) {
  return {
    sx: cx + (x - y) * ISO_X * SPACING,
    sy: cy + (x + y) * ISO_Y * SPACING - z * LAYER_GAP,
  };
}

function buildGraph(cx: number, cy: number) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const indexMap = new Map<string, number>();

  for (let layer = 0; layer < LAYERS; layer++) {
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const key = `${layer}-${row}-${col}`;
        const { sx, sy } = project(col - GRID / 2, row - GRID / 2, layer, cx, cy);
        indexMap.set(key, nodes.length);
        nodes.push({ x: col, y: row, z: layer, sx, sy });
      }
    }
  }

  // Horizontal edges within each layer
  for (let layer = 0; layer < LAYERS; layer++) {
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const idx = indexMap.get(`${layer}-${row}-${col}`)!;
        if (col < GRID - 1) edges.push({ a: idx, b: indexMap.get(`${layer}-${row}-${col + 1}`)! });
        if (row < GRID - 1) edges.push({ a: idx, b: indexMap.get(`${layer}-${row + 1}-${col}`)! });
      }
    }
  }

  // Vertical edges between layers (only some nodes)
  for (let layer = 0; layer < LAYERS - 1; layer++) {
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        // Connect ~30% of nodes vertically for visual interest
        if ((row + col + layer) % 3 === 0) {
          const a = indexMap.get(`${layer}-${row}-${col}`)!;
          const b = indexMap.get(`${layer + 1}-${row}-${col}`)!;
          edges.push({ a, b });
        }
      }
    }
  }

  return { nodes, edges };
}

export default function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const graphRef = useRef<{ nodes: Node[]; edges: Edge[] } | null>(null);
  const rafRef = useRef<number>(0);
  const tealRgb = { r: 42, g: 161, b: 152 };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    if (!graphRef.current) {
      graphRef.current = buildGraph(w * 0.5, h * 0.62);
    }

    const { nodes, edges } = graphRef.current;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const INTERACT_RADIUS = 120;

    // Draw edges
    for (const edge of edges) {
      const na = nodes[edge.a];
      const nb = nodes[edge.b];
      const midX = (na.sx + nb.sx) / 2;
      const midY = (na.sy + nb.sy) / 2;
      const distMouse = Math.hypot(midX - mx, midY - my);
      const isVertical = na.z !== nb.z;

      let alpha: number;
      if (distMouse < INTERACT_RADIUS) {
        const t = 1 - distMouse / INTERACT_RADIUS;
        alpha = isVertical ? 0.08 + t * 0.55 : 0.06 + t * 0.4;
      } else {
        alpha = isVertical ? 0.08 : 0.06;
      }

      ctx.beginPath();
      ctx.moveTo(na.sx, na.sy);
      ctx.lineTo(nb.sx, nb.sy);
      ctx.strokeStyle = `rgba(${tealRgb.r},${tealRgb.g},${tealRgb.b},${alpha})`;
      ctx.lineWidth = isVertical ? 0.8 : 0.6;
      ctx.stroke();
    }

    // Draw nodes
    for (const node of nodes) {
      const dist = Math.hypot(node.sx - mx, node.sy - my);
      let radius: number;
      let alpha: number;

      if (dist < INTERACT_RADIUS) {
        const t = 1 - dist / INTERACT_RADIUS;
        radius = 1.2 + t * 2.5;
        alpha = 0.15 + t * 0.75;
      } else {
        radius = 1.2;
        alpha = 0.15;
      }

      ctx.beginPath();
      ctx.arc(node.sx, node.sy, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${tealRgb.r},${tealRgb.g},${tealRgb.b},${alpha})`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [tealRgb.r, tealRgb.g, tealRgb.b]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      graphRef.current = null; // rebuild on resize
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ touchAction: "none" }}
    />
  );
}
