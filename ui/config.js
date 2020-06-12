import validateConfig from "@danielres/validate-config";

const config = {
  graphql: {
    URL: [process.env.NEXT_PUBLIC_GRAPHQL_URL, "string"],
  },

  routes: {
    PUBLIC: [["/signup"], "array"],
  },
};

export default validateConfig(getChecks())(config);

function getChecks() {
  return {
    array: [Array.isArray, (v) => v, "should be an array"],
  };
}
