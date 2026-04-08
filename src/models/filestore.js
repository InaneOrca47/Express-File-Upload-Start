const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer,
        required: true,
    },
    size: {
        type: Number,
        max: 16000000,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    }
});

const FileModel = mongoose.model('FileModel', FileSchema);

module.exports = FileModel;