"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_pdf = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const create_pdf = function (files, dir, output) {
    const stream = fs_1.default.createWriteStream(path_1.default.join(dir, output));
    const doc = new pdfkit_1.default();
    doc.pipe(stream);
    files
        .map((name) => path_1.default.join(dir, name))
        .forEach((name) => {
        doc.image(name, 0, 0, {
            width: 595.28,
            align: 'center',
            valign: 'center',
        });
        doc.addPage();
    });
    doc.end();
};
exports.create_pdf = create_pdf;
