const express = require("express");
const router = express.Router();
const controller = require("../controllers/jobs");

router.get("/jobs", controller.getJobs);
router.post("/jobs", controller.createJob);
router.put("/jobs/:id", controller.updateJob);

module.exports = router;
