const personalData = {
  name: "",
  age: "",
  phoneNumber: "",
  email: "",
};
const experienceData = {
  schoolName: "",
  titleOfStudy: "",
  dateOfStudy: "",
};
const practicalData = {
  companyName: "",
  positionTitle: "",
  mainResponsibilities: "",
  dateFrom: "",
  dateTo: "",
};
const cvStructure = {
  ...personalData,
  ...experienceData,
  ...practicalData,
};
export { cvStructure };
