const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const CustomersSchema=new Schema({
    shopName:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    createdDate:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('Customers',CustomersSchema);