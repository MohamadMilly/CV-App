const personalData = {
  name: "Mohammed",
  age: "17",
  phoneNumber: "0937190284",
  email: "millymohammed2@gmail.com",
};
const experienceData = {
  schoolName: "Al Thuryia",
  titleOfStudy: "Student",
  dateOfStudy: "2025-09-21",
};
const practicalData = {
  companyName: "(No company yet)",
  positionTitle: "Maybe a developer",
  mainResponsibilities: "Building full-stack apps",
  dateFrom: "2025-03-21",
  dateTo: "2025-09-30",
};
const cvStructure = {
  ...personalData,
  ...experienceData,
  ...practicalData,
};
export { cvStructure };
