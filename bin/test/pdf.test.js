"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdf_1 = require("../src/pdf");
const path_1 = __importDefault(require("path"));
test('combine images into pdf', () => {
    pdf_1.create_pdf(['1.png', '2.png', '3.png'], path_1.default.join(__dirname, 'images'), 'output.pdf');
});
