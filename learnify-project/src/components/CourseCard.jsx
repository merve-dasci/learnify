export default function CourseCard({ course }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden tonal-elevation-1 course-card-transition hover:scale-[1.02]">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-xs text-primary font-semibold">
          {course.category}
        </span>

        <h3 className="text-lg font-bold mt-2 text-on-surface">
          {course.title}
        </h3>

        <p className="text-sm text-on-surface-variant mt-2">
          {course.instructor}
        </p>

        <div className="flex justify-between items-center mt-4 text-sm">
          <span>⭐ {course.rating}</span>

          <span>{course.duration}</span>
        </div>
      </div>
    </div>
  );
}
