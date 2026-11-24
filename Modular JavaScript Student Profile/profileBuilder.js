// profileBuilder.js

function createStudentProfile(name, id, program, yearLevel, schoolYear) {
  return {
    name: name,
    id: id,
    program: program,
    yearLevel: yearLevel,
    schoolYear: schoolYear
  };
}

const myProfile = createStudentProfile(
  "Mark Angelo M Javier",
  6941,
  "BSIT",
  "2nd year",
  "2026-2027"
);

console.log(myProfile);