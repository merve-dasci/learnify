export default function CategoriesList({ allCategories }) {
  return (
    <div className="category-tabs" id="learnify-categories-list">
      <div className="container">
        <div className="tabs-flex">
          {allCategories.map((category) => (
            <button key={category} className="tab-link">
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
