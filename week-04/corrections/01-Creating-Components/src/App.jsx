import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const studentData = {
    firstName: "Testy",
    lastName: "McTest",
    age: 42,
    course: "Web Development",
    city: "Berlin",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <Hero />
      <Section section="Services Section" />
      <Section section="About Section" />
      <Student studentData={studentData} theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
