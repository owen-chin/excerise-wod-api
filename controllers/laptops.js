import Laptop from "../models/laptop.js"

export const getLaptops = async (req, res) => {
    try {
        const laptops = await Laptop.find()
        res.send(laptops)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getLaptop = [getLaptopById, (req, res) => {
    res.json(res.laptop)
}]

export const createLaptop = async (req, res) => {
    try {
        const laptop = new Laptop ({
            name: req.body.name,
            weight: req.body.weight,
            batteryLife: req.body.batteryLife,
            size: req.body.size,
            price: req.body.price
        })
        const newLaptop = await laptop.save()
        res.status(201).json(newLaptop)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteLaptop = [getLaptopById, async (req, res) => {
    try {
        await res.laptop.deleteOne()
        res.status(200).json({ message: `Deleted Laptop`})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}]

export const updateLaptop = [getLaptopById, async (req, res) => {
    const { name, weight, price, size, batteryLife } = req.body
    if (name != null) {
        res.laptop.name = name
    }
    if (weight != null) {
        res.laptop.weight = weight
    }
    if (price != null) {
        res.laptop.price = price
    }
        if (size != null) {
        res.laptop.size = size
    }
    if (batteryLife != null) {
        res.laptop.batteryLife = batteryLife
    }
    try {
        const updatedLaptop = await res.laptop.save()
        res.status(200).json(updateLaptop)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}]

async function getLaptopById(req, res, next) {
    let laptop
    try {
        laptop = await Laptop.findById(req.params.id)
        if (laptop == null) {
            return res.status(404).json({ message: "Cannot find laptop"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.laptop = laptop
    next()
}