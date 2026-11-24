// studentDirectory.js

const studentRecord = {
  name: "Mark Angelo M Javier",
  id: 6941,
  program: "BSIT",
  yearLevel: "2nd year",
  schoolYear: "2026-2027",

  getEnrollmentDetails(semester, campus) {
    return `${this.schoolYear} | ${semester} | Student ${this.name} (ID: ${this.id})`;
  }
};

console.log(studentRecord.getEnrollmentDetails("1st Semester", "Main Campus"));
