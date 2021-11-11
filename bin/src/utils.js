"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_files_in_order = exports.get_base_dir = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const get_base_dir = function () {
    return path_1.default.basename(process.cwd());
};
exports.get_base_dir = get_base_dir;
const get_files_in_order = function (dir_path) {
    const files = fs_1.default
        .readdirSync(dir_path, { withFileTypes: true })
        .filter((item) => item.isFile())
        .map((file) => file.name);
    return files.sort();
};
exports.get_files_in_order = get_files_in_order;
