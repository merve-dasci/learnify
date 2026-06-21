import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { useEffect, useRef, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function CourseDetail({ course, onBack }) {
  if (!course) return null;
  const {user, enrollCourse} = useContext(UserContext)

  const isEnrolled = user.enrolledCourses.some((item) => item.id === course.id)
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);

 useEffect(() => {
   const video = videoRef.current;
   if (!video) return;

   const storageKey = `course-progress-${course.id}`;
   const percentKey = `course-progress-percent-${course.id}`;

   const savedTime = localStorage.getItem(storageKey);
   const savedPercent = localStorage.getItem(percentKey);

   if (savedTime) {
     video.currentTime = Number(savedTime);
   }

   if (savedPercent) {
     setProgress(Number(savedPercent));
   }

   const handleTimeUpdate = () => {
     localStorage.setItem(storageKey, video.currentTime);

     if (video.duration) {
       const watchedPercent = Math.floor(
         (video.currentTime / video.duration) * 100,
       );

       setProgress(watchedPercent);
       localStorage.setItem(percentKey, watchedPercent);
     }
   };

   video.addEventListener("timeupdate", handleTimeUpdate);

   return () => {
     video.removeEventListener("timeupdate", handleTimeUpdate);
   };
 }, [course.id]);

  return (
    <div className="container py-12">
      <button className="btn btn-outline mb-6" onClick={onBack}>
        <ArrowLeft style={{ width: "16px", height: "16px" }} />
        Geri Dön
      </button>

      <div className="detail-grid">
        <div>
          <div className="stage-media-panel">
            <video
              className="video-element"
              controls
              poster={course.image}
              ref={videoRef}
            >
              <source src={course.videoUrl} type="video/mp4" />
            </video>
          </div>
          <h1 className="text-2xl font-black mt-6">{course.title}</h1>

          <p className="text-muted mt-3">{course.description}</p>

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

          <div className="flex gap-4 mt-6">
            <div className="card-meta-item">
              <Clock style={{ width: "16px", height: "16px" }} />
              <span>{course.duration}</span>
            </div>

            <div className="card-meta-item">
              <BookOpen style={{ width: "16px", height: "16px" }} />
              <span>{course.lessonsCount} ders</span>
            </div>
          </div>
        </div>

        <div>
          <div className="chapter-card">
            <h3 className="font-bold mb-3">Eğitmen</h3>

            <p>{course.instructor}</p>

            <div className="mt-6">
              <span className="card-price">{course.price} TL</span>
            </div>
            <button
              className="btn btn-primary btn-full mt-6"
              onClick={() => {
                if (!user.isLoggedIn) {
                  alert("Kursa kayıt olmak için giriş yapmalısınız.");
                  return;
                }

                if (!isEnrolled) {
                  enrollCourse(course);
                  alert("Kursa başarıyla kayıt oldunuz.");
                }
              }}
            >
              {isEnrolled ? "Kursa Devam Et" : "Kursa Başla"}
            </button>
            <div className="mt-6">
              <h3 className="font-bold mb-3">Ders İçeriği</h3>

              <div className="chapter-rows-container">
                <div className="chapter-row-item">
                  <span>1. Giriş</span>
                  <span>10 dk</span>
                </div>

                <div className="chapter-row-item">
                  <span>2. Temel Konular</span>
                  <span>25 dk</span>
                </div>

                <div className="chapter-row-item">
                  <span>3. Uygulama</span>
                  <span>30 dk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
