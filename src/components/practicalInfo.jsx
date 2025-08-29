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

function PracticalSection({
  id,
  data,
  onChange,
  handleAddClick,
  handleDeleteClick,
  pracSectionsNumber,
  isFirst,
}) {
  return (
    <div className="practical-info-section">
      {isFirst && (
        <button className="add-button" type="button" onClick={handleAddClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#074507"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>{" "}
          Add
        </button>
      )}
      <h2>Practical information</h2>
      {inputs.map((input) => (
        <InputField
          key={input.title}
          {...input}
          value={data[input.inputKey]}
          onChange={(e) => onChange(id, e, input.inputKey)}
        />
      ))}
      {pracSectionsNumber > 1 && (
        <button className="delete-button" onClick={() => handleDeleteClick(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#6e160e"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          Delete
        </button>
      )}
    </div>
  );
}

export { PracticalSection };
