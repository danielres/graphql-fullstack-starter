import validateConfig from "@danielres/validate-config";

const checks = {};

const config = {
  graphql: {
    URL: [process.env.NEXT_PUBLIC_GRAPHQL_URL, "string"],
  },
};

export default validateConfig(checks)(config);
