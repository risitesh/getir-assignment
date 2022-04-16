const mongoose = require("mongoose");

const recordsSchema = mongoose.Schema(
    {
        key: {
            required: true,
            type: String
        },
        counts: {
            required: true,
            type: Array
        },
        value: {
            required: true,
            type: String
        }
    },
    {
        timestamps: { createdAt: true, updatedAt: false }
    }
);

const Records = mongoose.model('records', recordsSchema);

module.exports = Records;