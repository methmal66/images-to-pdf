import path from 'path'

export const get_base_dir = function (): string {
   return path.basename(process.cwd())
}

const questions = [
   {
      type: 'input',
      name: 'directory',
      message: 'Path to the directory where images contain',
      default: '.',
   },
   {
      type: 'input',
      name: 'output_file_name',
      message: 'Output pdf file name',
      default: get_base_dir(),
   },
]

export default questions
