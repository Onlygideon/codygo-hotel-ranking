"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = {
    MONGO_URI: (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : ""
};
//# sourceMappingURL=env.config.js.map