import validateConfig from "@danielres/validate-config";

const config = {
  PORT: [process.env.PORT_API, "port"],
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
