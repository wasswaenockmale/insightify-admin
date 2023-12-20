"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    /* Custom code  */
    let interval;
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:8080",
        methods: ["GET"],
      },
    });

    io.on("connection", (socket) => {
      if (interval) clearInterval(interval);
      console.log("User connected");

      interval = setInverval(
        () => io.emit("serverTime", { time: new Date().getTime() }),
        1000
      );
      socket.on("publishedOpportunity", async (data) => {
        let params = data;
        try {
          let data = await strapi
            .service("api:opportunity.opportunity")
            .loadOpportunities(params.id);

          io.emit("publishedOpportunity", data);
        } catch (error) {
          console.log(error);
        }
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
        clearInterval(interval);
      });
    });

    strapi.io = io;
  },
};
