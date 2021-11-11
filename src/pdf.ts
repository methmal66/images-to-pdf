import pdfkit from 'pdfkit'
import fs from 'fs'
import path from 'path'

export const create_pdf = function (files: string[], dir: string, output: string): void {
   const stream = fs.createWriteStream(path.join(dir, output))

   const doc = new pdfkit()
   doc.pipe(stream)

   files
      .map((name) => path.join(dir, name))
      .forEach((name) => {
         doc.image(name, 0, 0, {
            width: 595.28,
            align: 'center',
            valign: 'center',
         })
         doc.addPage()
      })

   doc.end()
}
