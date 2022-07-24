const { fetchVideos } = require('../services/videoService');

exports.getFetchVideos = async (req, res) => {
    try{
        const videos = await fetchVideos();
        return res.status(200).json({message: 'Success', videos})
    }catch(err) {
        return res.status(500).json({message: err.message})
    }
};