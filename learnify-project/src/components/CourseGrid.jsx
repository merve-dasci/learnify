import CourseCard from "./CourseCard";

export default function CourseGrid({
  title,
  courses,
  onSelectCourse,
  onDeleteCourse,
}) {
  return (
    <section
      className="container"
      id="course-grid"
      style={{ padding: "48px 24px" }}
    >
      <div className="catalog-section-title">
        <h2>{title}</h2>
        <p className="text-xs text-muted">
          Toplam {courses.length} kurs listelendi
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="no-results">
          <p>Aradığınız kritere uygun kurs bulunamadı.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={onSelectCourse}
              onDeleteCourse={onDeleteCourse}
            />
          ))}
        </div>
      )}
    </section>
  );
}
