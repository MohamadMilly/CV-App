import "./App.css";
import { PersonalSection } from "./components/personalInfo.jsx";
import { ExperienceSection } from "./components/experienceInfo.jsx";
import { PracticalSection } from "./components/practicalInfo.jsx";
import { cvStructure } from "./constants/data.js";
import { useState } from "react";
import html2pdf from "html2pdf.js";
import { Loader } from "./components/utilitys.jsx";

function CVApp() {
  const [status, setStatus] = useState("Typing");
  const [inputsValues, setInputsValues] = useState(cvStructure);

  const isSubmitting = status === "Submitting";
  const isFinished = status === "Finished";

  const handleDownload = (name) => {
    const CVContainer = document.querySelector(".CV-container");
    const clone = CVContainer.cloneNode(true);
    clone.classList.add("no-animation");
    document.body.appendChild(clone);
    html2pdf().from(clone).save(`${name}-CV.pdf`);
    document.body.removeChild(clone);
  };
  const handleDataChange = (e, key) => {
    setInputsValues({
      ...inputsValues,
      [key]: e.target.value,
    });
  };

  if (isFinished) {
    return (
      <>
        <div className="CV-container">
          <div className="personal-cv">
            <h1>{inputsValues.name}</h1>
            <h1>Age: {inputsValues.age}</h1>
            <span>Phone number: {inputsValues.phoneNumber}</span>
            <span>Email: {inputsValues.email}</span>
          </div>
          <hr />

          <div className="experience-cv">
            <h2>Experience</h2>
            <ul>
              <li>School: {inputsValues.schoolName}</li>
              <li>Study title: {inputsValues.titleOfStudy}</li>
              <li>Date of study: {inputsValues.dateOfStudy}</li>
            </ul>
          </div>
          <hr />
          <div>
            <div className="practical-cv">
              <h2>Practical experience</h2>
              <ul>
                <li>Company name: {inputsValues.companyName}</li>
                <li>Position: {inputsValues.positionTitle}</li>
                <li>Responsibilities: {inputsValues.mainResponsibilities}</li>
              </ul>

              <h3>
                From {inputsValues.dateFrom} To {inputsValues.dateTo} of
                Experience
              </h3>
            </div>
          </div>
        </div>

        <button className="edit-button" onClick={() => setStatus("Editing")}>
          Edit
        </button>
        <button
          className="download-button"
          onClick={() => {
            handleDownload(inputsValues.name);
          }}
        >
          Download
        </button>
      </>
    );
  }
  return (
    <div>
      <h1 className="app-title">CV Generator</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus("Submitting");
          await fakeLoading();
          setStatus("Finished");
        }}
      >
        <PersonalSection data={inputsValues} onChange={handleDataChange} />
        <ExperienceSection data={inputsValues} onChange={handleDataChange} />
        <PracticalSection data={inputsValues} onChange={handleDataChange} />
        <button type="submit">Submit</button>
      </form>
      {isSubmitting && <Loader />}
    </div>
  );

  function fakeLoading() {
    return new Promise((resolve) => setTimeout(resolve, 2500));
  }
}

export default CVApp;
