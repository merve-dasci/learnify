import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";

import { courses, allCategories } from "./coursesData";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Header />

        <CategoriesList allCategories={allCategories} />

        <CourseGrid courses={courses} />
      </main>

      <Footer />
    </div>
  );
}
