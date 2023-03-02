const inquirer = require('inquirer');
const fs = require('fs');

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
        var badge = '';
        switch(response.license) {
            case "Apache Licsnes 2.0":
                badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "GNU General Public License v3.0":
                badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "MIT License":
                badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "BSD 2-Clause Simplified License":
                badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
            case "BSD 3-Clause Revised License":
                badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "Boost Software License 1.0":
                badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
                break;
            case "Creative Commons Zero v1.0 Universal":
                badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
                break;
            case "Eclipse Public License 2.0":
                badge = "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
                break;
            case "GNU Affero General Public License v3.0":
                badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
                break;
            case "GNU General Public License v2.0":
                badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
                break;
            case "GNU Lesser Public License v2.1":
                badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
                break;
            case "Mozilla Public License 2.0":
                badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case "The Unlicense":
                badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
                break;
            default:
                console.log("Typo in the badge switch case. Fix it");
                break;
        }
        let readmeText = 
        `# ${response.title}

${badge}
        
## Description
${response.description}
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
        
## Installation
${response.installation}
        

## Usage
${response.usage}
        
## Credits
${response.contributing}
        
## License
Software provided under ${response.license}. Please refer to the included license file for more details.
        
## Questions
You can find my Github profile [here](https://www.github.com/${response.username}).
        
For any additional questions regarding this application, you can email me at ${response.email}`;

        fs.writeFile('./Output/README.md', readmeText, err => {
            if (err) {
                console.error(err);
            }
        })
    });