import "../styles/personalStyles.css";

function PersonalSection({ data, onChange }) {
  const nameValue = data.name;
  const ageValue = data.age;
  const phoneNumberValue = data.phoneNumber;
  const emailValue = data.email;
  return (
    <div className="personal-info-section">
      <h2>Personal information</h2>
      <div>
        <label>Name</label>
        <input
          required
          value={nameValue}
          type="text"
          onChange={(e) => onChange(e, "name")}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          required
          max={100}
          min={17}
          value={ageValue}
          type="number"
          onChange={(e) => onChange(e, "age")}
        />
      </div>
      <div>
        <label>Phone number</label>
        <input
          required
          pattern="^\d{10}$"
          type="tel"
          value={phoneNumberValue}
          onChange={(e) => onChange(e, "phoneNumber")}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          required
          value={emailValue}
          type="email"
          onChange={(e) => onChange(e, "email")}
        />
      </div>
    </div>
  );
}

export { PersonalSection };
