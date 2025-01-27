const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.optimization.runtimeChunk("single");
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
