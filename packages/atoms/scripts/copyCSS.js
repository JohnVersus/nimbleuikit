const fs = require("fs");
const path = require("path");

function copyCSS(dir, outDir) {
  fs.readdirSync(dir).forEach((item) => {
    const itemPath = path.join(dir, item);
    const outPath = path.join(outDir, item);

    if (fs.lstatSync(itemPath).isDirectory()) {
      fs.mkdirSync(outPath, { recursive: true });
      copyCSS(itemPath, outPath);
    } else if (path.extname(itemPath) === ".css") {
      fs.copyFileSync(itemPath, outPath);
    }
  });
}

copyCSS(path.join(__dirname, "..", "src"), path.join(__dirname, "..", "build"));
