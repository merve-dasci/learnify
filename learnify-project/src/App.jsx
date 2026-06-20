import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { MOCK_COURSES } from "./coursesMock";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <div className="app-layout">
        <SideBar />

        <main className="home-main">
          <section className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">New: Data Science Path 2026</span>

              <h1 className="hero-title">Unlock Your Potential with Mastery</h1>

              <p className="hero-text">
                Join thousands of learners worldwide. Access industry-leading
                courses taught by professional experts.
              </p>

              <div className="hero-actions">
                <button className="primary-btn">Start Learning</button>
                <button className="secondary-btn">Browse Courses</button>
              </div>
            </div>

            <div className="hero-image-box">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                alt="Learning visual"
                className="hero-image"
              />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-on-surface">
              Featured Courses
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {MOCK_COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
