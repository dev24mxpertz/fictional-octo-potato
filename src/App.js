import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./components";
import ProjectDetails from "./components/ProjectDetails";

function App() {




  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
