export default function Header() {
  return (
    <header className="header glass-header">
      <div className="header-container">
        <div className="logo">Learnify</div>

        <nav className="nav-menu">
          <span className="nav-link nav-link-active">Dashboard</span>
          <span className="nav-link">Courses</span>
          <span className="nav-link">Categories</span>
          <span className="nav-link">About Us</span>
          <span className="nav-link">Help Center</span>
        </nav>

        <div className="search-area">
          <input
            type="text"
            placeholder="Search courses..."
            className="search-input"
          />

          <span className="material-symbols-outlined header-icon">
            notifications
          </span>

          <div className="user-avatar">M</div>
        </div>
      </div>
    </header>
  );
}
