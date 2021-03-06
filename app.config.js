import "dotenv/config";

export default {
  expo: {
    name: "helper",
    slug: "helper",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./app/assets/logo.png",
    splash: {
      image: "./app/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./app/assets/logo.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.project.helper",
    },
    web: {
      favicon: "./app/assets/logo.png",
    },
  },
};
