export{};
import { addvoter } from "../controllers/votersControllers";
const express = require('express');
const router =express.Router(); 
router.post('/addVoter', addvoter);  //YS: THis can also be part of your users route
module.exports= router;

