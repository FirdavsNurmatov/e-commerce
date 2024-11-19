import application from "./app.js";
import jwt from "./jwt.js";

export const config = {
  ...application,
  ...jwt,
};
