import { useState, useCallback } from "react";
import { UserProvider } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import CourseDetail from "./components/CourseDetail";
import AboutUs from "./components/AboutUs";
import SideBar from "./components/SideBar";
import HelpCenter from "./components/HelpCenter";
import LoginModal from "./components/LoginModal";

import { courses, allCategories } from "./coursesData";
import AddCourseForm from "./components/AddCourseForm";
import MyCourses from "./components/MyCourses";
import HomeProgress from "./components/HomeProgress";

function AppContent() {
  const [view, setView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [courseList, setCourseList] = useState(courses);
  const [selectedCategory, setSelectedCategory] = useState("Tüm Kurslar");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  

  const filteredCourses = courseList.filter((course) => {
    const matchesCategory =
      selectedCategory === "Tüm Kurslar" ||
      course.category === selectedCategory;

   const searchedText = searchQuery.toLowerCase();

   const matchesSearch =
     course.title.toLowerCase().includes(searchedText) ||
     course.description.toLowerCase().includes(searchedText) ||
     course.instructor.toLowerCase().includes(searchedText) ||
     course.category.toLowerCase().includes(searchedText) ||
     course.subcategory.toLowerCase().includes(searchedText);

    return matchesCategory && matchesSearch;
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSelectedCategory("Tüm Kurslar")
    setView("categories");
  };

  const handleCourseClick = useCallback((course)  => {
    setSelectedCourse(course);
    setView("detail");
  }, []);

  const handleBackToHome = useCallback(() => {
    setSelectedCourse(null);
    setView("home");
  }, []);

 const handleCategoryClick = useCallback((category) => {
   setSelectedCategory(category);
   setSearchQuery("");
   setSearchInput("");
   setView("categories");
 }, []);

  const handleAddCourse = (data) => {
    const newCourse = {
      id: Date.now().toString(),
      title: data.title,
      instructor: data.instructor,
      category: data.category,
      subcategory: "Yeni Kurs",
      duration: "5 Saat",
      lessonsCount: 8,
      price: Number(data.price),
      image: data.image,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: data.description,
    };
    setCourseList([newCourse, ...courseList])
  }

  const handleDeleteCourse = (id) => {
    const updatedCourses = courseList.filter((course) => course.id !== id);
    setCourseList(updatedCourses);
  };

  return (
    <div className="app-container">
      <Navbar
        setView={setView}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        onLoginClick={() => setIsLoginOpen(true)}
        setSelectedCategory={setSelectedCategory}
        setSearchQuery={setSearchQuery}
      />
      {view === "home" && (
        <Header
          totalCourses={courseList.length}
          totalCategories={allCategories.length - 1}
        />
      )}

      {view === "home" && (
        <main>
          <HomeProgress onSelectCourse={handleCourseClick} />

          <CourseGrid
            title="Öne Çıkan Kurslar"
            courses={filteredCourses.slice(0, 3)}
            onDeleteCourse={handleDeleteCourse}
            onSelectCourse={handleCourseClick}
          />
        </main>
      )}

      {view === "addCourse" && (
        <AddCourseForm
          categories={allCategories}
          onAddCourse={handleAddCourse}
          setView={setView}
        />
      )}

      {view === "detail" && (
        <CourseDetail course={selectedCourse} onBack={handleBackToHome} />
      )}

      {view === "categories" && (
        <main className="container py-12">
          <CategoriesList
            allCategories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryClick}
          />

          <CourseGrid
            title={
              searchQuery
                ? `"${searchQuery}" için arama sonuçları`
                : selectedCategory === "Tüm Kurslar"
                  ? "Tüm Kurslar"
                  : `${selectedCategory} Kursları`
            }
            courses={filteredCourses}
            onDeleteCourse={handleDeleteCourse}
            onSelectCourse={handleCourseClick}
          />
        </main>
      )}

      {view === "about" && <AboutUs />}

      {view === "myCourses" && (
        <MyCourses
          onSelectCourse={handleCourseClick}
          onDeleteCourse={handleDeleteCourse}
        />
      )}
      {view === "help" && <HelpCenter />}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <Footer setView={setView} />
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
