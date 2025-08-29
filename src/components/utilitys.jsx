function InputField({
  title,
  type,
  onChange,
  inputKey,
  value,
  pattern,
  max,
  min,
}) {
  return (
    <div>
      <label>{title}</label>
      <input
        type={type}
        required
        onChange={(e) => onChange(e, inputKey)}
        value={value}
        pattern={pattern}
        max={max}
        min={min}
      />
    </div>
  );
}

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <b>Generating...</b>
    </div>
  );
}
export { InputField, Loader };
