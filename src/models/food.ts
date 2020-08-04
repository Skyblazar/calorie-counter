import { Schema, model, Document } from "mongoose";

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

const FoodSchema = new Schema(
  {
    foodCode: {
      type: Number,
    },
    displayName: {
      type: String,
    },
    portionDefault: {
      type: Number,
    },
    portionAmount: {
      type: Number,
    },
    portionDisplayName: {
      type: String,
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

export const Food = model<IFoodDoc>("Food", FoodSchema);
