const express = require("express");

const receptionistRouter = express.Router();

const receptionistController = require("../controller/receptionistController")

receptionistRouter.post("/insertReceptionist", receptionistController.createReceptionist);

// Fetch receptionists
receptionistRouter.get("/getReceptionists", receptionistController.fetchReceptionists);

// Delete receptionist by ID
receptionistRouter.delete("/deleteReceptionistData/:id", receptionistController.deleteReceptionistById);

// Update receptionist by ID
receptionistRouter.put("/updateReceptionistData/:id", receptionistController.updateReceptionist);

module.exports = receptionistRouter;
