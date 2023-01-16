const { Router } = require("express");
const router = Router();
const { postVideo, deleteVideo } = require("../controllers/videos.controller");

router.post("/videos", postVideo);
router.delete("/videos/:id", deleteVideo);

module.exports = router;
