if (!process.env.NODE_ENV) process.env.NODE_ENV = "development";

const PORT_BASE = 3000;

const env = {
  PORT_UI: PORT_BASE,
  PORT_API: PORT_BASE + 1000,

  API_AUTH_COOKIE_KEY1_SECRET: "secret-hgvkgvsdjbad9876svdhkasq",
  API_AUTH_COOKIE_KEY2_SECRET: "secret-870oh3beucgTTIFCKJuihoew",
  API_AUTH_COOKIE_MAX_AGE_MINUTES: 60,

  SECURE: false,
};

module.exports = env;
