module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:3000",
        "http://localhost:1336",
        "https://insightify-admin.ablestate.cloud",
        "https://ablestate.africa",
        "https://www.ablestate.africa",
        "https://be.ablestate.cloud",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
