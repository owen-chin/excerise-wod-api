import express from 'express';

const router = express.Router();

router.get("/laptops", (req, res) => {
    res.send("HELLO")
});

export default router;