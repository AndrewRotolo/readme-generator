const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How do you install your application?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how to use your application',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
           type: 'list',
           message: 'Which license will  your application be using?',
           name: 'license',
           choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause Revised License',
                    'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0',
                    'GNU General Public License v2.0', 'GNU Lesser Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense',], 
        },
    ])
    .then((response) => {
        console.log(response);
    });