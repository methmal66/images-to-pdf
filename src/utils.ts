import path from 'path'
import sizeOf from 'image-size'

export type file = {
   name: string
   height: number | undefined
   width: number | undefined
}

export function get_file_from(base: string): any {
   return function (name: string): file {
      const file_name = path.join(base, name)
      const dims = sizeOf(file_name)
      return {
         name: file_name,
         ...dims,
      }
   }
}
