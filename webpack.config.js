import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  "mode": "development",
  "context": path.resolve(__dirname, "./src"),
  "target": "node",
  "entry": {
    "index": "./index",
  },
  "resolve": {
    "extensions": ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  "output": {
    "path": path.resolve(__dirname, "./dist-webpack"),
    // "chunkFormat": "module", // Not implemented yet
  },
  "module": {
    "rules": [
      {
        test: /\.[tj]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
            plugins: [
              ["replace-import-extension", { "extMapping": { ".js": "" }}],
            ],
          },
        },
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
};
