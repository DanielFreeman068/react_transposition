const express = require("express");
const router = express.Router();
const {createUser, createScore} = require("../controllers/transpositionController");

router.post("/", createUser);
router.post('/LevelOne', createScore);

module.exports = router;