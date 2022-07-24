const Video = require('../models/Video');

exports.fetchVideos = () => {
    return Video.find();
};