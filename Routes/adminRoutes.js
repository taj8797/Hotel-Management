const express = require("express")

const adminRoute = express.Router()

const adminController =require("../controller/adminController")

//====================create Admin=======================

adminRoute.post("/InsertAdmin",adminController.createAdmin)

//====================getAdmin=============================

adminRoute.get("/getAdmin",adminController.fetchAdmin)

//========================for deleteAdminById ============================

adminRoute.delete("/deleteAdminData/:id",adminController.deleteAdmin)

//======================findByIdAndUpdate=========================

adminRoute.put("/updateAdminData/:id",adminController.updateAdmin)


module.exports = adminRoute

