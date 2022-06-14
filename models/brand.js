const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const brandSchema=new Schema({
    name:{
        type: String,
        required:true
    },
    originCountry:{
        type:String,
        required:true
    },
    parentCompany:{
        type:String
    }
});

module.exports=mongoose.model('Brand',brandSchema);