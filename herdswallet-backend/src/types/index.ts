import Database from "../database/database";
import { Middlewares } from "../middleware";
import { Services } from "../services/types";

export interface Dependencies {
  services: Services;
  db: Database;
  middlewares: Middlewares;
}
