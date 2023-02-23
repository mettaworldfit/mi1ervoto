const express = require("express");
const router = express.Router();
const controller = require('../controllers/peoples');



router.get('/peoples/form_data',controller.getPeoples);
router.post('/peoples/add',controller.addPeople);


module.exports = router;