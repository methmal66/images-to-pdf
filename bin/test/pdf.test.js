"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdf_1 = require("../src/pdf");
test('combine images into pdf', () => {
    pdf_1.create_pdf(['1.png', '2.png', '3.png'], '/home/methmal/Programs/node/images-to-pdf/test/images', 'output.pdf');
});
