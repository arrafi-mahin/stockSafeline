const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const employSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    username:{
      type: String,
      required:true
    },
    address:{
        type:String,
        required:true
    },
    nid:{
        type: Buffer,
        contentType:String
    },
    image:{
        type:Buffer,
        contentType:String
    },
    joinDate:{
        type:Date,
        required:true
    },
    resignDate:{
        type:Date
    },
    dateOfBirth:{
        type:Date
    },
    designation:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Employ',employSchema);