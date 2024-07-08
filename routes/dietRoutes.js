const express = require('express');
const { generateDietPlan, getDietPlan } = require('../controllers/dietController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/generate', authMiddleware, generateDietPlan);
router.get('/', authMiddleware, getDietPlan);

module.exports = router;
