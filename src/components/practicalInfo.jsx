import "../styles/practicalStyles.css";
import { InputField } from "./utilitys.jsx";

const inputs = [
  { title: "Company name", type: "text", inputKey: "companyName" },
  { title: "Position title", type: "text", inputKey: "positionTitle" },
  {
    title: "Main responsibilities",
    type: "text",
    inputKey: "mainResponsibilities",
  },
  { title: "Date from you worked", type: "date", inputKey: "dateFrom" },
  { title: "Date to you worked", type: "date", inputKey: "dateTo" },
];

function PracticalSection({ id, data, onChange }) {
  return (
    <div className="practical-info-section">
      <h2>Practical information</h2>
      {inputs.map((input) => (
        <InputField
          key={input.title}
          {...input}
          value={data[input.inputKey]}
          onChange={(e) => onChange(id, e, input.inputKey)}
        />
      ))}
    </div>
  );
}

export { PracticalSection };
