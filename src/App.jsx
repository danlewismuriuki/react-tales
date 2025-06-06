import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

// You'll import these once you create them:
// import EducationalInfo from "./components/EducationalInfo";
// import PracticalInfo from "./components/PracticalInfo";

function App() {
  return (
    <>
      <h1>CV Application</h1>

      <section>
        <h2>General Information</h2>
        <GeneralInfo />
        <h2>Education</h2>
        <Education />
      </section>

    </>
  );
}

export default App;
