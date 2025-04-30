import { Fragment, lazy, Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";
import "./App.css";
import { DarkModeProvider } from "./context/ThemeContext";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const Services = lazy(() => import("./Components/Services/Services"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <DarkModeProvider>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </DarkModeProvider>
  );
}

export default App;
