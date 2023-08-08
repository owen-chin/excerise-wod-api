import express from 'express';

import { createLaptop, getLaptop, getLaptops, deleteLaptop, updateLaptop } from '../controllers/laptops.js';

const router = express.Router();

// "/" refers to /laptops
router.get("/", getLaptops);

router.get("/:id", getLaptop);

router.post("/", createLaptop);

router.delete("/:id", deleteLaptop);

//patch is used to apply partial modifications
//put is used replace an entire resource
router.patch("/:id", updateLaptop);

export default router;