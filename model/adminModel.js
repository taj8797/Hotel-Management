const mongoose= require("mongoose")

const adminSchema = new mongoose.Schema({

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

phoneNumber : {

    type : Number
},


status   : {

    type : Boolean


}
},{timestamps : true, versionKey : false})

const adminCollection = mongoose.model("adminCollection",adminSchema)

module.exports = adminCollection