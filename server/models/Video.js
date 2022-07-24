const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Video", VideoSchema);