import { Config as baseConfig } from "../config/config.base";
import { Config as envConfig } from "../config/config";

export const AppConfig: any = {
  ...baseConfig,
  ...envConfig
};
