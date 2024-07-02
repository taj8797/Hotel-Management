const mongooose = require('mongoose')


// Define User schema
const userSchema = new mongooose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address : {
        type: String,
    
    },

    phoneNumber : {

        type : Number
    },
    
    role: {
        type: String,
        enum: ['admin', 'receptionist', 'guest',"manager"],
        default: 'guest'
    },

    verificationCode : {
        type : String
    },

    expireVerificationCode : {
        type : Number
    }

});

// Create User model
const User = mongooose.model('User', userSchema)

// Export User model
module.exports = User



