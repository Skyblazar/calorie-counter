import dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "test" | "production";
const nodeEnv = process.env.NODE_ENV as NodeEnv;

const getDBUrl = (): string => {
  if (nodeEnv === "development") return process.env.DB_URL_DEV || "";
  if (nodeEnv === "test") return process.env.DB_URL_TEST || "";

  return process.env.DB_URL_PROD || "";
};

export const env = {
  nodeEnv,
  port: +(process.env.PORT || 7000),
  database: {
    url: getDBUrl(),
  },
};
