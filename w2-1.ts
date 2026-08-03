function welcome(student: string): string {
    return `Welcome, ${student}!`;
}

function getCourse(course: string = "AIML"): string {
    return `Course: ${course}`;
}

function showDetails(name: string, id?: number, section: string = "A"): void {
    console.log(`Name: ${name}`);
    if (id) {
        console.log(`ID: ${id}`);
    }
    console.log(`Section: ${section}`);
}

function calculateMarks(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

const multiply = (a: number, b: number): number => a * b;

console.log(welcome("asritha"));
console.log(getCourse());
console.log(getCourse("CSE"));

showDetails("asritha", 4214, "B");
showDetails("bh");

const total = calculateMarks(85, 90, 88, 92);
console.log(`Total Marks: ${total}`);

console.log(`Multiplication: ${multiply(8, 5)}`);