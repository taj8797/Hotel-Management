
const express = require('express');

const userRoute = express.Router()

const UserController = require("../controller/userController")


//======================================signUpUser===================================

userRoute.post('/signUpUser',UserController.signUp)

//======================================loginUser===================================

userRoute.post('/logIn',UserController.loginUser)

//======================================forgetPassword===================================

userRoute.post('/forgetPassword',UserController.forgetPassword)

//======================================createNewPassword===================================

userRoute.post('/newPassword/:verificationCode',UserController.createNewPassword)


//==============================fileUPlad==================================




module.exports = userRoute
