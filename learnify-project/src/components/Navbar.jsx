import { useContext, useState } from "react";
import { BookOpen, Search, Menu, X } from "lucide-react";
import { UserContext } from "../context/UserContext";

export default function Navbar({
  view,
  setView,
  searchInput,
  setSearchInput,
  handleSearchSubmit,
  onLoginClick,
  setSelectedCategory,
  setSearchQuery,
}) {
  const { user, logout } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view) => {
    setView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div
            className="logo"
            onClick={() => {
              setSelectedCategory("Tüm Kurslar");
              setSearchQuery("");
              setSearchInput("");
              setView("home");
            }}
          >
            <div className="logo-badge">
              <BookOpen style={{ width: "20px", height: "20px" }} />
            </div>
            <span className="logo-text">Learnify</span>
          </div>

          <form className="search-container" onSubmit={handleSearchSubmit}>
            <Search
              className="search-icon-pos"
              style={{ width: "16px", height: "16px" }}
            />

            <input
              type="text"
              placeholder="Kurs ara..."
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>

          <nav className="nav-links">
            <button
              className={`nav-btn ${view === "home" ? "nav-btn-active" : ""}`}
              onClick={() => {
                setSelectedCategory("Tüm Kurslar");
                setSearchQuery("");
                setSearchInput("");
                setView("home");
              }}
            >
              Ana Sayfa
            </button>

            <button
              className={`nav-btn ${view === "categories" ? "nav-btn-active" : ""}`}
              onClick={() => handleNavClick("categories")}
            >
              Kategoriler
            </button>

            <button
              className={`nav-btn ${view === "about" ? "nav-btn-active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              Hakkımızda
            </button>
            <button
              className={`nav-btn ${view === "help" ? "nav-btn-active" : ""}`}
              onClick={() => handleNavClick("help")}
            >
              Yardım
            </button>
            {user.isLoggedIn && (
              <button
                className={`nav-btn ${view === "addCourse" ? "nav-btn-active" : ""}`}
                onClick={() => setView("addCourse")}
              >
                Kurs Ekle
              </button>
            )}

            {user.isLoggedIn ? (
              <>
                <div className="user-badge">
                  <span className="user-avatar">{user.name.charAt(0)}</span>

                  <span className="user-name">{user.name}</span>
                </div>
                <button
                  className={`nav-btn ${view === "myCourses" ? "nav-btn-active" : ""}`}
                  onClick={() => setView("myCourses")}
                >
                  Kurslarım
                </button>
                <button className="nav-btn" onClick={logout}>
                  Çıkış Yap
                </button>
              </>
            ) : (
              <button className="nav-btn" onClick={onLoginClick}>
                Giriş Yap
              </button>
            )}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X style={{ width: "24px", height: "24px" }} />
            ) : (
              <Menu style={{ width: "24px", height: "24px" }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-header">
            <form
              className="mobile-search-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit(e);
              }}
            >
              <Search style={{ width: "16px", height: "16px" }} />
              <input
                type="text"
                placeholder="Kurs ara..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </form>
          </div>

          <div className="mobile-menu-items">
            <button
              className="mobile-menu-item"
              onClick={() => handleNavClick("home")}
            >
              Ana Sayfa
            </button>
            <button
              className="mobile-menu-item"
              onClick={() => handleNavClick("categories")}
            >
              Kategoriler
            </button>
            <button
              className="mobile-menu-item"
              onClick={() => handleNavClick("about")}
            >
              Hakkımızda
            </button>
            <button
              className="mobile-menu-item"
              onClick={() => handleNavClick("help")}
            >
              Yardım
            </button>
            <button
              className="mobile-menu-item"
              onClick={() => handleNavClick("addCourse")}
            >
              Kurs Ekle
            </button>

            <div className="mobile-menu-divider" />

            {user.isLoggedIn ? (
              <>
                <button className="mobile-menu-item user-info">
                  👤 {user.name}
                </button>
                <button
                  className="mobile-menu-item logout"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Çıkış Yap
                </button>
              </>
            ) : (
              <button className="mobile-menu-item" onClick={onLoginClick}>
                Giriş Yap
              </button>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
