import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  return (
    <section
      className="container"
      id="learnify-course-grid"
      style={{ padding: "48px 24px" }}
    >
      <div>
        <h2
          className="text-xl font-extrabold"
          style={{ margin: 0, color: "var(--text-main)" }}
        >
          Öne Çıkan Kurslar
        </h2>

        <p
          className="text-xs text-muted"
          style={{ fontWeight: 600, marginTop: "4px" }}
        >
          Learnify üzerinde yer alan bazı eğitimler
        </p>
      </div>

      <div
        className="product-grid"
        id="dashboard-catalog-grid"
        style={{ marginTop: "32px" }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
