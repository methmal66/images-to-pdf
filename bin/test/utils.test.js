"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
const path_1 = __importDefault(require("path"));
test('display current directory', () => {
    expect(utils_1.get_base_dir()).toEqual('images-to-pdf');
});
test('find file names in correct order', () => {
    expect(utils_1.get_files_in_order(path_1.default.join(__dirname, 'images'))).toEqual(['1.png', '2.png', '3.png', 'output.pdf']);
});
