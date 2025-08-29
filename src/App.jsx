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

  const handlePerExpDataChange = (e, key) => {
    setInputsValues({
      ...inputsValues,
      [key]: e.target.value,
    });
  };
  const handlePracDataChange = (id, e, key) => {
    const practicalInfo = inputsValues.practical;
    const newPracticalInfo = practicalInfo.map((practicalUnitData) => {
      if (id === practicalUnitData.id) {
        return { ...practicalUnitData, [key]: e.target.value };
      } else {
        return practicalUnitData;
      }
    });
    setInputsValues({ ...inputsValues, practical: newPracticalInfo });
  };

  const handleAddClick = () => {
    setInputsValues({
      ...inputsValues,
      practical: [
        ...inputsValues.practical,
        {
          id: crypto.randomUUID(),
          companyName: "",
          positionTitle: "",
          mainResponsibilities: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
    });
  };
  const handleDeleteClick = (id) => {
    setInputsValues({
      ...inputsValues,
      practical: inputsValues.practical.filter(
        (practicalUnitData) => practicalUnitData.id !== id
      ),
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
              {inputsValues.practical.map((practicalUnitData) => {
                return (
                  <>
                    <ul>
                      <li>Company name: {practicalUnitData.companyName}</li>
                      <li>Position: {practicalUnitData.positionTitle}</li>
                      <li>
                        Responsibilities:{" "}
                        {practicalUnitData.mainResponsibilities}
                      </li>
                    </ul>

                    <h3>
                      From {practicalUnitData.dateFrom} To{" "}
                      {practicalUnitData.dateTo} of Experience
                    </h3>
                  </>
                );
              })}
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
        <PersonalSection
          data={inputsValues}
          onChange={handlePerExpDataChange}
        />
        <ExperienceSection
          data={inputsValues}
          onChange={handlePerExpDataChange}
        />
        {inputsValues.practical.map((practicalUnitData, index) => (
          <PracticalSection
            isFirst={index === 0 ? true : false}
            id={practicalUnitData.id}
            key={practicalUnitData.id}
            data={practicalUnitData}
            onChange={handlePracDataChange}
            handleAddClick={handleAddClick}
            handleDeleteClick={handleDeleteClick}
            pracSectionsNumber={inputsValues.practical.length}
          />
        ))}
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
