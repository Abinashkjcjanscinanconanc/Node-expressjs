const express = require('express');
const path = require('path');
const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-adproduct => GET
router.get('/add-product',adminController .getAddProduct);

// /admin/product => GET
router.get('/products',adminController.getAddProducts);

// /admin/add-adproduct => POST
router.post('/add-product',adminController .postAddProducts);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

module.exports = router;

