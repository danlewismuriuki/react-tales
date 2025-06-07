import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/PracticalExperience";
import "./App.css"

// You'll import these once you create them:
// import EducationalInfo from "./components/EducationalInfo";
// import PracticalInfo from "./components/PracticalInfo";

function App() {
  return (
    <div className="app-container">
      <h1>CV Application</h1>

      <section>
        <h2>General Information</h2>
        <GeneralInfo />
        <h2>Education</h2>
        <Education />
        <h2>Experience</h2>
        <Experience />
      </section>

    </div>
  );
}

export default App;
