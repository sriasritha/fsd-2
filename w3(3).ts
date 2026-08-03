class Student {
    static collegeName: string = "SVECW";
    static totalStudents: number = 0;

    readonly rollNumber: string;
    public studentName: string;

    constructor(name: string, rollNo: string) {
        this.studentName = name;
        this.rollNumber = rollNo;

        Student.totalStudents++;
    }

    static showCollege(): void {
        console.log(`College: ${Student.collegeName}`);
    }

    displayDetails(): void {
        console.log(`Student: ${this.studentName}`);
        console.log(`Roll No: ${this.rollNumber}`);
    }
}

Student.showCollege();

const student1 = new Student("Bhuvana", "24B01A4215");
const student2 = new Student("asritha", "24B01A4214");

student1.displayDetails();
student2.displayDetails();

console.log(student1.rollNumber);

console.log(`Total Students: ${Student.totalStudents}`);