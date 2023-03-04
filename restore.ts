import fs from "fs";

fs.writeFileSync(
  "./node_modules/element-plus/package.json",
  fs.readFileSync("./el-package.copy.json")
);
