let studentName = "Javier, Mark Angelo";
let idNumber = "2026-6941";
let yearLevel = 2;
let program = "Information Technology";

let course1 = "Programming 1";
let score1 = 90;
let course2 = "Web Development";
let score2 = 86;
let course3 = "Discrete Mathematics";
let score3 = 84;
let course4 = "Physics";
let score4 = 82;

let total = score1 + score2 + score3 + score4;
let gwa = total / 4;

let remainder = gwa % 1;
if (remainder >= 0.5) {
  gwa = gwa - remainder + 1;
} else {
  gwa = gwa - remainder;
}

// Letter grade
let letter;

if (gwa >= 98) {
  letter = "A";
} else if (gwa >= 94 && gwa < 98) {
  letter = "A-";
} else if (gwa >= 90 && gwa < 94) {
  letter = "B+";
} else if (gwa >= 87 && gwa < 90) {
  letter = "B";
} else if (gwa >= 83 && gwa < 87) {
  letter = "B-";
} else if (gwa >= 80 && gwa < 83) {
  letter = "C+";
} else if (gwa >= 77 && gwa < 80) {
  letter = "C";
} else if (gwa >= 73 && gwa < 77) {
  letter = "D";
} else {
  letter = "F";
}

console.log("Student Name: " + studentName);
console.log("ID Number: " + idNumber);
console.log("Year Level: " + yearLevel);
console.log("Program: " + program);
console.log("");
console.log("= Courses Enrolled =");
console.log("- " + course1);
console.log("- " + course2);
console.log("- " + course3);
console.log("- " + course4);
console.log("");
console.log("General Weighted Average: " + gwa);
console.log("Letter Grade: " + letter);