export default function Sidebar({
  categories,
  selectedCategory,
  onCategoryClick,
}) {
  return (
    <aside className="sidebar-container">
      <div className="chapter-card">
        <h3 className="footer-title">Kategoriler</h3>

        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`dropdown-item ${
                selectedCategory === category ? "nav-btn-active" : ""
              }`}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
