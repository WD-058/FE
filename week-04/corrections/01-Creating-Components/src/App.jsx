import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section section="Services Section" />
      <Section section="About Section" />
      <Footer />
    </>
  );
}

export default App;
