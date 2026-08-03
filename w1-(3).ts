let teamName: string = "India";
let matchYear: number = 2024;
let wonMatch: boolean = true;

function getMatchInfo(team: string, year: number): string {
    return `${team} won an important match in ${year}.`;
}

let players: string[] = ["Rohit Sharma", "Virat Kohli", "Jasprit Bumrah", "Hardik Pandya"];

const result: string = getMatchInfo(teamName, matchYear);

console.log(result);
console.log(`Players: ${players.join(", ")}`);
console.log(`Match Won: ${wonMatch ? "Yes" : "No"}`);