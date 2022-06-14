const path=require('path');
const express=require('express');
const isAuth=require('../middleware/isAuth');
const router=express.Router();
const adminController=require('../controllers/admin');


router.get('/dashboard',isAuth,adminController.getAdminDash);

router.get('/adminProducts',isAuth,adminController.getAdminProducts);

router.post('/addNewProduct',isAuth,adminController.addNewProduct);


router.get('/adminCategory',isAuth,adminController.getAdminCategory);

router.post('/addNewCategory',isAuth,adminController.postAdminCategory);

router.post('/categoryUpdate',isAuth,adminController.categoryUpdate);

router.post('/product/:productName',isAuth,adminController.getProduct);

router.get('/customers',isAuth,adminController.getCustomers);

router.post('/customers',isAuth,adminController.addNewCustomer);

router.get('/customer-edit/:customerId',isAuth,adminController.getEditCustomer);

router.post('/customer-edit',isAuth,adminController.postUpdateCustomer);

router.post('/customer-delete',isAuth,adminController.deleteCustomer);

router.get('/productEdit/:prodId',isAuth,adminController.getProductEdit);

router.post('/updateProduct',adminController.postProductEdit);

router.post('/product-delete',adminController.productDelete);

router.get('/orders',adminController.getOrders);
module.exports=router;