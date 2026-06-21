export default function CategoriesList({
  allCategories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-tabs" id="learnify-categories-list">
      <div className="container">
        <div className="tabs-flex">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`tab-link ${
                selectedCategory === category ? "tab-link-active" : ""
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
