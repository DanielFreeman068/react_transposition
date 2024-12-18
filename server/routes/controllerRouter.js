const express = require("express");
const router = express.Router();
const {createUser, createScore, readAllScores} = require("../controllers/transpositionController");

router.post("/", createUser);
router.get("/leaderboards", readAllScores);
router.post('/LevelOne', createScore);

module.exports = router;