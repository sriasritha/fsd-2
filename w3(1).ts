class LibraryBook {
    public bookTitle: string;
    public author: string;
    public price: number;
    public quantity: number;

    constructor(title: string, author: string);
    constructor(title: string, author: string, price: number, quantity: number);

    constructor(title: string, author: string, price?: number, quantity?: number) {
        this.bookTitle = title;
        this.author = author;
        this.price = price ?? 500;
        this.quantity = quantity ?? 1;
    }

    public getTotalCost(): number {
        return this.price * this.quantity;
    }

    public displayBook(): void {
        console.log("----- Book Details -----");
        console.log(`Title: ${this.bookTitle}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ₹${this.price}`);
        console.log(`Quantity: ${this.quantity}`);
        console.log(`Total Cost: ₹${this.getTotalCost()}`);
        console.log("------------------------");
    }
}

const book1 = new LibraryBook("Merchant of Venice", "William Shakespeare");

const book2 = new LibraryBook("To Kill a Mockingbird", "Harper Lee", 750, 3);

book1.displayBook();
book2.displayBook();

book2.quantity = 5;
console.log(`Updated Total Cost: ₹${book2.getTotalCost()}`);