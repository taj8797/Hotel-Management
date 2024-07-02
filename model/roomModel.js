const mongoose = require('mongoose');

// Define the schema for rooms
const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['single', 'double', 'suite'], // Example room types
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description:
    {
        type: String,
      
    },

    capacity: {
        adults: {
            type: Number,
            default: 1
        },
        children: {
            type: Number,
            default: 0
        }
    },
    amenities: [String] // Example array of amenities
});

// Create a model for the room schema
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;