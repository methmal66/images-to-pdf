import path from 'path'

export const get_base_dir = function (): string {
   return path.basename(process.cwd())
}
