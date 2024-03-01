import { lazy } from "react";
import { Fragment } from "react";
import "./App.css";

const Header = lazy(() => import("./Components/Header/Header"));
const Main = lazy(() => import("./Components/Main/Main"));
const UpButton = lazy(() => import("./Components/UpButton/UpButton"));
const Services = lazy(() => import("./Components/Services/Services"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Stats = lazy(() => import("./Components/Stats/Stats"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <UpButton />
      <Services />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
