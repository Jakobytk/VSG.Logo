const fs = require('fs');
const { generateLogo } = require('../index.js'); 

// Mocking user input
jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValue({
        text: 'ABC',
        color: 'blue',
        shape: 'circle',
    }),
}));

// Mocking file system operations
jest.mock('fs');

describe('Logo Generator', () => {
    it('should generate an SVG logo with the specified text, color, and shape', async () => {
        await generateLogo();
        expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expect.any(String));
    });

});