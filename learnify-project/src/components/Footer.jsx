import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="global-footer-section">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <div className="footer-logo-badge">
              <BookOpen style={{ width: "18px", height: "18px" }} />
            </div>

            <span className="logo-text">Learnify</span>
          </div>

          <p className="footer-desc">
            Learnify, farklı alanlarda online eğitimler sunan sade bir eğitim
            platformudur.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Kategoriler</h3>
          <ul className="footer-list">
            <li>Yazılım</li>
            <li>Tasarım</li>
            <li>Kişisel Gelişim</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Sayfalar</h3>
          <ul className="footer-list">
            <li>Ana Sayfa</li>
            <li>Kurslar</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">İletişim</h3>
          <ul className="footer-list">
            <li className="footer-contact-item">
              <Mail style={{ width: "16px", height: "16px" }} />
              <span>info@learnify.com</span>
            </li>

            <li className="footer-contact-item">
              <Phone style={{ width: "16px", height: "16px" }} />
              <span>0212 000 00 00</span>
            </li>

            <li className="footer-contact-item">
              <MapPin style={{ width: "16px", height: "16px" }} />
              <span>İstanbul, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Learnify. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
