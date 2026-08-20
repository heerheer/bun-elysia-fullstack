import Bun from "bun";
import fs from "fs";
import tailwindplugin from "bun-plugin-tailwind"

await Bun.build({
    entrypoints: ["./index.html","./server/index.ts",],
    outdir: "./dist",
    target: "bun",
    plugins: [
        tailwindplugin
    ],

})

fs.cpSync("./public", "./dist/public", { recursive: true });

console.log("Build completed successfully!");
console.log("run `cd ./dist` and run `bun run index.js` to start the server.");