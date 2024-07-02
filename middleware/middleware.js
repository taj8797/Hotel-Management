const jwt =require("jsonwebtoken")

const secret_key = "login_code"

exports.auth =(req,res,next)=>{

    try{

    let token = req.headers["Authorization"]

    if(token){
        token= token.split('')[1]

        
    }
    let user = jwt.verify(token,secret_key)


     return res.status(200).send({
        success : true,
        status : 200,
        message : "Authorized User",
        data :  user 
     })

    next()

    }catch(error){

        res.status(401).send({
            message : "Unauthorized",
        })

    }

}
