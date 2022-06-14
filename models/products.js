const mongoose=require('mongoose');

const Schema=mongoose.Schema;

productSchema= new Schema({
    productName:{
        type: String,
        required:true
    },
    productBrand:{
        type: String,
        required:true
    },
    productCatagory:{
        type:String,
        required:true
    },
    unitMeasure:{
        type:String,
        required:true
    },
    productSize:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    unitCost:{
        type:Number,
        required:true
    },
    unitSellPrice:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
      type:String,
      required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: 'admin'
    },
    arrivalDate:{
        type:Date
    },
    expireDate:{
        type:Date
    },
    manufactureDate:{
        type:Date
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    updateDate:{
        type:Date,
        default:Date.now,
        required:true
    }

});


module.exports=mongoose.model('Product',productSchema);