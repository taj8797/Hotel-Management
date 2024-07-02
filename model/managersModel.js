const mongoose =require("mongoose")

const managerSchema = new mongoose.Schema({

   name : {

    type : String
   },
    
    email : {
    
        type : String
    },
    
    
    roles : {
        type : String
    },
    
    address : {
    
        type : String
    },

    added_By  : {
        
        type : mongoose.SchemaTypes.ObjectId

    },
    
    salary : {

        type : Number
    },
    
    phoneNumber : {
    
        type : Number
    },
    
    status : {
    
        type : Boolean
    
    }
    },{timestamps : true, versionKey : false})

 const managerCollection =  mongoose.model("managerCollection",managerSchema)

 module.exports = managerCollection