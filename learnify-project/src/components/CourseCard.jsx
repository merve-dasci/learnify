import { Clock, BookOpen } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CourseCard({ course, onSelectCourse, onDeleteCourse }) {

  const {user} = useContext(UserContext)
  return (
    <div
      className="course-card"
      id={`course-card-${course.id}`}
      onClick={() => onSelectCourse(course)}
    >
      <div className="card-media">
        <img src={course.image} className="card-img" alt={course.title} />

        <div className="card-badge-container">
          <span className="badge badge-white">{course.category}</span>
        </div>
      </div>

      <div className="card-body">
        <span className="card-subcat">{course.subcategory}</span>

        <h3 className="card-title">{course.title}</h3>

        <div className="card-instructor">
          <span className="card-instructor-name">
            Eğitmen: {course.instructor}
          </span>
        </div>

        <p className="text-xs text-muted mt-3">{course.description}</p>

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

        {user.isLoggedIn && (
          <button
            className="btn btn-outline btn-full mt-4"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteCourse(course.id);
            }}
          >
            Kursu Sil
          </button>
        )}
      </div>
    </div>
  );
}
