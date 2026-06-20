
import { Award, Compass, BookOpen, Users, Code } from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    {
      title: "Ergonomic Interface Systems",
      desc: "Our interfaces reject clutter. We curate custom visual components and grids with meticulous spacing ratios to facilitate focus and minimize mental workload.",
      icon: Compass,
    },
    {
      title: "Production-Ready Pragmatism",
      desc: "We do not teach abstract theory in isolation. Every course maps directly to building verifiable components, enterprise code assets, or professional portfolios.",
      icon: Code,
    },
    {
      title: "World-Class Mentor Network",
      desc: "We curate instructors who have actively operated as core architects, key researchers, or leading directors at prominent industry organizations.",
      icon: Users,
    },
  ];

  return (
    <div
      className="py-12"
      id="learnify-about-us-view"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container" style={{ padding: "0 24px" }}>
        {/* Hero Section */}
        <div
          style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "12px",
              backgroundColor: "var(--primary-light)",
              color: "var(--primary)",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          >
            <BookOpen style={{ width: "40px", height: "40px" }} />
          </div>
          <h1
            className="text-3xl font-extrabold mt-4"
            style={{ margin: 0, letterSpacing: "-0.5px" }}
          >
            Syllabus of Excellence
          </h1>
          <p
            className="text-base text-muted mt-4"
            style={{ fontWeight: 500, lineHeight: 1.6, margin: "16px 0 0" }}
          >
            At Learnify, we believe digital interfaces shape how the world
            learns. We collaborate with senior technology architects and visual
            design directors to translate complex topics into clear, enjoyable,
            step-by-step masterclasses.
          </p>
        </div>

        {/* Visual Pillars Cards */}
        <div
          className="grid grid-cols-3"
          style={{ marginTop: "48px", gap: "24px" }}
        >
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="stat-cell"
                style={{
                  textAlign: "left",
                  alignItems: "flex-start",
                  padding: "24px",
                  gap: "16px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "var(--primary-light)",
                    color: "var(--primary)",
                    borderRadius: "8px",
                    display: "flex",
                  }}
                >
                  <Icon style={{ width: "22px", height: "22px" }} />
                </div>
                <h3
                  className="font-bold text-base"
                  style={{ color: "var(--text-main)", margin: 0 }}
                >
                  {val.title}
                </h3>
                <p
                  className="text-xs text-muted"
                  style={{ fontWeight: 600, lineHeight: 1.6, margin: 0 }}
                >
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Timeline of Projects */}
        <div
          style={{
            marginTop: "64px",
            borderTop: "1px solid var(--border-medium)",
            paddingTop: "48px",
          }}
        >
          <div
            className="grid grid-cols-2"
            style={{ alignItems: "center", gap: "48px" }}
          >
            <div
              className="flex flex-col gap-4 text-center"
              style={{ textAlign: "left", alignItems: "flex-start" }}
            >
              <span
                className="micro-banner"
                style={{ alignSelf: "flex-start" }}
              >
                Platform Statistics
              </span>
              <h2
                className="text-2xl font-black"
                style={{
                  letterSpacing: "-0.5px",
                  margin: "12px 0 0",
                  lineHeight: 1.3,
                }}
              >
                Trusted by thousands of software developers and interface
                engineers.
              </h2>
              <p
                className="text-xs text-muted"
                style={{ fontWeight: 500, lineHeight: 1.6, margin: "12px 0 0" }}
              >
                Since 2024, our verified syllabus credentials have helped
                students achieve breakthroughs at tech startups, marketing lead
                centers, and global digital studios.
              </p>
            </div>

            <div className="grid grid-cols-2" style={{ gap: "16px" }}>
              <div
                className="stat-cell"
                style={{
                  padding: "20px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="text-3xl font-black"
                  style={{ color: "var(--primary)" }}
                >
                  50,000+
                </span>
                <p
                  className="text-xs font-bold"
                  style={{
                    color: "var(--text-main)",
                    marginTop: "8px",
                    marginBottom: "2px",
                  }}
                >
                  Active Scholars
                </p>
                <p
                  className="text-xs text-muted"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "9px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Across 120 nations
                </p>
              </div>

              <div
                className="stat-cell"
                style={{
                  padding: "20px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="text-3xl font-black"
                  style={{ color: "var(--primary)" }}
                >
                  92%
                </span>
                <p
                  className="text-xs font-bold"
                  style={{
                    color: "var(--text-main)",
                    marginTop: "8px",
                    marginBottom: "2px",
                  }}
                >
                  Retention Growth
                </p>
                <p
                  className="text-xs text-muted"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "9px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Syllabus complete speed
                </p>
              </div>

              <div
                className="stat-cell"
                style={{
                  padding: "20px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="text-3xl font-black"
                  style={{ color: "var(--primary)" }}
                >
                  30+
                </span>
                <p
                  className="text-xs font-bold"
                  style={{
                    color: "var(--text-main)",
                    marginTop: "8px",
                    marginBottom: "2px",
                  }}
                >
                  Verified Modules
                </p>
                <p
                  className="text-xs text-muted"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "9px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Coding & Art fields
                </p>
              </div>

              <div
                className="stat-cell"
                style={{
                  padding: "20px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="text-3xl font-black"
                  style={{ color: "var(--primary)" }}
                >
                  24/7
                </span>
                <p
                  className="text-xs font-bold"
                  style={{
                    color: "var(--text-main)",
                    marginTop: "8px",
                    marginBottom: "2px",
                  }}
                >
                  Instant Chat Support
                </p>
                <p
                  className="text-xs text-muted"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "9px",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Simulated coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
