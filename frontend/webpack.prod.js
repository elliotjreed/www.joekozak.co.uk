const merge = require("webpack-merge");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { resolve, join } = require("path");
const glob = require("glob");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
  src: join(__dirname, "src")
};

module.exports = merge(commonConfig, {
  devtool: "source-map",
  entry: "./index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        styles: {
          chunks: "all",
          enforce: true,
          name: "styles",
          test: /\.css$/
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  output: {
    filename: "js/[name].[hash].min.js",
    path: resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  plugins: [
    new WebpackPwaManifest({
      background_color: "#610a15",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      description: "",
      icons: [
        {
          sizes: [96, 128, 150, 192, 256],
          src: resolve("src/assets/img/icon.png")
        }
      ],
      inject: true,
      ios: true,
      name: "Joe Kozak",
      short_name: "JK",
      theme_color: "#610a15"
    }),
    new MiniCssExtractPlugin({
      chunkFilename: "[id].[hash].css",
      filename: "[name].[hash].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      whitelistPatterns: [/swiper-/],
      whitelistPatternsChildren: [/swiper-/]
    }),
    new CopyPlugin([{ from: "./assets/static", to: "./" }]),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
