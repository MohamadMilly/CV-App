import "../styles/experienceStyles.css";

function ExperienceSection({ data, onChange }) {
  const schoolNameValue = data.schoolName;
  const titleOfStudyValue = data.titleOfStudy;
  const DateOfStudyValue = data.dateOfStudy;
  return (
    <div className="experience-info-section">
      <h2>Experience</h2>
      <div>
        <label>School name</label>
        <input
          value={schoolNameValue}
          type="text"
          onChange={(e) => onChange(e, "schoolName")}
        />
      </div>
      <div>
        <label>Title of study</label>
        <input
          value={titleOfStudyValue}
          type="text"
          onChange={(e) => onChange(e, "titleOfStudy")}
        />
      </div>
      <div>
        <label>Date of study</label>
        <input
          value={DateOfStudyValue}
          type="date"
          onChange={(e) => onChange(e, "dateOfStudy")}
        />
      </div>
    </div>
  );
}

export { ExperienceSection };
