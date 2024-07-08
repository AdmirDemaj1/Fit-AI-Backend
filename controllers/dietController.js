const Diet = require('../models/dietModel');
const chatgpt = require('../services/chatgpt'); 

const generateDietPlan = async (req, res) => {

  const { userId } = req.user;
  const { weight, height, age, gender, favoriteFoods, dislikedFoods } = req.body;
  const dietPlan = await chatgpt.generateDietPlan({ weight, height, age, gender, favoriteFoods, dislikedFoods });
  const newDietPlan = new Diet({ userId, dietPlan });
  await newDietPlan.save();
  res.json(newDietPlan);
};

const getDietPlan = async (req, res) => {

  const { userId } = req.user;
  const dietPlan = await Diet.findOne({ userId });
  res.json(dietPlan);
};

module.exports = { generateDietPlan, getDietPlan };
