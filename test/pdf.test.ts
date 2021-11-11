import { create_pdf } from '../src/pdf'

test('combine images into pdf', () => {
   create_pdf(['1.png', '2.png', '3.png'], '/home/methmal/Programs/node/images-to-pdf/test/images', 'output.pdf')
})
