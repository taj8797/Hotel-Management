const adminCollection = require("../model/adminModel")


//======================for create Admin==================

exports.createAdmin = async(req,res)=>{


    try {

        const result = new adminCollection(req.body)

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

exports.fetchAdmin = async(req,res)=>{

    try{

        const getData = await adminCollection.find({})
        
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

exports.deleteAdmin =async(req,res)=>{

    const id=req.params.id
    

    try{

        const deleteData = await adminCollection.findByIdAndDelete(id)
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

exports.updateAdmin = async(req,res)=>{

    const id= req.params.id
    

    try{

        const updateResult = await adminCollection.findByIdAndUpdate(id,req.body,{new : true})

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
