import dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "test" | "production";
const nodeEnv = process.env.NODE_ENV as NodeEnv;

const getDBUrl = (): string => {
  if (nodeEnv === "development") return process.env.DB_URL_DEV || "";
  if (nodeEnv === "test") return process.env.DB_URL_TEST || "";

  return process.env.MONGODB_URI || "";
};

const getElasticSearchCredentials = (url: string) => {
  if (url === "") return;

  const split1 = url.split("://");
  const protocol = split1[0];
  const uri1 = split1[1];
  const split2 = uri1.split("@");
  const auth = split2[0];
  const uri2 = split2[1];
  const split3 = uri2.split(":");
  const host = split3[0];
  const port = +split3[1];

  return {
    host,
    port,
    protocol,
    auth,
    curlDebug: true,
  };
};

export const env = {
  nodeEnv,
  port: +(process.env.PORT || 7000),
  database: {
    url: getDBUrl(),
  },
  elasticSearchOpts: getElasticSearchCredentials(process.env.BONSAI_URL || ""),
};
