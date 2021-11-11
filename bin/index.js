#! /usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions_1 = __importDefault(require("./questions"));
const utils_1 = require("./utils");
const pdf_1 = require("./pdf");
inquirer_1.default
    .prompt(questions_1.default)
    .then((answers) => {
    const path_to_images = process.cwd();
    const images = utils_1.get_files_in_order(path_to_images);
    pdf_1.create_pdf(images, path_to_images, answers.output_file_name);
})
    .catch((error) => console.log(error));
