import { BookOpenCheck, Users, Award } from "lucide-react";

export default function Header() {
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

        <div className="stats-grid" style={{ marginTop: "32px" }}>
          <div className="stat-cell">
            <Users style={{ width: "22px", height: "22px" }} />
            <p className="stat-num">500+</p>
            <p className="stat-label">Öğrenci</p>
          </div>

          <div className="stat-cell">
            <BookOpenCheck style={{ width: "22px", height: "22px" }} />
            <p className="stat-num">20+</p>
            <p className="stat-label">Kurs</p>
          </div>

          <div className="stat-cell">
            <Award style={{ width: "22px", height: "22px" }} />
            <p className="stat-num">3</p>
            <p className="stat-label">Kategori</p>
          </div>
        </div>
      </div>
    </section>
  );
}
