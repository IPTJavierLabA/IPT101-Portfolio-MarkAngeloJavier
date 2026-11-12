let student = {
  name: "Javier, Mark Angelo",
  idNumber: "2026-6941",
  yearLevel: 2,
  program: "Information Technology",
};

const courses = [
  { course: "Programming 1", score: 90 },
  { course: "Web Development", score: 86 },
  { course: "Discrete Mathematics", score: 84 },
  { course: "Physics", score: 82 }
];

let gwa = Math.round(
  courses.reduce((total, course) => total + course.score, 0) / courses.length
);

let letter;

if (gwa >= 98) {
  letter = "A";
} else if (gwa >= 94) {
  letter = "A-";
} else if (gwa >= 90) {
  letter = "B+";
} else if (gwa >= 87) {
  letter = "B";
} else if (gwa >= 83) {
  letter = "B-";
} else if (gwa >= 80) {
  letter = "C+";
} else if (gwa >= 77) {
  letter = "C";
} else if (gwa >= 73) {
  letter = "D";
} else {
  letter = "F";
}

console.log("Student Name:", student.name);
console.log("ID Number:", student.idNumber);
console.log("Year Level:", student.yearLevel);
console.log("Program:", student.program);
console.log("\n= Courses Enrolled =");
courses.forEach((course) => console.log("-", course.course));
console.log("");
console.log("General Weighted Average:", gwa);
console.log("Letter Grade:", letter);
