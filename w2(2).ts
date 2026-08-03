function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount);
}

const calculateFinalPrice = (price: number, discount: number): number =>
    price - (price * discount);

const greetUser = (name: string): string =>
    `Hello, ${name}! Welcome`;

const productPrice: number = 1200;
const discountRate: number = 0.15;

console.log(greetUser("asritha"));

const finalPrice1 = calculateDiscount(productPrice, discountRate);
console.log(`Final Price (Function): ₹${finalPrice1}`);

const finalPrice2 = calculateFinalPrice(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);