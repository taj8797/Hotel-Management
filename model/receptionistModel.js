const mongoose = require('mongoose');

// Define the receptionist schema
const receptionistSchema = new mongoose.Schema({
    name: {
         type: String },

    email: { 
        type: String },

    phoneNumber: { 
        type : Number},


        roles : {

            type : String
        },

        address : {
            type : String
        },


        salary : {
            type : Number
        },

        added_By_admin: {

            type : mongoose.Schema.Types.ObjectId

        },

        added_By_manager: {
            type : mongoose.Schema.Types.ObjectId
        },

        

    shift: { 
        type: String,

         enum: ['Morning', 'Afternoon', 'Evening'],
          default: 'Morning' },
          
    createdAt: { type: Date, default: Date.now }
});

// Create the Receptionist model
const Receptionist = mongoose.model('Receptionist', receptionistSchema);

module.exports = Receptionist;