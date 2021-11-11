"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
test('combine images into pdf', () => {
    const images_dir = path_1.default.join(process.cwd(), 'test', 'images');
    const stream = fs_1.default.createWriteStream(path_1.default.join(images_dir, 'output.pdf'));
    const file_names = ['1.png', '2.png', '3.png'];
    const doc = new pdfkit_1.default();
    doc.pipe(stream);
    file_names
        .map((name) => path_1.default.join(images_dir, name))
        .forEach((name) => {
        doc.image(name, 0, 0, {
            width: 595.28,
            align: 'center',
            valign: 'center',
        });
        doc.addPage();
    });
    doc.end();
});
