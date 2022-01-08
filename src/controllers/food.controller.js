//import Food model here

const addFood = async (req, res) => {
  //addFood api logic here
};

//User will get the record on the basis of Meal and Target (i.e gaining or loss)
const getFoodByMealIdAndTarget = async (req, res) => {
  //getFoodByMealIdAndTarget api logic here
};

const getFoodById = async (req, res) => {
  //getFoodById api logic here
};

const updateFoodById = async (req, res) => {
  //updateFoodById api logic here
};

const deleteFoodById = async (req, res) => {
  //deleteFoodById api logic here
};

const FoodController = {
  addFood,
  getFoodByMealIdAndTarget,
  getFoodById,
  updateFoodById,
  deleteFoodById,
};
module.exports = FoodController;
