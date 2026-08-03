class BankAccount {
    public accountHolder: string;
    private balance: number;
    private pin: number;
    protected rewardPoints: number = 0;

    constructor(name: string, amount: number, pin: number) {
        this.accountHolder = name;
        this.balance = amount;
        this.pin = pin;
    }

    public withdraw(amount: number, enteredPin: number): void {
        if (this.checkPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully.`);
                console.log(`Available Balance: ₹${this.balance}`);
            } else {
                console.log("Insufficient Balance");
            }
        } else {
            console.log("Invalid PIN");
        }
    }

    private checkPin(userPin: number): boolean {
        return this.pin === userPin;
    }
}

class SavingsAccount extends BankAccount {
    public addReward(): void {
        this.rewardPoints += 50;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}

const account = new BankAccount("asritha", 8000, 4455);

console.log(`Account Holder: ${account.accountHolder}`);

account.withdraw(2000, 4455);
account.withdraw(1000, 1234);

const savings = new SavingsAccount("bh", 12000, 5678);
savings.addReward();