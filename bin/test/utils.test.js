"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
test('display current directory', () => {
    expect(utils_1.get_base_dir()).toEqual('images-to-pdf');
});
test('find file names in correct order', () => {
    expect(utils_1.get_files_in_order('/home/methmal/Programs/node/images-to-pdf/test/images')).toEqual(['1.png', '2.png', '3.png', 'output.pdf']);
});
