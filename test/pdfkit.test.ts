import pdfkit from 'pdfkit'
import fs from 'fs'
import path from 'path'

test('combine images into pdf', () => {
   const images_dir = path.join(process.cwd(), 'test', 'images')
   const stream = fs.createWriteStream(path.join(images_dir, 'output.pdf'))
   const file_names = ['1.png', '2.png', '3.png']

   const doc = new pdfkit()
   doc.pipe(stream)

   file_names
      .map((name) => path.join(images_dir, name))
      .forEach((name) => {
         doc.image(name, 0, 0, {
            width: 595.28,
            align: 'center',
            valign: 'center',
         })
         doc.addPage()
      })

   doc.end()
})
