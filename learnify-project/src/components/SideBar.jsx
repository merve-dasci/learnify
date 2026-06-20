export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Learnify</h2>
        <p>Modern Learning</p>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-item sidebar-item-active">Dashboard</div>

        <div className="sidebar-item">My Courses</div>

        <div className="sidebar-item">Categories</div>

        <div className="sidebar-item">Messages</div>

        <div className="sidebar-item">Settings</div>
      </nav>

      <div className="sidebar-upgrade">
        <h4>Pro Plan</h4>

        <p>Unlock unlimited certificates and premium content.</p>

        <button className="upgrade-btn">Upgrade to Pro</button>
      </div>
    </aside>
  );
}
