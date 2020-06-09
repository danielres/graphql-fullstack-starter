if (!process.env.NODE_ENV) process.env.NODE_ENV = "development";

const PORT_BASE = 3000;

const env = {
  PORT_UI: PORT_BASE,
  PORT_API: PORT_BASE + 1000,
};

module.exports = env;
