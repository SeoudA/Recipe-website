// To do
// 1. Get the JSON object to be referenced within this script
// 2. Convert that JSON object to text and then parse that text into a javascript object
// 3. Begin using the new javascript objects to create a new page using DOM:
//   a. Create the article body
//   b. Create the recipe sidebar
//   c. Create the main article instructions div
//   d. Insert the photo

// import data from "../json/recipe-index.json" assert { type: "JSON" };
fetch("../JSON/recipe-index.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
