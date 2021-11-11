import { get_base_dir } from '../src/utils'

const questions = [
   {
      type: 'input',
      name: 'output_file_name',
      message: 'Output pdf file name',
      default: get_base_dir(),
   },
]

export default questions
