const express = require('express');
const router = express.Router();  
const mongoose = require('mongoose');
const Product = require('../models/products');   
const multer = require('multer');
const ProductsController = require('../controllers/products');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});


const upload = multer( {storage: storage});


router.get("/", ProductsController.products_get_all); 

router.post('/', upload.single('roomImage'),ProductsController.products_create_product);


router.get('/:productId', (req, res, next) => {       
    const id = req.params.productId;
    if(id === 'arunkudiyal') {
        res.status(200).json({
            message: 'This is a special product id',
            _id: id
        })
    }
    else{
        res.status(200).json({
            messgae: 'This is a normal product id',
            _id: id
        })
    }
})

module.exports = router;