const inquirer = require('inquirer');
const fs = require('fs');


function generateLogo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter Logo:',
            validate: function (input) {
                if (input.length <= 3) {
                    return true;
                } else {
                    return '3 Letters Pls'
                }
            }
        },
        {
            type : 'list',
            name: 'color',
            message: 'choose a color',
            choices: ['red', 'green', 'blue', 'yellow', 'purple', 'brown', 'pink', 'orange'],
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'square', 'triangle'],
        },
    ]).then(answers => {
        const { text, color, shape } = answers;
        const svgString = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}" />
        <text x="50%" y="50%" fill="white" font-size="50" text-anchor="middle">${text}</text>
        </svg>
        `;
            
        const filename = 'logo.svg';
        fs.writeFileSync(filename, svgString);
        console.log(`Generated ${filename}`);
        
    });
}

generateLogo();
module.exports = { generateLogo };