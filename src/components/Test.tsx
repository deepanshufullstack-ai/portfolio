"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Live Pricing",
    subtitle: "Real-time market data",
    description:
      "Monitor live stock prices with millisecond precision. Get instant alerts on price movements and track your portfolio performance in real time.",
    tag: "Markets",
    number: "01",
    accent: "#a8ff78",
    gradientFrom: "#0d1a0d",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Analyst Estimates",
    subtitle: "Expert forecasts",
    description:
      "Access consensus analyst estimates and price targets from top Wall Street firms. Compare bull and bear case scenarios side by side.",
    tag: "Research",
    number: "02",
    accent: "#78c8ff",
    gradientFrom: "#0d1520",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Company Financials",
    subtitle: "Deep fundamental data",
    description:
      "Explore full income statements, balance sheets, and cash flow data going back 10+ years. Visualize trends and compare against sector peers.",
    tag: "Fundamentals",
    number: "03",
    accent: "#ffd478",
    gradientFrom: "#1a150d",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Peer Analysis",
    subtitle: "Competitive benchmarking",
    description:
      "Instantly benchmark any company against its closest competitors across 50+ financial metrics. Identify relative strengths, weaknesses, and valuation gaps.",
    tag: "Comparison",
    number: "04",
    accent: "#e078ff",
    gradientFrom: "#150d1a",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Historical Earnings",
    subtitle: "Earnings track record",
    description:
      "Analyze every earnings report with beat/miss history, EPS surprises, and revenue trends. See exactly how the stock reacted post-earnings over the years.",
    tag: "Earnings",
    number: "05",
    accent: "#ff9f78",
    gradientFrom: "#1a0e0d",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Insider Transactions",
    subtitle: "Follow the smart money",
    description:
      "Track insider buying and selling with filterable tables and visual timelines. Spot meaningful patterns before the market does.",
    tag: "Insider",
    number: "06",
    accent: "#78ffd4",
    gradientFrom: "#0d1a16",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Email Updates",
    subtitle: "Weekly intelligence digest",
    description:
      "Busy schedule? Email Updates bring your watchlist summaries directly to you every Monday morning. Stay informed effortlessly.",
    tag: "Alerts",
    number: "07",
    accent: "#ff78a8",
    gradientFrom: "#1a0d12",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function AnimatedNumber({ value, duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const start = useRef(null);
  useEffect(() => {
    setDisplay(0);
    start.current = null;
    const raf = (ts) => {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [value, duration]);
  return display;
}

const stats = [
  { label: "Data Points", value: 4200, suffix: "+" },
  { label: "Companies Tracked", value: 8500, suffix: "+" },
  { label: "Analyst Reports", value: 320, suffix: "k" },
];

export default function Test() {
  const [activeId, setActiveId] = useState(7);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleCardClick = (id) => {
    if (id === activeId) return;
    setActiveId(id);
  };

  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section className={`root ${mounted ? "root--mounted" : ""}`}>
      <div className="grain" />
      <div
        className="blob blob-1"
        style={{ background: `radial-gradient(circle, ${activeProject.accent}18 0%, transparent 70%)` }}
      />
      <div className="blob blob-2" />
      <div className="grid-lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      <div className="inner">
        <div className="header">
          <div className="header-left">
            <div className="eyebrow">
              <span className="eyebrow-dot" style={{ background: activeProject.accent }} />
              Platform Features
            </div>
            <h2 className="heading">
              Built for the{" "}
              <span className="heading-accent" style={{ color: activeProject.accent }}>
                modern investor
              </span>
            </h2>
          </div>
          <div className="header-right">
            <div className="stats-row">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-number" style={{ color: activeProject.accent }}>
                    <AnimatedNumber value={s.value} key={activeId} />
                    {s.suffix}
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cards">
          {projects.map((project) => {
            const isActive = project.id === activeId;
            return (
              <div
                key={project.id}
                className={`card ${isActive ? "card--active" : "card--inactive"}`}
                style={{ "--accent": project.accent, "--grad": project.gradientFrom }}
                onClick={() => handleCardClick(project.id)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === "Enter" && handleCardClick(project.id)}
              >
                <div className="card-border" />
                {isActive && (
                  <div
                    className="card-halo"
                    style={{
                      background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${project.accent}22 0%, transparent 70%)`,
                    }}
                  />
                )}

                {!isActive && (
                  <div className="inactive-body">
                    <span className="inactive-num">{project.number}</span>
                    <span className="inactive-title">{project.title}</span>
                    <div className="inactive-icon">{project.icon}</div>
                  </div>
                )}

                {isActive && (
                  <div className="active-body" key={activeId}>
                    <div className="active-left">
                      <div className="active-top">
                        <span className="active-num">{project.number}</span>
                        <span
                          className="active-tag"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}40`,
                            background: `${project.accent}10`,
                          }}
                        >
                          {project.tag}
                        </span>
                      </div>
                      <div className="active-center">
                        <div
                          className="active-icon-wrap"
                          style={{ borderColor: `${project.accent}30`, background: `${project.accent}0d` }}
                        >
                          <div style={{ color: project.accent }}>{project.icon}</div>
                        </div>
                        <h3 className="active-title">{project.title}</h3>
                        <p className="active-subtitle" style={{ color: `${project.accent}cc` }}>
                          {project.subtitle}
                        </p>
                      </div>
                      <button
                        className="active-cta"
                        style={{ borderColor: `${project.accent}40`, color: project.accent }}
                      >
                        <span>Explore feature</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>

                    <div
                      className="active-divider"
                      style={{
                        background: `linear-gradient(to bottom, transparent, ${project.accent}30, transparent)`,
                      }}
                    />

                    <div className="active-right">
                      <p className="active-description">{project.description}</p>
                      <div className="mini-bars">
                        {[0.4, 0.7, 0.55, 0.85, 0.6, 0.75, 0.5, 0.9].map((h, i) => (
                          <div key={i} className="mini-bar-wrap">
                            <div
                              className="mini-bar"
                              style={{
                                height: `${h * 48}px`,
                                background: project.accent,
                                opacity: 0.15 + h * 0.25,
                                animationDelay: `${i * 0.06}s`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="nav-dots">
                        {projects.map((p) => (
                          <button
                            key={p.id}
                            className={`nav-dot ${p.id === activeId ? "nav-dot--active" : ""}`}
                            style={
                              p.id === activeId
                                ? { background: project.accent, boxShadow: `0 0 8px ${project.accent}80` }
                                : {}
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(p.id);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .root {
          position: relative;
          min-height: 100vh;
          background: #060608;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
          padding: 80px 40px;
        }

        .grain {
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          animation: grain-shift 8s steps(2) infinite;
        }

        @keyframes grain-shift {
          0%   { transform: translate(0,0); }
          20%  { transform: translate(-2%,-2%); }
          40%  { transform: translate(2%,1%); }
          60%  { transform: translate(-1%,2%); }
          80%  { transform: translate(1%,-1%); }
          100% { transform: translate(0,0); }
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: background 1s ease;
        }
        .blob-1 {
          width: 700px; height: 700px;
          top: -200px; right: -100px;
          animation: blob-drift 12s ease-in-out infinite alternate;
        }
        .blob-2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -80px;
          background: radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%);
          animation: blob-drift 16s ease-in-out infinite alternate-reverse;
        }
        @keyframes blob-drift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(40px,30px) scale(1.08); }
        }

        .grid-lines {
          position: absolute; inset: 0;
          display: flex; justify-content: space-between;
          pointer-events: none; overflow: hidden;
        }
        .grid-line {
          width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent 100%);
          animation: line-pulse 4s ease-in-out infinite;
        }
        @keyframes line-pulse {
          0%,100% { opacity: 0.3; }
          50%     { opacity: 0.8; }
        }

        .inner {
          position: relative;
          width: 100%; max-width: 1400px;
          display: flex; flex-direction: column; gap: 48px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .root--mounted .inner { opacity: 1; transform: translateY(0); }

        .header {
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 24px;
        }
        .header-left { display: flex; flex-direction: column; gap: 14px; }

        .eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          transition: background 0.6s ease;
          filter: blur(0px);
          box-shadow: 0 0 10px currentColor;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: 0.6; transform: scale(0.8); }
        }

        .heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 400; color: rgba(255,255,255,0.9);
          margin: 0; line-height: 1; letter-spacing: 0.03em;
        }
        .heading-accent { transition: color 0.6s ease; }

        .stats-row { display: flex; gap: 36px; }
        .stat { display: flex; flex-direction: column; gap: 4px; text-align: right; }
        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px; letter-spacing: 0.04em; line-height: 1;
          transition: color 0.6s ease;
        }
        .stat-label {
          font-size: 10px; font-weight: 400;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        /* ── Cards ── */
        .cards {
          display: flex; gap: 8px; height: 340px; align-items: stretch;
        }

        .card {
          position: relative; border-radius: 16px; overflow: hidden;
          cursor: pointer;
          transition:
            flex 0.65s cubic-bezier(0.77,0,0.175,1),
            box-shadow 0.4s ease,
            border-color 0.4s ease,
            background 0.5s ease;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .card--inactive { flex: 0 0 58px; }
        .card--inactive:hover {
          flex: 0 0 74px;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }
        .card--active {
          flex: 1 1 auto;
          background: linear-gradient(135deg, var(--grad) 0%, #0d0d10 100%);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.6),
                      inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .card-border {
          position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%);
          pointer-events: none; opacity: 0; transition: opacity 0.4s ease;
        }
        .card--active .card-border { opacity: 1; }

        .card-halo {
          position: absolute; inset: 0; pointer-events: none;
          transition: background 0.6s ease;
        }

        /* Inactive */
        .inactive-body {
          display: flex; flex-direction: column; align-items: center;
          justify-content: space-between; height: 100%; padding: 22px 0; gap: 12px;
        }
        .inactive-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px; letter-spacing: 0.1em; color: rgba(255,255,255,0.2);
        }
        .inactive-title {
          font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.45);
          writing-mode: vertical-rl; text-orientation: mixed;
          letter-spacing: 0.08em; transform: rotate(180deg);
          white-space: nowrap; flex: 1; display: flex; align-items: center;
          transition: color 0.3s ease;
        }
        .card--inactive:hover .inactive-title { color: rgba(255,255,255,0.75); }
        .inactive-icon { color: rgba(255,255,255,0.18); transition: color 0.3s ease; }
        .card--inactive:hover .inactive-icon { color: rgba(255,255,255,0.4); }

        /* Active */
        .active-body {
          display: flex; height: 100%; gap: 0;
          animation: fadeInActive 0.45s cubic-bezier(0.34,1.2,0.64,1) forwards;
        }
        @keyframes fadeInActive {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .active-left {
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 26px 28px; min-width: 220px; max-width: 260px; flex-shrink: 0;
        }
        .active-top { display: flex; align-items: center; justify-content: space-between; }
        .active-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.12em; color: rgba(255,255,255,0.2);
        }
        .active-tag {
          font-size: 10px; font-weight: 500; letter-spacing: 0.15em;
          text-transform: uppercase; padding: 4px 10px;
          border-radius: 100px; border: 1px solid; transition: all 0.5s ease;
        }
        .active-center { display: flex; flex-direction: column; gap: 10px; }
        .active-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.5s ease;
        }
        .active-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px; font-weight: 400; color: rgba(255,255,255,0.95);
          margin: 0; letter-spacing: 0.04em; line-height: 1;
        }
        .active-subtitle {
          font-size: 12px; font-weight: 400; margin: 0;
          letter-spacing: 0.02em; transition: color 0.5s ease; opacity: 0.85;
        }
        .active-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: 1px solid;
          font-family: 'Outfit', sans-serif; font-size: 11px;
          font-weight: 500; letter-spacing: 0.06em;
          padding: 9px 16px; border-radius: 100px; cursor: pointer;
          width: fit-content; transition: all 0.3s ease;
        }
        .active-cta:hover { gap: 14px; background: rgba(255,255,255,0.06); }

        .active-divider {
          width: 1px; margin: 20px 0; flex-shrink: 0;
          transition: background 0.6s ease;
        }

        .active-right {
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 26px 28px; flex: 1;
        }
        .active-description {
          font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.5);
          line-height: 1.7; margin: 0; max-width: 380px;
          animation: fadeUp 0.5s ease 0.1s both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mini-bars {
          display: flex; align-items: flex-end; gap: 5px; height: 56px;
          animation: fadeUp 0.5s ease 0.15s both;
        }
        .mini-bar-wrap { display: flex; align-items: flex-end; }
        .mini-bar {
          width: 8px; border-radius: 3px 3px 0 0;
          transition: background 0.6s ease;
          animation: bar-grow 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes bar-grow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to   { transform: scaleY(1); transform-origin: bottom; }
        }

        .nav-dots {
          display: flex; gap: 6px; align-items: center;
          animation: fadeUp 0.5s ease 0.2s both;
        }
        .nav-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.15); border: none;
          cursor: pointer; padding: 0; transition: all 0.3s ease;
        }
        .nav-dot:hover { background: rgba(255,255,255,0.35); transform: scale(1.3); }
        .nav-dot--active { width: 20px; border-radius: 3px; }

        @media (max-width: 900px) {
          .cards { height: auto; flex-direction: column; }
          .card--inactive { flex: 0 0 52px; }
          .inactive-body { flex-direction: row; padding: 0 16px; }
          .inactive-title { writing-mode: horizontal-tb; transform: none; }
          .card--active { min-height: 320px; }
          .active-body { flex-direction: column; }
          .active-divider { width: 100%; height: 1px; margin: 0 20px; }
          .stats-row { display: none; }
          .header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}