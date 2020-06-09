import validateConfig from "@danielres/validate-config";

const { env } = process;

const config = {
  PORT: [env.PORT_API, "port"],

  auth: {
    cookie: {
      KEY1: [env.API_AUTH_COOKIE_KEY1_SECRET, "secret"],
      KEY2: [env.API_AUTH_COOKIE_KEY2_SECRET, "secret"],
      MAX_AGE_MINUTES: [env.API_AUTH_COOKIE_MAX_AGE_MINUTES, "number"],
      SECURE: [env.SECURE !== "false", "boolean"],
    },
  },
};

export default validateConfig(getChecks())(config);

function getChecks() {
  return {
    array: [Array.isArray, (v: any[]) => v, "should be an array"],
    port: [
      (v: number) => Number.isInteger(v) && v > 0,
      Number,
      "should be a positive integer",
    ],
    saltRoundsInsecure: [
      (v: number) => Number.isInteger(v) && v > 0,
      Number,
      "should be an integer > 10",
    ],
    saltRoundsSecure: [
      (v: number) => Number.isInteger(v) && v > 10,
      Number,
      "should be a positive integer",
    ],
    secret: [
      (v: string) => typeof v === "string" && v.length > 30,
      String,
      "should be a string of lenght > 30",
    ],
  };
}
