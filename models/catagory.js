const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const catagorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    }
    
});

module.exports=mongoose.model('Catagory',catagorySchema);