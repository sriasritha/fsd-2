let studentName: string = "asritha";
let studentRollNo: number = 4214;
let isPresent: boolean = true;

console.log("Type of studentName: " + typeof studentName);
console.log("Type of studentRollNo: " + typeof studentRollNo);
console.log("Type of isPresent: " + typeof isPresent);

function studentDetails(name: string, rollNo: number, present: boolean): void {
    console.log("Student Name: " + name);
    console.log("Roll Number: " + rollNo);
    console.log("Attendance: " + (present ? "Present" : "Absent"));
}

studentDetails(studentName, studentRollNo, isPresent);