import express from "express";
import bodyParser from "body-parser";
import laptopRoutes from "../routes/laptops.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/laptops", laptopRoutes);

app.get("/", (req, res) => {
    res.send("Hello from homepage");
});

app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
});
