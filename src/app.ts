import express from "express";
import helmet from "helmet";
import { ResponsePayload, HttpStatus } from "./common";

const app = express();
app.use(helmet());

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

app.listen(7000, () => console.log("Server listening on port 7000"));
