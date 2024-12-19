const express = require("express");
const router = express.Router();
const {createUser, readOneScores, readTwoScores,readThreeScores, createOrUpdateScoreOne, createOrUpdateScoreTwo, createOrUpdateScoreThree, readFourScores, createOrUpdateScoreFour} = require("../controllers/transpositionController");

//.get methods
router.get("/FirstLevelData", readOneScores);
router.get("/SecondLevelData", readTwoScores);
router.get("/ThirdLevelData", readThreeScores);
router.get("/FourthLevelData", readFourScores);

//.post methods
router.post("/", createUser);
router.post('/LevelOne', createOrUpdateScoreOne);
router.post('/LevelTwo', createOrUpdateScoreTwo);
router.post('/LevelThree', createOrUpdateScoreThree);
router.post('/LevelFour', createOrUpdateScoreFour);

module.exports = router;