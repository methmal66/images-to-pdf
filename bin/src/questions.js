"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
const questions = [
    {
        type: 'input',
        name: 'output_file_name',
        message: 'Output pdf file name',
        default: utils_1.get_base_dir(),
    },
];
exports.default = questions;
