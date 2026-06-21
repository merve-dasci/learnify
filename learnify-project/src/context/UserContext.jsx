import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    enrolledCourses: [],
  });

  const login = (email) => {
    setUser({
      isLoggedIn: true,
      name: "Merve Daşçi",
      email,
      enrolledCourses: [],
    });
  };

  const logout = () => {
    setUser({
      isLoggedIn: false,
      name: "",
      email: "",
      enrolledCourses: [],
    });
  };

  const enrollCourse = (course) => {
    setUser((prevUser) => {
      const isAlreadyEnrolled = prevUser.enrolledCourses.some(
        (item) => item.id === course.id,
      );

      if (isAlreadyEnrolled) {
        return prevUser;
      }

      return {
        ...prevUser,
        enrolledCourses: [...prevUser.enrolledCourses, course],
      };
    });
  };

  const removeCourse = (courseId) => {
    setUser((prevUser) => ({
      ...prevUser,
      enrolledCourses: prevUser.enrolledCourses.filter((course) => course.id !== courseId)
    }))
  }

  return (
    <UserContext.Provider value={{ user, login, logout, enrollCourse, removeCourse }}>
      {children}
    </UserContext.Provider>
  );
}
