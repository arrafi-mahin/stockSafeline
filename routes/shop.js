const path=require('path');
const express=require('express');
const router=express.Router();

const shopController=require('../controllers/shop');
const { route } = require('./admin');

router.get('/',shopController.getShopIndex);

router.post('/category',shopController.getCategoryProducts);

router.post('/product/:productName',shopController.getProduct);


module.exports=router;