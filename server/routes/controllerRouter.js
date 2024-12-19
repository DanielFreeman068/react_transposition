const express = require("express");
const router = express.Router();
const {createUser, createOrUpdateScore, readAllScores} = require("../controllers/transpositionController");

//.get methods
router.get("/leaderboards", readAllScores);

//.post methods
router.post("/", createUser);
router.post('/LevelOne', createOrUpdateScoreOne);
router.post('/LevelTwo', createOrUpdateScore);

module.exports = router;