import fs from "fs";
import newExports from "./exports.json";

const path = "./node_modules/element-plus/package.json";

const elementPkg = fs.readFileSync(path);

fs.writeFileSync("./el-package.copy.json", elementPkg);

const newPkg = Object.assign({}, JSON.parse(String(elementPkg)), newExports);

fs.writeFileSync(path, JSON.stringify(newPkg));
