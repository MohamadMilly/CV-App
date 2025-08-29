import "../styles/personalStyles.css";
import { InputField } from "./utilitys.jsx";
const inputs = [
  { title: "Name", type: "text", inputKey: "name" },
  { title: "Age", type: "number", inputKey: "age", min: 17, max: 100 },
  {
    title: "Phone number",
    type: "tel",
    pattern: "[/d{10}$/]",
    inputKey: "phoneNumber",
  },
  { title: "Email", type: "email", inputKey: "email" },
];

function PersonalSection({ data, onChange }) {
  return (
    <div className="personal-info-section">
      <h2>Personal information</h2>
      {inputs.map((input) => (
        <InputField
          key={input.title}
          {...input}
          value={data[input.inputKey]}
          onChange={(e) => onChange(e, inputs.inputKey)}
        />
      ))}
    </div>
  );
}

export { PersonalSection };
