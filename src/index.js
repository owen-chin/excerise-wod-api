import express from "express";
import bodyParser from "body-parser";
import laptopRoutes from "../routes/laptops.js";
import mongoose from "mongoose";
import 'dotenv/config';

const app = express();
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const database = mongoose.connection;

database.on('error', (error) => console.error(error));
database.once('open', () => console.log("Connected to MongoDB"));

app.use(bodyParser.json());

app.use("/laptops", laptopRoutes);

app.get("/", (req, res) => {
    res.send("Hello from homepage");
});

app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
});
