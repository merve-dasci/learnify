import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function HomeProgress({ onSelectCourse }) {
  const { user } = useContext(UserContext);

  if (!user.isLoggedIn || user.enrolledCourses.length === 0) {
    return null;
  }

  return (
    <section className="container py-8">
      <div className="catalog-section-title">
        <h2>Kaldığın Yerden Devam Et</h2>
        <p className="text-xs text-muted">
          Kayıtlı olduğun kurslardaki ilerlemeni buradan takip edebilirsin.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-8">
        {user.enrolledCourses.map((course) => {
          const savedTime = localStorage.getItem(
            `course-progress-${course.id}`,
          );
          const progress = savedTime
            ? Math.min(Math.floor(Number(savedTime)), 100)
            : 0;

          return (
            <div key={course.id} className="chapter-card">
              <h3 className="font-bold">{course.title}</h3>

              <p className="text-xs text-muted mt-2">
                Eğitmen: {course.instructor}
              </p>

              <div className="learning-progress-block">
                <div className="flex justify-between">
                  <span className="text-xs font-bold">İlerleme</span>
                  <span className="text-xs text-muted">%{progress}</span>
                </div>

                <div className="learning-bar-outline">
                  <div
                    className="learning-bar-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <button
                className="btn btn-primary btn-full mt-4"
                onClick={() => onSelectCourse(course)}
              >
                Devam Et
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
