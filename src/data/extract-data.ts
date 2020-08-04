import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";

import { connectDb } from "../config";

async function extractData() {
  // await connectDb();

  const foods: any[] = [];
  createReadStream(path.join(__dirname, "Food_Display_Table.csv"))
    .pipe(csv())
    .on("data", (chunk) => foods.push(chunk))
    .on("end", () => {
      console.log(foods.slice(0, 1));
    });
}

extractData().then(() => console.log("Data extracted and saved"));
