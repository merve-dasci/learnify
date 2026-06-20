import { BookOpen, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <div className="logo-badge">
            <BookOpen style={{ width: "20px", height: "20px" }} />
          </div>

          <span className="logo-text">Learnify</span>
        </div>

        <div className="search-container">
          <Search
            className="search-icon-pos"
            style={{ width: "16px", height: "16px" }}
          />

          <input
            type="text"
            placeholder="Kurs ara..."
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}
