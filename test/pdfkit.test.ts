import pdfkit from 'pdfkit'
import fs from 'fs'
import path from 'path'
import { get_file_from } from '../src/utils'

test('combine images into pdf', () => {
   const images_dir = path.join(process.cwd(), 'test', 'images')
   const get_file = get_file_from(images_dir)
   const stream = fs.createWriteStream(path.join(images_dir, 'output.pdf'))
   const file_names = ['1.png', '2.png', '3.png']

   const doc = new pdfkit()
   doc.pipe(stream)

   file_names
      .map((name) => get_file(name))
      .forEach((file) => {
         doc.image(file.name, 0, 0, {
            width: 595.28,
            align: 'center',
            valign: 'center',
         })
         doc.addPage()
      })

   doc.end()
})
