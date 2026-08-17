const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2500 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(item => item.id === productId);

    if (!product) {
        return res.status(404).json({
            error: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product updated successfully",
        product: product
    });
});

app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const exists = products.some(item => item.id === productId);

    if (!exists) {
        return res.status(404).json({
            error: "Product not found"
        });
    }

    products = products.filter(item => item.id !== productId);

    res.json({
        message: "Product deleted successfully",
        deletedId: productId
    });
});

app.listen(PORT, () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
});