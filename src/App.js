import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { BackToTop } from "./components";
import ChangeTheme from "./components/ChangeTheme/ChangeTheme";
import { BlogPage, HomePage, ProjectPage } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/projects" exact element={<ProjectPage />} />
        </Routes>
        <Navigate to="/" />
      </Router>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;
