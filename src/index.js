import express from "express";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import { logger } from "./utils.js";

export async function createApp(httpServer) {
  //   const pgPool = new pg.Pool(config.postgres);

  //   logger.info("applying migration scripts...");
  //   const migrations = await migrate({ client: pgPool }, "sql");
  //   logger.info("%d migration scripts were applied", migrations.length);

  const app = createExpressApp();
  httpServer.on("request", app);

  //   if (config.cors) {
  //     app.use(cors(config.cors));
  //   }

    const io = new Server(
      httpServer
      //     , {
      //     cors: config.cors,
      //     adapter: createAdapter(pgPool),
      //   }
    );

  //   const db = new DB(pgPool);

  //   initAuth({ app, io, db, config });
  //   initEventHandlers({ io, db, config });

  //   const timerId = scheduleZombieUsersCleanup({ io, db });

  return {
    // logger,
    // pgPool,
    // async close() {
    //   io.close();
    //   await io.of("/").adapter.close();
    //   await pgPool.end();
    //   clearInterval(timerId);
    // },
  };
}

function createExpressApp() {
  const app = express();

  //   app.set("etag", false);
  //   app.set("x-powered-by", false);

  //   app.use(bodyParser.json());

  return app;
}

export { logger };
