const managerCollection = require("../model/managersModel")

exports.createManager = async(req,res)=>{


    try {

        const result = new managerCollection(req.body)

        if(!result){
          
            throw "someting went wrong"
        }
        const resultData=await result.save()

        return res.send({
            success : true,
            status : 200,
            message : "InsertData Successfully",
            data : resultData
        })
    }catch(error){


        res.send({
            success : false,
            status : 500,
            message : "Internal Server Error",
            error : error
        })
    }
}


//========================for getAdmin ============================

exports.fetchManager = async(req,res)=>{

    try{

        const getData = await managerCollection.find({})
        
        if(!getData){

            throw "Something Went Wrong"
        }

        res.send({
            success : true ,
            status : 200,
            message : "Fetch Successfully",
            data : getData
        })
    }catch(error){

        res.send({
            success : false ,
            status : 500,
            message : "Internal Server Error",
            error : error
        })
    }
}


//========================for deleteAdminById ============================

exports.deleteManager =async(req,res)=>{

    const id=req.params.id
    

    try{

        const deleteData = await managerCollection.findByIdAndDelete(id)
        if(!deleteData){
            throw  "Something Went Wrong"
        }
        res.send({
            success : true ,
            status : 200,
            message : "Delete Successfully",
            data : deleteData


        })
    }catch(error){

        res.send({
            success : false ,
            status : 500,
            message : "Internal Server Error",
            error : error
        })
    }
}


//======================findByIdAndUpdate=========================

exports.updateManager = async(req,res)=>{

    const id= req.params.id
    

    try{

        const updateResult = await managerCollection.findByIdAndUpdate(id,req.body,{new : true})

        if(!updateResult){
            throw  'Something Went Wrong'
        }


        res.send({
            success : true ,
            status : 200,
            message : "Update Successfully",
            data : updateResult


        })
    }catch(error){

        res.send({
            success : false ,
            status : 500,
            message : "Internal Server Error",
            error : error
        })

    }
}