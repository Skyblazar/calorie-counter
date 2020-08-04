import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";

import { connectDb, diconnectDb } from "../config";
import { Food, IFood } from "../models";

function setFood(food: any): IFood {
  return {
    foodCode: +food.Food_Code,
    displayName: food.Display_Name,
    portionDefault: +food.Portion_Default,
    portionAmount: +food.Portion_Amount,
    portionDisplayName: food.Portion_Display_Name,
    factor: +food.Factor,
    incrementF: +food.Increment,
    multiplier: +food.Multiplier,
    grains: +food.Grains,
    wholeGrains: +food.Whole_Grains,
    vegetables: +food.Vegetables,
    orangeVegetables: +food.Orange_Vegetables,
    drkgreenVegetables: +food.Drkgreen_Vegetables,
    starchyvegetables: +food.Starchy_vegetables,
    otherVegetables: +food.Other_Vegetables,
    fruits: +food.Fruits,
    milk: +food.Milk,
    meats: +food.Meats,
    soy: +food.Soy,
    drybeansPeas: +food.Drybeans_Peas,
    oils: +food.Oils,
    solidFats: +food.Solid_Fats,
    addedSugars: +food.Added_Sugars,
    alcohol: +food.Alcohol,
    calories: +food.Calories,
    saturatedFats: +food.Saturated_Fats,
  };
}

function extractData() {
  return new Promise((resolve, reject) => {
    connectDb().then(() => {
      const foods: any[] = [];
      createReadStream(path.join(__dirname, "Food_Display_Table.csv"))
        .pipe(csv())
        .on("data", (chunk) => foods.push(chunk))
        .on("end", async () => {
          for (let i = 0; i < foods.length; i++) {
            try {
              await Food.create(setFood(foods[i]));
            } catch (err) {
              console.error(err);
            }
          }
          resolve(foods);
        });
    });
  });
}

extractData().then(() => {
  console.log("Data extracted and saved");
  diconnectDb();
});
