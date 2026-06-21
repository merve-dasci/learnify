import { BookOpenCheck, Users, Award } from "lucide-react";

export default function Header({totalCourses, totalCategories}) {
  return (
    <section className="hero" id="learnify-header-banner">
      <div className="container hero-inner">
        <div className="micro-banner">
          <BookOpenCheck style={{ width: "14px", height: "14px" }} />
          <span>Online Eğitim Platformu</span>
        </div>

        <h1 className="hero-title">
          Yeni Beceriler Öğrenmeye{" "}
          <span className="gradient-text">Learnify</span> ile Başla
        </h1>

        <p className="hero-subtext">
          Yazılım, tasarım ve kişisel gelişim alanlarında temel seviyeden ileri
          seviyeye kadar farklı eğitimleri keşfedebilirsin.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              document
                .getElementById("course-grid")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kursları Keşfet
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-cell">
            <div className="stat-icon-wrapper indigo">
              <Users style={{ width: "24px", height: "24px" }} />
            </div>
            <p className="stat-num">500+</p>
            <p className="stat-label">Öğrenci</p>
          </div>

          <div className="stat-cell">
            <div className="stat-icon-wrapper violet">
              <BookOpenCheck style={{ width: "24px", height: "24px" }} />
            </div>
            <p className="stat-num">{totalCourses}</p>
            <p className="stat-label">Kurs</p>
          </div>

          <div className="stat-cell">
            <div className="stat-icon-wrapper emerald">
              <Award style={{ width: "24px", height: "24px" }} />
            </div>
            <p className="stat-num">{totalCategories}</p>
            <p className="stat-label">Kategori</p>
          </div>
        </div>
      </div>
    </section>
  );
}
