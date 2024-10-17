// routes/flipkart.routes.js
import express from "express";
import FlipkartModel from "../model/flipkard.model.js"; // Update the path based on your project structure

const router = express.Router();

// Create a new product
router.post("/products", async (req, res) => {
    try {
        const newProduct = new FlipkartModel(req.body); // Assuming req.body contains { name: "Product Name" }
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
});

// Get all products
router.get("/products", async (req, res) => {
    try {
        const products = await FlipkartModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
});

// Get a single product by ID
// router.get("/products/:id", async (req, res) => {
//     try {
//         const product = await FlipkartModel.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching product", error });
//     }
// });

// Update a product by ID
// router.put("/products/:id", async (req, res) => {
//     try {
//         const updatedProduct = await FlipkartModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: "Error updating product", error });
//     }
// });

// Delete a product by ID
// router.delete("/products/:id", async (req, res) => {
//     try {
//         const deletedProduct = await FlipkartModel.findByIdAndDelete(req.params.id);
//         if (!deletedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(204).send(); // No content
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting product", error });
//     }
// });

export default router;
