import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Blog | Sigmoidal",
  description: "Writing from the team on research, engineering, and the frontier of enterprise AI.",
};

const categories = ["All", "Generative AI", "AI Strategy", "Ethical AI", "Project Lifecycle", "Archive"];

const posts = [
  { date: "Jan 1, 2024", title: "Explore the Horizon of Possibilities: Access the Comprehensive Report on Current Market Applications of Generative AI", category: "Generative AI" },
  { date: "Nov 2, 2023", title: "GenAI Risks Your Business Can\u2019t Afford to Roll the Dice On", category: "Generative AI" },
  { date: "Oct 18, 2023", title: "Don\u2019t let 81% of enterprise companies outrun yours with an internal generative AI team", category: "Ethical AI" },
  { date: "Oct 16, 2023", title: "Five Ways Businesses Are Using AI to Their Advantage", category: "AI Strategy" },
  { date: "Oct 4, 2023", title: "Embrace the Next-Gen of Business with AI Knowledge Assistants", category: "AI Strategy" },
  { date: "Sep 27, 2023", title: "Full Power of Custom Data Integration in RAGs", category: "Generative AI" },
  { date: "Sep 13, 2023", title: "Is Your Company Ready to Join the 75% Making the Next-gen Shift by 2024?", category: "AI Strategy" },
  { date: "Aug 28, 2023", title: "Is Your AI Thinking Outside the Box?", category: "AI Strategy" },
  { date: "Aug 17, 2023", title: "Secure Over 83% of Customers Strictly by Embracing AI Compliance", category: "Ethical AI" },
  { date: "Jul 27, 2023", title: "This Is Why 85% of Machine Learning Projects Fail", category: "Project Lifecycle" },
  { date: "Jul 21, 2023", title: "Revolutionize Documents Generation, Market Research with AI", category: "AI Strategy" },
  { date: "Jun 20, 2023", title: "Be the Business in the 57% Succeeding, Not the 43% Worried about AI!", category: "AI Strategy" },
  { date: "Jun 25, 2020", title: "AI Solutions Against Bias and Discrimination: Do 2020 Machines Give a New Chance for Humanity?", category: "Ethical AI" },
  { date: "Jun 24, 2020", title: "Why Are Chatbots Cool, and Where Are They Headed?", category: "Archive" },
  { date: "Jun 24, 2020", title: "What Is Natural Language Processing (NLP)?", category: "Archive" },
  { date: "Jun 24, 2020", title: "Natural Language Processing vs. Machine Learning vs. Deep Learning", category: "Archive" },
  { date: "Jun 24, 2020", title: "A Survey of the Latest Chatbot APIs", category: "Archive" },
  { date: "Jun 19, 2020", title: "Online Word2Vec for Gensim", category: "Archive" },
  { date: "Jun 18, 2020", title: "Understanding Your Data: Basic Statistics", category: "Archive" },
  { date: "Jun 17, 2020", title: "The Math Behind Lucene", category: "Archive" },
  { date: "Jun 17, 2020", title: "All About That Bayes: An Intro to Probability", category: "Archive" },
  { date: "Jun 17, 2020", title: "Build Your Own Search Engine", category: "Archive" },
  { date: "Jun 3, 2020", title: "Fuzzy Matching: A Simple Trick", category: "Archive" },
  { date: "May 12, 2020", title: "Additive Attention in PyTorch: Implementation", category: "Archive" },
  { date: "May 7, 2020", title: "Recommender Systems, Part 1", category: "Archive" },
  { date: "Apr 28, 2020", title: "Interpreting Uncertainty in Bayesian Linear Regression", category: "Archive" },
  { date: "Apr 21, 2020", title: "AI Business Tools Making an Impact in 2020", category: "Archive" },
  { date: "Mar 24, 2020", title: "Where Syntax Ends and Semantics Begin. Why Should We Care?", category: "Archive" },
  { date: "Mar 18, 2020", title: "AI for Event-Driven Stock Prediction: Activist Investors", category: "Archive" },
  { date: "Mar 5, 2020", title: "AI in Investment Management Spots Event-driven Opportunities That Others Missed", category: "Archive" },
  { date: "Feb 14, 2018", title: "6 Jobs That Could See an Uptick in Demand With the Rise of AI: VentureBeat Article", category: "Archive" },
  { date: "Feb 8, 2018", title: "Natural Language Processing Algorithms (NLP AI)", category: "Archive" },
  { date: "Dec 21, 2017", title: "Portfolio Analysis by Machine Learning", category: "Archive" },
  { date: "Dec 21, 2017", title: "Use Case: Investment Opportunities Discovery", category: "Archive" },
  { date: "Dec 21, 2017", title: "Financial Times: Wall Street and AI (An Article)", category: "Archive" },
  { date: "Dec 21, 2017", title: "Artificial Intelligence and Machine Learning for Healthcare", category: "Archive" },
  { date: "Nov 28, 2017", title: "8 Machine Learning Terms Every Manager Should Know", category: "Archive" },
  { date: "Nov 28, 2017", title: "Artificial Intelligence Pharma: Drug Side-effect Detection", category: "Archive" },
  { date: "Nov 24, 2017", title: "Customer Clustering Using Artificial Intelligence", category: "Archive" },
  { date: "Nov 3, 2017", title: "Machine Learning in Business: Free Up 3 Hours per Day", category: "Archive" },
  { date: "Nov 3, 2017", title: "Machine Learning for Trading: Topic Overview", category: "Archive" },
  { date: "Oct 16, 2017", title: "AI in Finance: New Applications for High ROI in 2020", category: "Archive" },
  { date: "Oct 10, 2017", title: "Deep Learning Chatbot: Analysis and Implementation", category: "Archive" },
  { date: "Sep 27, 2017", title: "Recommendation Systems: How Companies Are Making Money", category: "Archive" },
  { date: "Sep 8, 2017", title: "Variational Dropout: Uncertainty in Deep Learning?", category: "Archive" },
  { date: "Sep 5, 2017", title: "GAN Deep Learning Architectures: Review", category: "Archive" },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              The blog
            </p>
            <h1 className="font-display text-h1 text-ink mt-5 reveal reveal-delay-1">Sigmoidal Signals</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              Writing from the team on research, engineering, and the frontier of enterprise AI.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 border-b border-ink/8 pb-6 reveal">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-deep-teal text-cream"
                    : "bg-paper text-ink/60 ring-1 ring-ink/10 ring-inset hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles heading */}
          <h2 className="mt-12 font-display text-h3 text-ink reveal">Articles</h2>

          {/* Post list */}
          <div className="mt-8 divide-y divide-ink/8">
            {posts.map((post, i) => (
              <Link
                key={i}
                href="#"
                className="group/link flex items-center justify-between gap-6 py-6 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate">{post.date}</p>
                  <h3 className="mt-2 font-display text-[1.1rem] leading-snug text-ink transition-colors group-hover/link:text-teal-ink">
                    {post.title}
                  </h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-ink opacity-0 transition-opacity group-hover/link:opacity-100">
                  <span className="link-underline">Read</span>
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
