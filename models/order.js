const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const orderSchema=new Schema({
    shopId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:'Shop'
    },
    products:{
        items:[]
    },
    orderDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date
    },
    status:{
        type:String
    }

    
});

module.exports=mongoose.model('Order',orderSchema);