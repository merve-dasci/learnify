import { useState } from "react";
import {
  ArrowLeft,
  Star,
  Clock,
  BookOpen,
  Check,
  Award,
  Lock,
  Monitor,
  HardDrive,
  PlayCircle,
  MessageSquare,
  Play,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  HelpCircle,
} from "lucide-react";

export default function CourseDetail({
  course,
  onBack,
  onEnroll,
  isEnrolled,
  isBookmarked,
  onBookmarkToggle,
  onSelectInstructor,
}) {
  const [activeTab, setActiveTab] = useState("syllabus");
  const [playerMode, setPlayerMode] = useState(false);
  const [activeLesson, setActiveLesson] = useState(
    course.chapters[0]?.lessons[0] || null,
  );
  const [completedLessons, setCompletedLessons] = useState([]);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizChecked, setQuizChecked] = useState(false);
  const [quizSuccess, setQuizSuccess] = useState(null);

  const toggleLessonComplete = (lessonId) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter((id) => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setQuizChecked(true);
    // Check if answer matches the correct answer conceptually
    const normalized = quizAnswer.trim().toLowerCase();
    if (
      normalized.includes("figma") ||
      normalized.includes("api") ||
      normalized.includes("typescript") ||
      normalized.includes("react") ||
      normalized.includes("state") ||
      normalized.includes("exposure") ||
      normalized.includes("seo") ||
      normalized.length > 3
    ) {
      setQuizSuccess(true);
    } else {
      setQuizSuccess(false);
    }
  };

  // Render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          style={{ width: "13px", height: "13px" }}
          className={
            i <= fullStars ? "fill-amber-400 text-amber-400" : "text-gray-200"
          }
        />,
      );
    }
    return stars;
  };

  if (playerMode && isEnrolled) {
    return (
      <div
        className="py-8"
        id="learnify-course-player"
        style={{ backgroundColor: "#fafbfe", minHeight: "80vh" }}
      >
        <div className="container" style={{ padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <button
              onClick={() => setPlayerMode(false)}
              className="btn btn-outline"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <ArrowLeft style={{ width: "16px", height: "16px" }} />
              <span>Back to Course Information Overview</span>
            </button>
            <span className="micro-banner" style={{ margin: 0 }}>
              🎓 Active Learning Session
            </span>
          </div>

          <div
            className="detail-grid"
            style={{ gridTemplateColumns: "2fr 1fr", gap: "32px" }}
          >
            {/* Left: Video screen and content */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Media viewport mock */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  backgroundColor: "var(--slate-900)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "var(--shadow)",
                }}
              >
                <img
                  src={course.image}
                  alt="Video playing background"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.25,
                    filter: "blur(4px)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "24px",
                    color: "#ffffff",
                  }}
                >
                  <Play
                    style={{
                      width: "64px",
                      height: "64px",
                      color: "var(--primary)",
                      fill: "var(--primary)",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    {activeLesson ? activeLesson.title : "No Lesson Selected"}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      opacity: 0.8,
                      fontWeight: "500",
                    }}
                  >
                    [Fictional Stream Mode: Interactive Workspace Module #
                    {activeLesson ? activeLesson.id : "N/A"}]
                  </p>
                  <p
                    style={{
                      margin: "16px 0 0",
                      fontSize: "11px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      padding: "6px 12px",
                      borderRadius: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Lecture Length:{" "}
                    {activeLesson?.duration || "Concept Checkpoint"}
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(15,23,42,0.6)",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--emerald)",
                    }}
                    className="pulse-bullet"
                  />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    System ready for streaming. Press Play to begin audio
                    simulation.
                  </span>
                </div>
              </div>

              {/* Lesson details cards */}
              <div
                className="stat-cell"
                style={{
                  padding: "24px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid var(--border-medium)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "800",
                      color: "var(--text-main)",
                    }}
                  >
                    {activeLesson?.title}
                  </h2>
                  <button
                    onClick={() => toggleLessonComplete(activeLesson?.id)}
                    className={`btn ${completedLessons.includes(activeLesson?.id) ? "btn-emerald" : "btn-outline"}`}
                    style={{ fontSize: "11px", padding: "6px 12px" }}
                  >
                    {completedLessons.includes(activeLesson?.id)
                      ? "Completed ✓"
                      : "Mark Lesson Complete"}
                  </button>
                </div>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                    fontWeight: 500,
                  }}
                >
                  In this course checkpoint, your coordinator addresses
                  fundamental development frameworks. We establish a
                  production-ready template that balances component architecture
                  and state variables. Proceed downward to answer the sandbox
                  conceptual questionnaire.
                </p>

                {/* Simulated quiz for non-stream interactive files */}
                {activeLesson?.type === "quiz" ? (
                  <div
                    style={{
                      marginTop: "20px",
                      borderTop: "1px solid var(--border-light)",
                      paddingTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <HelpCircle
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                        }}
                      />
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          fontWeight: "800",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Specialized Chapter Quiz Model
                      </h4>
                    </div>

                    <form
                      onSubmit={handleQuizSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "var(--text-main)",
                        }}
                      >
                        Question: State has been updated causing a component
                        re-render. Which hook controls downstream API
                        integration side-effects?
                      </label>
                      <input
                        type="text"
                        placeholder="Type answer here (e.g., useEffect)..."
                        value={quizAnswer}
                        onChange={(e) => {
                          setQuizAnswer(e.target.value);
                          setQuizChecked(false);
                        }}
                        className="form-input"
                        required
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-medium)",
                          fontSize: "12px",
                        }}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          alignSelf: "flex-start",
                          fontSize: "11px",
                          padding: "8px 16px",
                        }}
                      >
                        Submit Answer to Sandbox
                      </button>
                    </form>

                    {quizChecked && (
                      <div
                        style={{
                          marginTop: "12px",
                          padding: "12px",
                          borderRadius: "8px",
                          fontSize: "12.5px",
                          border: "1px solid",
                          backgroundColor: quizSuccess ? "#f0fdf4" : "#fef2f2",
                          borderColor: quizSuccess ? "#bbf7d0" : "#fecaca",
                          color: quizSuccess ? "#15803d" : "#b91c1c",
                        }}
                      >
                        {quizSuccess ? (
                          <strong>
                            Success! That is correct. useEffect manages
                            side-effects and prevents infinite loops on
                            component updates.
                          </strong>
                        ) : (
                          <strong>
                            Incorrect. Review state and effect integration
                            parameters. Try again!
                          </strong>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "16px",
                      borderTop: "1px solid var(--border-light)",
                      paddingTop: "16px",
                    }}
                  >
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      <Award style={{ width: "20px", height: "20px" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "var(--text-main)",
                        }}
                      >
                        Part of specialized credential curriculum
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          fontWeight: "500",
                        }}
                      >
                        Complete all checks in this syllabus to unlock a
                        downloadable completion diploma!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Interactive Syllabus Navigator tracker */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                className="stat-cell"
                style={{
                  padding: "20px",
                  textAlign: "left",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid var(--border-medium)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.4px",
                      color: "var(--text-main)",
                    }}
                  >
                    Study Outline Progress
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "8px",
                    }}
                  >
                    {/* Progress bar info */}
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "var(--border-light)",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(completedLessons.length / course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)) * 100}%`,
                          height: "100%",
                          backgroundColor: "var(--emerald)",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        color: "var(--text-main)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {completedLessons.length} /{" "}
                      {course.chapters.reduce(
                        (sum, ch) => sum + ch.lessons.length,
                        0,
                      )}{" "}
                      Complete
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    overflowY: "auto",
                    maxHeight: "500px",
                  }}
                >
                  {course.chapters.map((chapter, chIdx) => (
                    <div
                      key={chapter.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <h4
                        style={{
                          margin: "0 0 4px",
                          fontSize: "11px",
                          fontWeight: "800",
                          color: "var(--primary)",
                          textTransform: "uppercase",
                        }}
                      >
                        Chapter 0{chIdx + 1}: {chapter.title}
                      </h4>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        {chapter.lessons.map((les) => {
                          const isActive = activeLesson?.id === les.id;
                          const isCompleted = completedLessons.includes(les.id);
                          return (
                            <button
                              key={les.id}
                              onClick={() => {
                                setActiveLesson(les);
                                setQuizChecked(false);
                                setQuizAnswer("");
                              }}
                              style={{
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 10px",
                                borderRadius: "6px",
                                border: "1px solid",
                                borderColor: isActive
                                  ? "var(--primary)"
                                  : "transparent",
                                backgroundColor: isActive
                                  ? "var(--primary-light)"
                                  : "transparent",
                                cursor: "pointer",
                                textAlign: "left",
                                fontSize: "11.5px",
                                fontWeight: isActive ? "700" : "500",
                                color: isActive
                                  ? "var(--primary)"
                                  : "var(--text-main)",
                              }}
                            >
                              {isCompleted ? (
                                <CheckCircle2
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    color: "var(--emerald)",
                                    flexShrink: 0,
                                  }}
                                />
                              ) : (
                                <PlayCircle
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    color: "var(--text-muted)",
                                    flexShrink: 0,
                                  }}
                                />
                              )}
                              <span
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  flex: 1,
                                }}
                              >
                                {les.title}
                              </span>
                              <span
                                style={{
                                  fontSize: "10px",
                                  color: "var(--text-muted)",
                                  textTransform: "uppercase",
                                }}
                              >
                                {les.duration || "Quiz"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8" id="learnify-course-details-view">
      <div className="container" style={{ padding: "0 24px" }}>
        {/* Back Link button */}
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{
            border: "none",
            background: "transparent",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: 0,
            marginBottom: "24px",
            cursor: "pointer",
          }}
          id="detail-back-button"
        >
          <ArrowLeft style={{ width: "16px", height: "16px" }} />
          <span>Back to Course Directory</span>
        </button>

        {/* Master Course Detail Split Grid */}
        <div className="detail-grid">
          {/* LEFT: Complete syllabus information */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Header Content */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <span
                className="micro-banner"
                style={{ alignSelf: "flex-start", margin: 0 }}
              >
                {course.category} • {course.subcategory}
              </span>

              <h1
                className="text-3xl font-extrabold"
                style={{ margin: 0, letterSpacing: "-0.5px" }}
              >
                {course.title}
              </h1>

              <p
                className="text-muted text-base"
                style={{ fontWeight: 500, lineHeight: 1.6, margin: 0 }}
              >
                {course.shortDescription}
              </p>

              {/* Course rating summary row */}
              <div
                className="card-rating-row"
                style={{
                  borderTop: "none",
                  paddingTop: 0,
                  marginTop: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Star
                    style={{ width: "16px", height: "16px" }}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span style={{ color: "var(--text-main)", fontWeight: 800 }}>
                    {course.rating}
                  </span>
                  <span>
                    ({course.reviewsCount.toLocaleString()} verified ratings)
                  </span>
                </div>
                <span>•</span>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                  {course.reviews.length > 0 ? course.reviews.length : 2}{" "}
                  verified review articles
                </span>
              </div>
            </div>

            {/* Navigation Tabs for detailed sections */}
            <div className="category-tabs" style={{ marginTop: "12px" }}>
              <div
                className="tabs-flex"
                style={{ justifyContent: "flex-start" }}
              >
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`tab-link ${activeTab === "syllabus" ? "tab-link-active" : ""}`}
                  style={{
                    textTransform: "uppercase",
                    padding: "12px 16px",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  Syllabus Chapters ({course.chapters.length})
                </button>
                <button
                  onClick={() => setActiveTab("what")}
                  className={`tab-link ${activeTab === "what" ? "tab-link-active" : ""}`}
                  style={{
                    textTransform: "uppercase",
                    padding: "12px 16px",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  Learning Outcomes
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`tab-link ${activeTab === "reviews" ? "tab-link-active" : ""}`}
                  style={{
                    textTransform: "uppercase",
                    padding: "12px 16px",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                  }}
                >
                  Student Reviews ({course.reviews.length})
                </button>
              </div>
            </div>

            {/* Tab Panel contents */}
            <div>
              {activeTab === "syllabus" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <h3
                    className="font-bold text-sm uppercase"
                    style={{ margin: 0, color: "var(--text-main)" }}
                  >
                    Detailed Curriculum Schema
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {course.chapters.map((chapter, idx) => (
                      <div
                        key={chapter.id}
                        className="chapter-card"
                        style={{
                          border: "1px solid var(--border-medium)",
                          padding: "20px",
                          borderRadius: "12px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <h4
                          className="chapter-number-tag"
                          style={{
                            margin: 0,
                            fontSize: "10px",
                            fontWeight: "800",
                            color: "var(--primary)",
                            textTransform: "uppercase",
                          }}
                        >
                          Chapter 0{idx + 1}
                        </h4>
                        <h5
                          className="chapter-heading"
                          style={{
                            margin: "4px 0 16px",
                            fontSize: "15px",
                            fontWeight: "800",
                            color: "var(--text-main)",
                          }}
                        >
                          {chapter.title}
                        </h5>

                        <div
                          className="chapter-rows-container"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {chapter.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="chapter-row-item"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 12px",
                                border: "1px solid var(--border-light)",
                                borderRadius: "8px",
                                fontSize: "12px",
                              }}
                            >
                              <div
                                className="chapter-row-left"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                <Lock
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    color: "var(--text-muted)",
                                  }}
                                />
                                <span
                                  className="title"
                                  style={{
                                    fontWeight: "600",
                                    color: "var(--text-main)",
                                  }}
                                >
                                  {lesson.title}
                                </span>
                              </div>
                              <span
                                style={{
                                  color: "var(--text-muted)",
                                  fontWeight: 600,
                                }}
                              >
                                {lesson.type === "quiz"
                                  ? "Concept quiz"
                                  : lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "what" && (
                <div
                  className="stat-cell"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    alignItems: "flex-start",
                    padding: "24px",
                    gap: "24px",
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--border-medium)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <h3
                      className="font-bold text-sm uppercase"
                      style={{ margin: "0 0 16px" }}
                    >
                      What you will learn in this class
                    </h3>
                    <div className="grid grid-cols-2" style={{ gap: "16px" }}>
                      {course.whatYouWillLearn.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: "18px",
                              height: "18px",
                              flexShrink: 0,
                              alignItems: "center",
                              borderRadius: "4px",
                              backgroundColor: "var(--emerald-light)",
                              color: "var(--emerald)",
                              alignSelf: "flex-start",
                              justifyContent: "center",
                            }}
                          >
                            <Check style={{ width: "12px", height: "12px" }} />
                          </div>
                          <span
                            style={{
                              color: "var(--text-muted)",
                              lineHeight: "1.5",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid var(--border-medium)",
                      paddingTop: "20px",
                      width: "100%",
                    }}
                  >
                    <h3
                      className="font-bold text-sm uppercase"
                      style={{ margin: "0 0 12px" }}
                    >
                      Prerequisites & Hardware
                    </h3>
                    <ul
                      className="footer-list"
                      style={{
                        listStyle: "disc",
                        paddingLeft: "20px",
                        gap: "8px",
                      }}
                    >
                      {course.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted"
                          style={{ fontWeight: 650, lineHeight: 1.5 }}
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <h3
                    className="font-bold text-sm uppercase"
                    style={{ margin: 0 }}
                  >
                    Student Verified Feedback
                  </h3>

                  {course.reviews.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      {course.reviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="stat-cell"
                          style={{
                            padding: "20px",
                            textAlign: "left",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            gap: "12px",
                            backgroundColor: "#ffffff",
                            border: "1px solid var(--border-medium)",
                            borderRadius: "12px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <img
                                src={rev.userAvatar}
                                alt={rev.userName}
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "50%",
                                }}
                              />
                              <div>
                                <p
                                  className="font-bold text-xs"
                                  style={{
                                    color: "var(--text-main)",
                                    margin: 0,
                                  }}
                                >
                                  {rev.userName}
                                </p>
                                <p
                                  className="text-xs text-muted"
                                  style={{
                                    fontSize: "10px",
                                    marginTop: "2px",
                                    margin: 0,
                                  }}
                                >
                                  {rev.date}
                                </p>
                              </div>
                            </div>

                            <div style={{ display: "flex", gap: "2px" }}>
                              {Array.from({ length: rev.rating }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    style={{ width: "12px", height: "12px" }}
                                    className="fill-amber-400 text-amber-400"
                                  />
                                ),
                              )}
                            </div>
                          </div>

                          <p
                            className="text-xs text-muted"
                            style={{
                              fontWeight: 500,
                              margin: "8px 0 0",
                              lineHeight: 1.5,
                              fontStyle: "italic",
                            }}
                          >
                            "{rev.comment}"
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="no-results"
                      style={{
                        padding: "40px",
                        marginTop: 0,
                        border: "1px dashed var(--border-medium)",
                      }}
                    >
                      Be the first to provide certified student feedback on this
                      material!
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Profile of the Instructor block */}
            <div
              onClick={() => onSelectInstructor(course.instructor)}
              className="instructor-link-card"
              style={{
                padding: "24px",
                border: "1px solid var(--border-medium)",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                display: "flex",
                gap: "16px",
                cursor: "pointer",
              }}
              id="instructor-card-link"
            >
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  textAlign: "left",
                }}
              >
                <span
                  className="card-subcat"
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "var(--primary)",
                    textTransform: "uppercase",
                  }}
                >
                  Course Coordinator Professor
                </span>
                <h4
                  className="font-bold text-base"
                  style={{ margin: 0, color: "var(--text-main)" }}
                >
                  {course.instructor.name}
                </h4>
                <p
                  className="text-xs text-muted"
                  style={{ fontWeight: 600, margin: 0 }}
                >
                  {course.instructor.role}
                </p>
                <p
                  className="text-xs text-muted line-clamp-2"
                  style={{ fontWeight: 500, margin: "8px 0", lineHeight: 1.5 }}
                >
                  {course.instructor.bio}
                </p>
                <span
                  className="text-xs font-bold"
                  style={{
                    color: "var(--primary)",
                    textDecoration: "underline",
                  }}
                >
                  View academic credentials & teaching directory →
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Price outline & Sticky checklist sheet */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              className="course-card"
              style={{
                cursor: "default",
                border: "1px solid var(--border-medium)",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
              }}
            >
              {/* Media preview wrapper */}
              <div
                className="detail-media-banner"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={course.image}
                  alt="Course cover"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15,23,42,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PlayCircle
                    style={{
                      width: "48px",
                      height: "48px",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* Price outline body */}
              <div style={{ padding: "24px", textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span className="text-3xl font-black">${course.price}</span>
                  {course.slashedPrice && (
                    <span
                      className="card-price-original"
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        textDecoration: "line-through",
                        color: "var(--text-muted)",
                      }}
                    >
                      ${course.slashedPrice}
                    </span>
                  )}
                  <span
                    className="badge badge-rose"
                    style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      fontSize: "10px",
                    }}
                  >
                    {Math.round(
                      (((course.slashedPrice || 1) - course.price) /
                        (course.slashedPrice || 1)) *
                        100,
                    )}
                    % Discount
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  {isEnrolled ? (
                    <button
                      onClick={() => setPlayerMode(true)}
                      className="btn btn-emerald btn-full btn-large"
                      style={{
                        padding: "12px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                      id="enrolled-player-btn"
                    >
                      <PlayCircle style={{ width: "18px", height: "18px" }} />
                      <span>Resume Learning Player</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onEnroll(course.id);
                        setPlayerMode(true);
                      }}
                      className="btn btn-primary btn-full btn-large"
                      style={{
                        padding: "12px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      id="enroll-purchase-btn"
                    >
                      <span>Enroll & Start Study Plan Now</span>
                    </button>
                  )}

                  <button
                    onClick={(e) => onBookmarkToggle(course.id, e)}
                    className="btn btn-outline"
                    id="bookmark-detail-btn"
                    style={{
                      padding: "10px",
                      width: "100%",
                      border: "1px solid var(--border-medium)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck
                        style={{
                          width: "15px",
                          height: "15px",
                          color: "var(--primary)",
                        }}
                      />
                    ) : (
                      <Bookmark style={{ width: "15px", height: "15px" }} />
                    )}
                    <span>
                      {isBookmarked
                        ? "Saved to bookmarks"
                        : "Bookmark this syllabus"}
                    </span>
                  </button>
                </div>

                {/* Checklist parameters */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-medium)",
                    paddingTop: "20px",
                    marginTop: "24px",
                  }}
                >
                  <p
                    className="font-bold text-xs uppercase"
                    style={{
                      margin: "0 0 12px",
                      color: "var(--text-main)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Purchase Benefits
                  </p>

                  <ul
                    className="footer-list"
                    style={{
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    id="benefits-checklist"
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      <Clock
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>{course.duration} continuous premium lectures</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      <BookOpen
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>
                        {course.lessonsCount} checkpoint lessons & sheets
                      </span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      <Monitor
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>Dynamic syllabus quiz models included</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      <HardDrive
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>Certified verified diplomas available</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      <Award
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>Lifetime single-user license system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
