import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";

import { connectDb } from "../config";
import { Food } from "../models";

function extractData() {
  return new Promise((resolve, reject) => {
    connectDb().then(() => {
      const foods: any[] = [];
      createReadStream(path.join(__dirname, "Food_Display_Table.csv"))
        .pipe(csv())
        .on("data", (chunk) => foods.push(chunk))
        .on("end", async () => {
          for (let i = 0; i < foods.length; i++) {
            await Food.create(foods[i]);
          }
          resolve(foods);
        });
    });
  });
}

extractData().then(() => console.log("Data extracted and saved"));
