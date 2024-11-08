module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },

  pageExtensions: ["js", "jsx", "ts", "tsx"],

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, PATCH",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },

  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
};
