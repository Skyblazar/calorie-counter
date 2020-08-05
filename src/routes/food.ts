import { Router } from "express";

import { foodService } from "../services";
import { ResponsePayload, HttpStatus } from "../common";

export const foodRouter = Router();

foodRouter.get("/", async (req, res) => {
  const page = +(req.query.page || 0);
  const data = await foodService.find(page);

  res.json(
    new ResponsePayload({
      statusCode: HttpStatus.OK,
      data,
    })
  );
});

foodRouter.get("/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const foods = await foodService.search(query);

    res.json(
      new ResponsePayload({
        statusCode: HttpStatus.OK,
        data: foods,
      })
    );
  } catch (err) {
    console.error(err);

    res.json(
      new ResponsePayload({
        statusCode: HttpStatus.SERVER_ERROR,
      })
    );
  }
});
