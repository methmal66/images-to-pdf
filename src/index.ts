import inquirer from 'inquirer'
import questions from './questions'

inquirer
   .prompt(questions)
   .then((answers) => console.log(answers))
   .catch((error) => console.log(error))
