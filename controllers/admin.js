const Product=require('../models/products');
const Category=require('../models/catagory');
const Customers=require('../models/customer');

exports.getAdminDash=(req, res, next)=>{

    if(!req.user)
    {
       res.redirect('/login');
    }
    else
    {
        console.log(req.user._id);
     res.render('admin/admin',{
        logo:'images/logo.svg',
        user: req.user
    }); 
}   
};

exports.getAdminProducts=( req, res, next)=>{
    Category.find()
    .then(category=>{
        Product.find()
        .then(products=>{
            res.render('admin/products',{
                pageTitle:'View Products',
                logo:'images/logo.svg',
                user: req.user,
                category:category,
                products:products
                
            });

        })
        .catch(error=>{
            console.log(error);
        });
        
    })
    .catch(error=>{
        console.log(error);
    })
    
};

exports.getAdminCategory=( req, res, next)=>{
    Category.find()
    .then(category=>{
        console.log(category);
        res.render('admin/category',{
            pageTitle:'Category',
            logo:'images/logo.svg',
            user: req.user,
            category:category
     
        });
    })
    .catch(error=>{console.log(error)});
    
};
exports.postAdminCategory=(req, res, next)=>{
    const categoryName=req.body.categoryName;
    const imageLink=req.body.imageLink;

    const newCategory=new Category({
        name:categoryName,
        imageLink:imageLink
    });
    newCategory.save()
    .then(result=>{
        res.redirect('/admin/adminCategory');
    })
    .catch(error=>{
        console.log(error);
    });
};


exports.categoryUpdate=(req, res, next)=>{
    const name=req.body.categoryName;
    const imageLink =req.body.imageLink;
    const cateId=req.body.categoryId;
    Category.findById(cateId)
    .then(category=>{
        category.name=name;
        category.imageLink=imageLink;
        return category.save().then(result=>{
            console.log('updated');
            res.redirect('/admin/adminCategory');
        });
    })
        
       
            
    .catch(err=>{
        console.log(err);
    });
    
    

};
exports.addNewProduct=(req, res, next)=>{
    const productName=req.body.productName;
    const productBrand=req.body.brandName;
    const productCatagory=req.body.catagory;
    const unit=req.body.unit;
    const productSize=req.body.unitMeasure;
    const unitCost=req.body.unitCost;
    const unitSellPrice=req.body.sellPrice;
    const quantity=req.body.quantity;
    const description=req.body.productDescription;
    const image=req.body.image; 
    const userId=req.body.userId; 
    const arrivalDate=req.body.arrivalDate;
    const expireDate=req.body.expireDate;
    const manufactureDate=req.body.manDate;
    const createdDate=Date.now();
    const updateDate=Date.now();
    const product=new Product({productName:productName,productBrand:productBrand,productCatagory:productCatagory,unitMeasure:unit,productSize:productSize,quantity:quantity,unitCost:unitCost,unitSellPrice:unitSellPrice,description:description,image:image,user:userId,arrivalDate:arrivalDate,expireDate:expireDate,manufactureDate:manufactureDate,createdDate:createdDate,updateDate:updateDate});
    product.save()
    .then( result=>{
        console.log('Product created');
        res.redirect('/admin/adminProducts');
    })
    .catch(error=>{
        console.log(error);
    });
    
};


