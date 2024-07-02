
const userCollection = require("../model/userModel")


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret_key = "login_code"


//========================signupUser=====================================

exports.signUp = async (req, res) => {

    const { username, password, email, address, phoneNumber, role } = req.body

    try {

        const userExit = await userCollection.findOne({ email: email })

        if (userExit) {
            return res.status(404).send({
                success: false,
                message: "Already User Exit"
            })

        }

        const hashPassword = await bcrypt.hash(password, 10)

        const userResult = await userCollection.create({

            username: username,
            password: hashPassword,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            role: role
        })

        return res.status(200).send({
            success: true,
            status: 200,
            message: "SignUp Successfully",
            data: userResult
        })

    } catch (err) {
        console.log("err====", err)
        return res.status(500).send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            err: err.message

        })
    }

}

//===========================loginUser===============================  

exports.loginUser = async (req, res) => {

    const { email, password } = req.body

    try {

        const existingUser = await userCollection.findOne({ email: email })

        if (!existingUser) {
            throw "Please Enter a Valid Emailaddress"
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)

        if (!matchPassword) {
            return res.send({
                status: 404,
                message: "Invalid Password"
            })



        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret_key)

        return res.send({

            success: true,
            status: 200,
            message: "User login Successfully",
            token: token

        })


    } catch (error) {

        console.log("errors===", error);

        return res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            error: error.message

        })
    }


}

//===========================generate random code ====================================

const generateRandonCode = ((length) => {

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let result = ""

    for (i = 0; i < length; i++) {
     

        result += characters.charAt(Math.floor(Math.random() * characters.length))


    
}

    return result

})



//==========================forget  password==========================

exports.forgetPassword = async (req, res) => {

    const { email } = req.body

    try {


        if (email === undefined) {

            throw "please enter an email address"
        }



        const userExit = await userCollection.findOne({ email: email })

        if (!userExit) {

            throw "please enter a valid eamil address"
        }

        const result = await userCollection.findOneAndUpdate({
            email: email
        },

            {
                $set: {
                    verificationCode: generateRandonCode(6),
                    expireVerificationCode: new Date(Date.now() + 24 * 60 * 60 * 1000)
                },

            },
            { new: true })


        return res.send({
            success: true,
            status: 200,
            message: "Verification Code Send Successfully",
            data: result
        })




    } catch (err) {

        console.log("err====", err);

        return res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            err: err.message

        })

    }

}

//============================================create a new password ================================

exports.createNewPassword = async (req, res) => {

    const { newPassword, confirmPassword } = req.body

    console.log("newpassword", newPassword);

    try {

        if (newPassword !== confirmPassword) {

            throw new Error ("New password and confirm password should not be same")

        }

        const  verificationCode= req.params.verificationCode

        const exVerificationCode  = await userCollection.findOne({verificationCode})

        console.log("exVerificatinCode===",exVerificationCode);

        if (exVerificationCode==null) {

            throw new Error ("invlid user")

        }

        if (exVerificationCode.expireVerificationCode < new Date()) {


            throw new Error ("Code Expire")

        }


        const hashPassword = await bcrypt.hash(newPassword,10)
        const response = await userCollection.findOneAndUpdate({ _id: exVerificationCode._id },

      

            {
                $set : {password : hashPassword},

            // {
            //     $set: { password: newPassword },

              
            
            
            $unset : { 
                verificationCode : 1,
                expireVerificationCode : 1
            },
        },{new : true} )

        console.log("response===",response)

        return res.send({
            success: true,
            status: 200,
            message: "Password Change Successfully",
            data: response
        })
        

    } catch (err) {
        console.log("err=======", err);

        return res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            err: err.message
        })


    }
}





