import path from 'path'
import fs from 'fs'

export const get_base_dir = function (): string {
   return path.basename(process.cwd())
}

export const get_files_in_order = function (dir_path: string): string[] {
   const files = fs
      .readdirSync(dir_path, { withFileTypes: true })
      .filter((item) => item.isFile())
      .map((file) => file.name)
   return files.sort()
}
