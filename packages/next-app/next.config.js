const path = require("path");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

// this fixes strange "hook" issue - https://github.com/vercel/next.js/issues/9022
const addReact = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (options.isServer) {
                config.externals = [...config.externals, "react"/*, "@apollo/client"*/];
            }

            config.resolve.alias["react"] = path.resolve(__dirname, "./node_modules/react");

            // !!! This will actually fix the issue and remove @apollo/client from 'shared' module
            // but is it a correct fix???
            // config.resolve.alias["@apollo/client"] = path.resolve(__dirname, "./node_modules/@apollo/client");

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options);
            }

            return config;
        },
    });
};

module.exports = (phase, args) => {
    return withPlugins([
        [addReact],
        [withBundleAnalyzer],
        config => {
            // config.experimental = {
            //   externalDir: true,
            // };
            config.future = {
                webpack5: true,
            };
            return config;
        },
    ])(phase, args);
};
