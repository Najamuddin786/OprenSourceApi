import mongoose from "mongoose";

// Define the schema
const flipkartSchema = new mongoose.Schema({
    name: String,
});

// Create the model
const FlipkartModel = mongoose.model("Flipkart", flipkartSchema);

export default FlipkartModel;
