import mongoose from "mongoose"

const laptopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    batteryLife: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Laptop =  mongoose.model("Laptop", laptopSchema)
export default Laptop