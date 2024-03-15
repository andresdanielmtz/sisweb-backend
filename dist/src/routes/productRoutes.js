"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/', (req, res) => {
    res.send('GET /product');
});
productRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`GET /product/${id}`);
});
productRouter.post('/', (req, res) => {
    res.send(`POST /product with ${req.body.id}, Creating the product ${req.body.name} with the values of ${req.body.price} and ${req.body.stock}`);
});
productRouter.patch('/:id', (req, res) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`);
});
productRouter.delete('/', (req, res) => {
    res.send(`Deleting the product ${req.body.id}`);
});
exports.default = productRouter;
