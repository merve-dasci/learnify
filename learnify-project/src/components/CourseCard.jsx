import { Clock, BookOpen } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="course-card" id={`course-card-${course.id}`}>
      <div className="card-media">
        <img src={course.image} className="card-img" alt={course.title} />

        <div className="card-badge-container">
          <span className="badge badge-white">{course.category}</span>
        </div>
      </div>

      <div className="card-body">
        <span className="card-subcat">{course.subcategory}</span>

        <h3 className="card-title">{course.title}</h3>

        <p className="card-instructor-name">{course.instructor}</p>

        <p className="text-xs text-muted" style={{ marginTop: "10px" }}>
          {course.description}
        </p>

        <div className="card-footer">
          <span className="card-price">{course.price} TL</span>

          <div className="card-details-meta">
            <div className="card-meta-item">
              <Clock style={{ width: "12px", height: "12px" }} />
              <span>{course.duration}</span>
            </div>

            <span>•</span>

            <div className="card-meta-item">
              <BookOpen style={{ width: "12px", height: "12px" }} />
              <span>{course.lessonsCount} ders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
