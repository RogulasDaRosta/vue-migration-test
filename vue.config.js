const { defineConfig } = require("@vue/cli-service");

const path = require("path");
const webpack = require("webpack");

const isLocalhost =
  process.env.NODE_ENV === "local" || process.env.NODE_ENV === "development";

module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: dotEnvConfig.PUBLIC_PATH,
  //runtimeCompiler: true,
  // configureWebpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true,
  //   };
  // },

  chainWebpack: (config) => {
    if (isLocalhost) config.optimization.runtimeChunk("single"); // Need to be able to have HMR while developing.
    config.devServer.historyApiFallback(true);

    config.optimization.delete("splitChunks");

    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        };
      });

    config.resolve.alias.set("@", path.resolve(__dirname, "src"));

    config.resolve.alias.set("~", path.resolve(__dirname));

    config.plugin("webpack").use(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
      })
    );
  },
});
