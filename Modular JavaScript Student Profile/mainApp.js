// mainApp.js

import { students, printSummary } from "./studentModule.js";

students.forEach((student) => {
	const enrollmentMessage = printSummary(student, "Officially Enrolled");
	console.log(enrollmentMessage);
});

