#! /usr/bin/env ts-node

import inquirer from 'inquirer'
import questions from './questions'
import { get_files_in_order } from './utils'
import { create_pdf } from './pdf'

inquirer
   .prompt(questions)
   .then((answers) => {
      const path_to_images = process.cwd()
      const images = get_files_in_order(path_to_images)
      create_pdf(images, path_to_images, answers.output_file_name)
   })
   .catch((error) => console.log(error))
