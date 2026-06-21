import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MyCourses({ onSelectCourse }) {
  const { user } = useContext(UserContext);

  return (
    <main className="container py-12">
      <div className="catalog-section-title">
        <h2>Kayıtlı Kurslarım</h2>

        <p className="text-xs text-muted">
          Toplam {user.enrolledCourses.length} kursa kayıtlısın
        </p>
      </div>

      {user.enrolledCourses.length === 0 ? (
        <div className="no-results">
          <p>Henüz kayıt olduğunuz bir kurs bulunmuyor.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-8">
          {user.enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => onSelectCourse(course)}
            >
              <div className="card-media">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img"
                />
              </div>

              <div className="card-body">
                <span className="card-subcat">{course.subcategory}</span>

                <h3 className="card-title">{course.title}</h3>

                <p className="card-instructor-name">
                  Eğitmen: {course.instructor}
                </p>

                <p className="text-xs text-muted mt-3">{course.description}</p>

                <button
                  className="btn btn-primary btn-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCourse(course);
                  }}
                >
                  Devam Et
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
