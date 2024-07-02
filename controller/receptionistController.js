const receptionistCollection = require("../model/receptionistModel");

exports.createReceptionist = async (req, res) => {
    try {
        const result = new receptionistCollection(req.body);

        if (!result) {
            throw "Something went wrong";
        }

        const resultData = await result.save();

        return res.send({
            success: true,
            status: 200,
            message: "Receptionist created successfully",
            data: resultData
        });
    } catch (error) {
        res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.fetchReceptionists = async (req, res) => {
    try {
        const getData = await receptionistCollection.find({});

        if (!getData || getData.length === 0) {
            throw "No receptionists found";
        }

        res.send({
            success: true,
            status: 200,
            message: "Receptionists fetched successfully",
            data: getData
        });
    } catch (error) {
        res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.deleteReceptionistById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteData = await receptionistCollection.findByIdAndDelete(id);

        if (!deleteData) {
            throw "Receptionist not found";
        }

        res.send({
            success: true,
            status: 200,
            message: "Receptionist deleted successfully",
            data: deleteData
        });
    } catch (error) {
        res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.updateReceptionist = async (req, res) => {
    const id = req.params.id;

    try {
        const updateResult = await receptionistCollection.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateResult) {
            throw "Receptionist not found";
        }

        res.send({
            success: true,
            status: 200,
            message: "Receptionist updated successfully",
            data: updateResult
        });
    } catch (error) {
        res.send({
            success: false,
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
