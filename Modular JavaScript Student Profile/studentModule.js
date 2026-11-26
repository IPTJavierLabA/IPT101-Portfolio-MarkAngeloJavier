// studentModule.js

export const studentDetails = {
  name: "Mark Angelo M Javier",
  id: 6941,
  program: "BSIT",
  yearLevel: "2nd year",
  schoolYear: "2026-2027"
};

export const students = [
  studentDetails,
  {
    name: "Juan Dela Cruz",
    id: 6942,
    program: "BSIT",
    yearLevel: "2nd year",
    schoolYear: "2026-2027"
  },
  {
    name: "Maria Santos",
    id: 6943,
    program: "BSIT",
    yearLevel: "2nd year",
    schoolYear: "2026-2027"
  }
];

export function printSummary(student, status) {
  return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}
