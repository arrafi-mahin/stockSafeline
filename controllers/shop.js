const Product=require('../models/products');
const Category=require('../models/catagory');
exports.getShopIndex=(req,res,next)=>{
    Category.find()
    .then(category=>{
        res.render('shop/index',{
            pageTitle:'Safeline',
            logo:'/images/logo.svg',
            category:category
        });
    })
    .catch(err=>console.log(err));    
};


exports.getCategoryProducts=(req, res, next)=>{
      const categoryName=req.body.categoryName;
      Product.find({productCatagory:categoryName})
      .then(products=>{
        res.render('shop/category',{
            pageTitle:'Safeline',
            logo:'/images/logo.svg',
            products:products
        });
      })
      .catch(error=>{
          console.log(error);
      });
}


exports.getProduct=(req, res, next)=>{
    const productId=req.body.productId;
    Product.findById({_id:productId})
    .then(product=>{
        let productParams=product.productName.replace(" ","-");

         res.render('shop/product',{
            pageTitle:'Safeline',
            logo:'/images/logo.svg',
            product:product,
            params:productParams
        })
    })
    .catch(err=>{
        console.log(err);
    })
}
