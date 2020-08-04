import { connect } from "mongoose";
import { env } from "./environment.variables";

export function connectDb() {
  return connect(env.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then((connection) => {
    console.log("Database connected");

    return connection;
  });
}
