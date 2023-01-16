const videoServices = require("../services/videos.service");

const postVideo = async (req, res) => {
  try {
    const video = req.body;
    const result = await videoServices.create(video);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteVideo = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await videoServices.delete(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    postVideo,
    deleteVideo
};
