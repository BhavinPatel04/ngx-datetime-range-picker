/**
 * Base configuration of application,
 * 'config.ENV.ts' will override this configuration
 */
export const Config = {
  production: false,

  name: "Harvest",
  title: "Harvest",

  uri: {
    api: "api"
  },

  default: {
    displayCount: 20
  },

  piwik: {
    enabled: false,
    app: "appName",
    prod: "prodName",
    url: "",
    siteId: 0
  },

  intro: {
    enabled: false
  },

  SSO: {
    enabled: true,
    type: "PFSSO", // read user info from header
    // type: 'cookie',             // read user info from cookie

    // cookie will still be a fall back of PFSSO when type is `PFSSO`
    cookieKeys: ["ihub-user"], // cookies will read
    cookieTransform: (values) => {
      if (values[0]) {
        const objs = JSON.parse(decodeURIComponent(values[0]));
        const user = objs.reduce((a, d) => Object.assign(a, d));
        return user;
      }
      return null;
    }
  },

  // sentry support
  raven: {
    enabled: false,
    url: ""
  },

  urlHtml5Mode: true,
  version: "1.0.0"
};
