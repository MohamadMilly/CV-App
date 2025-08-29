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

function PracticalSection({ data, onChange }) {
  return (
    <div className="practical-info-section">
      <h2>Practical information</h2>
      {inputs.map((input) => (
        <InputField
          {...input}
          value={data[input.inputKey]}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export { PracticalSection };
