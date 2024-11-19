import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { logger } from "./src/utils/index.js";
import { connectMongodb } from "./src/database/index.js";

const bootstrap = async () => {
  try {
    await connectMongodb();

    app.listen(config.application.port, () => {
      logger.info(`server running on port: ${config.application.port}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

bootstrap();
