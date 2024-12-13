import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Students from "./components/Students";
import { useState } from "react";
import { students } from "./data/students";
import Button from "./components/Button";
import { studentData } from "./data/studentData";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <Hero />
      {/* <Section section="Services Section" />
      <Section section="About Section" />
      <Student studentData={students[0]} theme={theme} />
      <Students students={students} /> */}
      <Button
        content="Alert"
        className="alert"
        handleClick={() => alert("Button clicked!")}
      />
      <Button
        content="Log"
        className="log"
        handleClick={() => console.log("Button clicked!")}
      />
      <Button content="Theme" className={theme} handleClick={changeTheme} />
      <Footer />
    </div>
  );
}

export default App;