exports.getProduct=(req, res, next)=>{
    const productId=req.body.productId;
    Product.findById({_id:productId})
    .then(product=>{
        let productParams=product.productName.replace(" ","-");

         res.render('admin/product',{
            pageTitle:'Safeline',
            logo:'/images/logo.svg',
            product:product,
            params:productParams
        })
    })
    .catch(err=>{
        console.log(err);
    })
};
exports.getProductEdit=(req, res, next)=>{
    const prodId=req.params.prodId;

    Product.findById({_id:prodId})
    .then( product=>{
        
        const editProduct=product;
        Category.find()
        .then(category=>{
            console.log(editProduct);
            res.render('admin/productEdit',{
                pageTitle:'Safeline',
                logo:'/images/logo.svg',
                product:editProduct,
                user:req.body,
                category:category
            });
            
        })
        .catch(error=>{
            console.log(error);
        })
        

    })
    .catch(err=>{
        console.log(err);
    });

};
exports.postProductEdit=(req, res, next)=>{

    const productName=req.body.productName;
    const productBrand=req.body.productBrand;
    const productCatagory=req.body.productCatagory;
    const unitMeasure=req.body.unitMeasure;
    const productSize=req.body.productSize;
    const unitCost=req.body.unitCost;
    const unitSellPrice=req.body.unitSellPrice;
    const quantity=req.body.quantity;
    const description=req.body.description;
    const image=req.body.image; 
    const userId=req.body.userId; 
    const arrivalDate=req.body.arrivalDate;
    const expireDate=req.body.expireDate;
    const manufactureDate=req.body.manufactureDate;
    const updateDate=Date.now();
    const prodId=req.body.productId;
    console.log(prodId);  

    Product.findById({_id:prodId})
    .then(product=>{
        if(!product)
        {
            return res.redirect('/');
        }
        product.productName=productName;
        product.productBrand=productBrand;
        product.productCatagory=productCatagory;
        product.unitMeasure=unitMeasure;
        product.productSize=productSize;
        product.quantity=quantity;
        product.unitCost=unitCost;
        product.unitSellPrice=unitSellPrice;
        product.description=description;
        product.image=image;
        product.arrivalDate=arrivalDate;
        product.expireDate=expireDate;
        product.manufactureDate=manufactureDate;
        product.updateDate=updateDate;
        product.save().then(result=>{
            console.log('updated');
            res.redirect('/admin/dashboard');
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    });
    
};


exports.productDelete=(req, res, next)=>{
    const prodId=req.body.productId;
    Product.deleteOne({_id:prodId})
    .then(result=>{
        console.log('product deleted');
        res.redirect('/admin/dashboard');
    })
    .catch()
};


exports.getCustomers=(req, res, next)=>{

    Customers.find()
    .then(customers=>{

        res.render('admin/customer',{
            pageTitle:'View Customers',
            logo:'images/logo.svg',
            user: req.user,
            customers:customers
        });
        
    })
    .catch(err=>{
        console.log(err);
    });    

};


exports.addNewCustomer=(req, res, next)=>{
    const shopName=req.body.shopName;
    const ownerName=req.body.ownerName;
    const mobile=req.body.mobile;
    const address=req.body.address;
    const customer= new Customers({
        shopName:shopName,
        ownerName:ownerName,
        mobile:mobile,
        address:address
    });

    customer.save()
    .then(result=>{
        console.log('Customers added');
        res.redirect('/admin/customers');
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getEditCustomer=(req, res, next)=>{
    const customerId=req.params.customerId;
    Customers.findOne({_id:customerId})
    .then(customer=>{
        
        res.render('admin/customerEdit',{
            pageTitle:'CustomerEdit',
            logo:'images/logo.svg',
            user: req.user,
            customer:customer
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postUpdateCustomer=(req, res, next)=>{
    const customerId=req.body.customerId;
    Customers.findById({_id:customerId})
    .then(customer=>{
        customer.ownerName=req.body.ownerName;
        customer.shopName=req.body.shopName;
        customer.mobile=req.body.mobile;
        customer.address=req.body.address;
        customer.save()
        .then(result=>{
            console.log('updated customer info');
            res.redirect('/admin/customers');
        }

        )
        
    })
    .catch(err=>{console.log(err)})
};

exports.deleteCustomer=(req, res, next)=>{
    const customerId=req.body.customerId;
    Customers.deleteOne({_id:customerId})
    .then(result=>{
        console.log('Deleted');
        res.redirect('/admin/customers');
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getOrders=(req, res, next)=>{
    res.render('admin/order',{
        pageTitle:'Safeline',
        logo:'/images/logo.svg',
        user:req.body
        
    })
};