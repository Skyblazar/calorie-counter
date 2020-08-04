import express from "express";
import helmet from "helmet";

import { ResponsePayload, HttpStatus } from "./common";
import { connectDb, env } from "./config";

const app = express();
app.use(helmet());

connectDb();

app.get("/", (req, res) => {
  res.json(
    new ResponsePayload({
      statusCode: HttpStatus.OK,
      data: "Calorie Counter",
    })
  );
});

app.use((req, res) => {
  res.json(
    new ResponsePayload({
      statusCode: HttpStatus.NOT_FOUND,
      data: "Not Found",
    })
  );
});

app.listen(env.port, () => console.log(`Server listening on port ${env.port}`));
