import { Schema, model, Document, Model } from "mongoose";
const mongoosastic = require("mongoosastic");

export interface IFood {
  foodCode: number;
  displayName: string;
  portionDefault: number;
  portionAmount: number;
  portionDisplayName: string;
  factor: number;
  incrementF: number;
  multiplier: number;
  grains: number;
  wholeGrains: number;
  vegetables: number;
  orangeVegetables: number;
  drkgreenVegetables: number;
  starchyvegetables: number;
  otherVegetables: number;
  fruits: number;
  milk: number;
  meats: number;
  soy: number;
  drybeansPeas: number;
  oils: number;
  solidFats: number;
  addedSugars: number;
  alcohol: number;
  calories: number;
  saturatedFats: number;
}

interface IFoodDoc extends Document {}

interface ISearchQuery {
  query_string?: {
    query: string;
  };
}
interface IFoodModel extends Model<IFoodDoc> {
  search: (query: ISearchQuery, cb: (err: any, results: any) => void) => any;
}

const FoodSchema = new Schema(
  {
    foodCode: {
      type: Number,
    },
    displayName: {
      type: String,
      es_indexed: true,
    },
    portionDefault: {
      type: Number,
    },
    portionAmount: {
      type: Number,
    },
    portionDisplayName: {
      type: String,
      es_indexed: true,
    },
    factor: {
      type: Number,
    },
    incrementF: {
      type: Number,
    },
    multiplier: {
      type: Number,
    },
    grains: {
      type: Number,
    },
    wholeGrains: {
      type: Number,
    },
    vegetables: {
      type: Number,
    },
    orangeVegetables: {
      type: Number,
    },
    drkgreenVegetables: {
      type: Number,
    },
    starchyvegetables: {
      type: Number,
    },
    otherVegetables: {
      type: Number,
    },
    fruits: {
      type: Number,
    },
    milk: {
      type: Number,
    },
    meats: {
      type: Number,
    },
    soy: {
      type: Number,
    },
    drybeansPeas: {
      type: Number,
    },
    oils: {
      type: Number,
    },
    solidFats: {
      type: Number,
    },
    addedSugars: {
      type: Number,
    },
    alcohol: {
      type: Number,
    },
    calories: {
      type: Number,
    },
    saturatedFats: {
      type: Number,
    },
  },
  { timestamps: true }
);

FoodSchema.plugin(mongoosastic);
FoodSchema.static("search", () => {});

export const Food = model<IFoodDoc, IFoodModel>("Food", FoodSchema);

// Food.search(
//   {
//     query_string: {
//       query: "King",
//     },
//   },
//   (err, results) => {}
// );
