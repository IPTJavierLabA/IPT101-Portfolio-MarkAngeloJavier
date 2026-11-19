// ===== Student Info =====
let bsit_students = {
  student1: {
    name: "Javier, Mark Angelo",
    id: "2026-6941",
    year: 2,
    program: "Integrated Programming Technology",
    course1: "art appreciation", score1: 90,
    course2: "Web Development", score2: 86,
    course3: "Networking 1", score3: 84,
    course4: "pathfit", score4: 82
  },
  student2: {
    name: "Ezra Ortega",
    id: "2026-6689",
    year: 2,
    program: "Integrated Programming Technology",
    course1: "art appreciation", score1: 88,
    course2: "Web Development", score2: 80,
    course3: "Networking 1", score3: 78,
    course4: "Pathfit", score4: 75
  },
  student3: {
    name: "cristine idos",
    id: "2026-6738",
    year: 2,
    program: "Integrated Programming Technology",
    course1: "art appreciation", score1: 95,
    course2: "Web Development", score2: 92,
    course3: "Networking 1", score3: 90,
    course4: "Pathfit", score4: 94
  },
  student4: {
    name: "irish umipig",
    id: "2026-6638",
    year: 2,
    program: "Integrated Programming Technology",
    course1: "art appreciation", score1: 70,
    course2: "Web Development", score2: 72,
    course3: "Networking 1", score3: 68,
    course4: "Pathfit", score4: 71
  }
};

// ===== STUDENT 1 =====
let s1 = bsit_students.student1;
let gwa1 = (s1.score1 + s1.score2 + s1.score3 + s1.score4) / 4;
let r1 = gwa1 % 1;
if (r1 >= 0.5) {
  gwa1 = gwa1 - r1 + 1;
} else {
  gwa1 = gwa1 - r1;
}
let letter1;
if (gwa1 >= 94 && gwa1 <= 100) {
  letter1 = "A";
} else if (gwa1 >= 87 && gwa1 < 94) {
  letter1 = "B";
} else if (gwa1 >= 80 && gwa1 < 87) {
  letter1 = "C";
} else if (gwa1 >= 73 && gwa1 < 80) {
  letter1 = "D";
} else {
  letter1 = "F";
}
console.log("Student Name: " + s1.name);
console.log("ID Number: " + s1.id);
console.log("Year Level: " + s1.year);
console.log("Program: " + s1.program);
console.log("= Courses Enrolled =");
console.log("- " + s1.course1);
console.log("- " + s1.course2);
console.log("- " + s1.course3);
console.log("- " + s1.course4);
console.log("General Weighted Average: " + gwa1);
console.log("Letter Grade: " + letter1);
console.log("");

// ===== STUDENT 2 =====
let s2 = bsit_students.student2;
let gwa2 = (s2.score1 + s2.score2 + s2.score3 + s2.score4) / 4;
let r2 = gwa2 % 1;
if (r2 >= 0.5) {
  gwa2 = gwa2 - r2 + 1;
} else {
  gwa2 = gwa2 - r2;
}
let letter2;
if (gwa2 >= 94 && gwa2 <= 100) {
  letter2 = "A";
} else if (gwa2 >= 87 && gwa2 < 94) {
  letter2 = "B";
} else if (gwa2 >= 80 && gwa2 < 87) {
  letter2 = "C";
} else if (gwa2 >= 73 && gwa2 < 80) {
  letter2 = "D";
} else {
  letter2 = "F";
}
console.log("Student Name: " + s2.name);
console.log("ID Number: " + s2.id);
console.log("Year Level: " + s2.year);
console.log("Program: " + s2.program);
console.log("= Courses Enrolled =");
console.log("- " + s2.course1);
console.log("- " + s2.course2);
console.log("- " + s2.course3);
console.log("- " + s2.course4);
console.log("General Weighted Average: " + gwa2);
console.log("Letter Grade: " + letter2);
console.log("");

// ===== STUDENT 3 =====
let s3 = bsit_students.student3;
let gwa3 = (s3.score1 + s3.score2 + s3.score3 + s3.score4) / 4;
let r3 = gwa3 % 1;
if (r3 >= 0.5) {
  gwa3 = gwa3 - r3 + 1;
} else {
  gwa3 = gwa3 - r3;
}
let letter3;
if (gwa3 >= 94 && gwa3 <= 100) {
  letter3 = "A";
} else if (gwa3 >= 87 && gwa3 < 94) {
  letter3 = "B";
} else if (gwa3 >= 80 && gwa3 < 87) {
  letter3 = "C";
} else if (gwa3 >= 73 && gwa3 < 80) {
  letter3 = "D";
} else {
  letter3 = "F";
}
console.log("Student Name: " + s3.name);
console.log("ID Number: " + s3.id);
console.log("Year Level: " + s3.year);
console.log("Program: " + s3.program);
console.log("= Courses Enrolled =");
console.log("- " + s3.course1);
console.log("- " + s3.course2);
console.log("- " + s3.course3);
console.log("- " + s3.course4);
console.log("General Weighted Average: " + gwa3);
console.log("Letter Grade: " + letter3);
console.log("");

// ===== STUDENT 4 =====
let s4 = bsit_students.student4;
let gwa4 = (s4.score1 + s4.score2 + s4.score3 + s4.score4) / 4;
let r4 = gwa4 % 1;
if (r4 >= 0.5) {
  gwa4 = gwa4 - r4 + 1;
} else {
  gwa4 = gwa4 - r4;
}
let letter4;
if (gwa4 >= 94 && gwa4 <= 100) {
  letter4 = "A";
} else if (gwa4 >= 87 && gwa4 < 94) {
  letter4 = "B";
} else if (gwa4 >= 80 && gwa4 < 87) {
  letter4 = "C";
} else if (gwa4 >= 73 && gwa4 < 80) {
  letter4 = "D";
} else {
  letter4 = "F";
}
console.log("Student Name: " + s4.name);
console.log("ID Number: " + s4.id);
console.log("Year Level: " + s4.year);
console.log("Program: " + s4.program);
console.log("= Courses Enrolled =");
console.log("- " + s4.course1);
console.log("- " + s4.course2);
console.log("- " + s4.course3);
console.log("- " + s4.course4);
console.log("General Weighted Average: " + gwa4);
console.log("Letter Grade: " + letter4);