
const express = require("express")
const managerRouter =express.Router()

const managerController= require("../controller/managerController")




managerRouter.post("/InsertManager",managerController.createManager)

//====================getAdmin=============================

managerRouter.get("/getManager",managerController.fetchManager)

//========================for deleteAdminById ============================

managerRouter.delete("/deleteManagerData/:id",managerController.deleteManager)

//======================findByIdAndUpdate=========================

managerRouter.put("/updateManagerData/:id",managerController.updateManager)


module.exports = managerRouter

