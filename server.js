import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { logger } from "./src/utils/index.js";

const bootstrap = async () => {
  try {
    app.listen(config.application.port, () => {
      logger.info(`server running on port: ${config.application.port}`);
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};

bootstrap();
