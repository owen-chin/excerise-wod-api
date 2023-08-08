import { v4 as uuidv4 } from 'uuid';

let laptops = []
export const getLaptops = (req, res) => {
    res.send(laptops);
};

export const getLaptop = (req, res) => {
    const id = req.params.id;

    const foundLaptop = laptops.find((laptop) => laptop.id === id);

    res.send(foundLaptop);
};

export const createLaptop = (req, res) => {
    const laptop = req.body
    const laptopWithId = { ...laptop, id:uuidv4() }

    // Adds an ID to the laptop
    laptops.push(laptopWithId);

    res.send(`Laptop with name: ${laptop.name} added to database.`);
};

export const deleteLaptop = (req, res) => {
    const id = req.params.id;

    laptops = laptops.filter((laptop) => laptop.id !== id);

    res.send(`Laptop with id: ${id} has been deleted from database`);
};

export const updateLaptop = (req, res) => {
    const id = req.params.id;
    const { name, weight } = req.body;

    const foundLaptop = laptops.find((laptop) => laptop.id === id);
    
    if(name) {
        foundLaptop.name = name;
    }
    if(weight) {
        foundLaptop.weight = weight;
    }
    res.send(`User with id: ${id} has been updated`)
};