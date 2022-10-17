const pumpkinBreadRecipe = {
  title: "Pumpkin-Shaped Pumpkin Bread",
  difficulty: "Intermediate",
  author: "The Food Network",
  thumbnail: "/images/pumpkin-bread.jpeg",
  contentSource:
    "https://www.foodnetwork.com/recipes/food-network-kitchen/pumpkin-shaped-pumpkin-bread-8849742",
  recipeTime: [40, 89, 129],
  yield: "1 loaf",
  ingredientsList: {
    Bread: [
      {
        amount: "1/4 cup",
        name: "whole milk",
        direction: "warmed to 110 degrees F",
      },
      {
        amount: "Two 1/4-ounce packets",
        name: "active-dry yeast",
        direction: "",
      },
      { amount: "3/4 cup", name: "pure pumpkin puree", direction: "" },
      { amount: "1/4 cup", name: "light brown sugar", direction: "packed" },
      { amount: "2", name: "large eggs", direction: "" },
      {
        amount: "1 tablespoon",
        name: "vegetable oil",
        direction: "plus more for greasing the bowl",
      },
      {
        amount: "3 cups",
        name: "all-purpose flour",
        direction: "plus more for dusting (see Cook's Note)",
      },
      { amount: "1 teaspoon", name: "ground cinnamon", direction: "" },
      { amount: "1 teaspoon", name: "kosher salt", direction: "" },
      { amount: "1", name: "cinnamon stick", direction: "" },
    ],
    "Spiced Pumpkin Butter": [
      { amount: "1 cup", name: "pure pumpkin puree", direction: "" },
      { amount: "1/3 cup", name: "heavy cream", direction: "" },
      { amount: "1/4 cup", name: "packed light brown sugar", direction: "" },
      { amount: "2 tablespoons", name: "maple syrup", direction: "" },
      { amount: "1 teaspoon", name: "ground cinnamon", direction: "" },
      { amount: "A pinch of", name: "Kosher salt", direction: "" },
    ],
  },
  utensils: ["pumpkin-shaped bread mould", "kitchen twine"],
  instructions: [
    "For the pumpkin bread: Pour the warm milk into a large bowl and sprinkle the yeast over top. Let the yeast activate until foamy, about 5 minutes. Whisk in the pumpkin puree, brown sugar, 1 large egg and the oil until smooth. Whisk together the flour, ground cinnamon and salt in a separate bowl, then stir into the pumpkin mixture until a shaggy ball forms.",
    "Lightly dust a work surface with flour. Turn out the dough and knead until very smooth and elastic, about 10 minutes. Transfer to another large bowl lightly greased with oil. Cover tightly with plastic wrap and let rise in a warm place until doubled in size, 1 hour to 1 hour 15 minutes.",
    "Line a rimmed baking sheet with parchment paper. Punch down the dough, then reroll it into a smooth ball about 6 inches wide. Cut three 24-inch-long pieces of kitchen twine and lay them on a clean work surface, crisscrossing at the center to create a star-shaped pattern. Place the ball of dough in the center, then tie the ends of the twine up over the dough and secure in a knot, leaving about 1 inch of space between the dough and knot so it has room to proof and expand. Do not tie the twine too tightly. Transfer to the prepared baking sheet, insert the cinnamon stick in the center of the dough for the stem. Cover loosely with plastic wrap and let rise until the kitchen twine has tightened and the dough is starting to take the shape of a pumpkin, 15 to 30 minutes more.",
    "While the dough is rising, preheat the oven to 350 degrees F.",
    "Whisk the remaining egg with 1 teaspoon water in a small bowl, then brush over the entire exterior of the bread with a pastry brush. Bake until well browned and an instant-read thermometer registers 190 degrees F at the center, about 30 minutes. Cool completely on a wire rack. ",
    "For the spiced pumpkin butter: Combine the pumpkin puree, heavy cream, brown sugar, maple syrup, cinnamon and a pinch of salt in a small saucepan over medium-low heat. Cook, stirring frequently, until the sugar melts and the mixture thickens slightly and turns a deep orange color, about 10 minutes. Transfer to a bowl and refrigerate until chilled.",
    "Carefully cut and remove the kitchen twine from the bread. Cut into slices and serve with the spiced pumpkin butter.",
  ],
};

function generateIngredientRecipe(ingredientsList) {
  const ingredients = Object.keys(ingredientsList);
  const ingredientInfo = document.getElementById("ingredientInfo");

  ingredients.forEach((ingredient) => {
    const ingredientHeader = document.createElement("h3");
    ingredientHeader.innerText = ingredient;
    ingredientInfo.appendChild(ingredientHeader);
    const list = document.createElement("ul");

    pumpkinBreadRecipe.ingredientsList[ingredient].forEach((subingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.innerText = Object.values(subingredient).join(" ");
      list.appendChild(ingredientItem);
      ingredientInfo.appendChild(list);
    });
  });
}

const recipeName = document.getElementById("recipeName");
recipeName.innerText = pumpkinBreadRecipe.title;

const recipeAuthor = document.getElementById("recipeAuthor");
recipeAuthor.innerText = pumpkinBreadRecipe.author;

function populateInstructions(instructions) {
  const instruction = document.getElementById("instructionDiv");
  const steps = document.createElement("ul");
  instructions.forEach((instruction) => {
    const stepItem = document.createElement("li");
    stepItem.innerText = instruction;
    steps.appendChild(stepItem);
  });
  instruction.appendChild(steps);
}

function populateUtensils(utensils) {
  const utensilDiv = document.getElementById("utensilsInfo");
  const utensilsHeader = document.createElement("h3");
  utensilsHeader.innerText = "Utensils";
  utensilDiv.appendChild(utensilsHeader);
  const utensilList = document.createElement("ul");

  utensils.forEach((utensil) => {
    const utensilItem = document.createElement("li");
    utensilItem.innerText = utensil;
    utensilList.appendChild(utensilItem);
  });
  utensilDiv.appendChild(utensilList);
}

const { ingredientsList, instructions, utensils } = pumpkinBreadRecipe;

generateIngredientRecipe(ingredientsList);
populateInstructions(instructions);
populateUtensils(utensils);
