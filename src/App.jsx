import React from "react";
import Home from "./Pages/Home";
import CourseId from "./Pages/CourseId";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseId />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
