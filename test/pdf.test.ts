import { create_pdf } from '../src/pdf'
import path from 'path'

test('combine images into pdf', () => {
   create_pdf(['1.png', '2.png', '3.png'], path.join(__dirname, 'images'), 'output.pdf')
})
