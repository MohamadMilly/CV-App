import "../styles/experienceStyles.css";
import { InputField } from "./utilitys.jsx";

const inputs = [
  { title: "School name", type: "text", inputKey: "schoolName" },
  { title: "Title of study", type: "text", inputKey: "titleOfStudy" },
  { title: "Date of study", type: "date", inputKey: "dateOfStudy" },
];

function ExperienceSection({ data, onChange }) {
  return (
    <div className="experience-info-section">
      <h2>Experience</h2>
      {inputs.map((input) => (
        <InputField
          key={input.title}
          {...input}
          value={data[input.inputKey]}
          onChange={(e) => onChange(e, input.inputKey)}
        />
      ))}
    </div>
  );
}

export { ExperienceSection };
