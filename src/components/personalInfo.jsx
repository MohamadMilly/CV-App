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
          value={nameValue}
          type="text"
          onChange={(e) => onChange(e, "name")}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          value={ageValue}
          type="number"
          onChange={(e) => onChange(e, "age")}
        />
      </div>
      <div>
        <label>Phone number</label>
        <input
          value={phoneNumberValue}
          type="number"
          onChange={(e) => onChange(e, "phoneNumber")}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value={emailValue}
          type="email"
          onChange={(e) => onChange(e, "email")}
        />
      </div>
    </div>
  );
}

export { PersonalSection };
