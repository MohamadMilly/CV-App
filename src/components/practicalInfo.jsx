import "../styles/practicalStyles.css";

function PracticalSection({ data, onChange }) {
  const companyNameValue = data.companyName;
  const positionValue = data.positionTitle;
  const responsibilitiesValue = data.mainResponsibilities;
  const dateFromValue = data.dateFrom;
  const dateToValue = data.dateTo;

  return (
    <div className="practical-info-section">
      <h2>Practical information</h2>
      <div>
        <label>Company name</label>
        <input
          value={companyNameValue}
          type="text"
          onChange={(e) => onChange(e, "companyName")}
        />
      </div>
      <div>
        <label>Position title</label>
        <input
          value={positionValue}
          type="text"
          onChange={(e) => onChange(e, "positionTitle")}
        />
      </div>
      <div>
        <label>Main responsibilities</label>
        <input
          value={responsibilitiesValue}
          type="text"
          onChange={(e) => onChange(e, "mainResponsibilities")}
        />
      </div>
      <div>
        <label>Date from you worked</label>
        <input
          value={dateFromValue}
          type="date"
          onChange={(e) => onChange(e, "dateFrom")}
        />
      </div>
      <div>
        <label>Date to you worked</label>
        <input
          value={dateToValue}
          type="date"
          onChange={(e) => onChange(e, "dateTo")}
        />
      </div>
    </div>
  );
}

export { PracticalSection };
