#!/usr/bin/env node

// Default settings
let length = 8;
let useNumbers = false;
let useUppercase = false;
let useSymbols = false;

// Function to display help menu
const showHelp = () => {
    console.log(`
    Usage:
      node index.js [options]

    Options:
      --help, -h           Show help menu
      --numbers, -n        Include numbers in the password
      --uppercase, -u      Include uppercase letters in the password
      --symbols, -s        Include symbols in the password

    Example:
      node index.js --numbers --uppercase --symbols   # Generate a password with numbers, uppercase letters, and symbols
    `);
    process.exit(0);
};

// Parse command-line arguments
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
        case '--help':
        case '-h':
            showHelp();
            break;
        case '--numbers':
        case '-n':
            useNumbers = true;
            break;
        case '--uppercase':
        case '-u':
            useUppercase = true;
            break;
        case '--symbols':
        case '-s':
            useSymbols = true;
            break;
        default:
            console.error(`Error: Unknown option '${arg}'`);
            showHelp();
    }
}

// Function to generate a password
const generatePassword = (length, useNumbers, useUppercase, useSymbols) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = lowercase;

    if (useNumbers) {
        characterPool += numbers;
    }

    if (useUppercase) {
        characterPool += uppercase;
    }

    if (useSymbols) {
        characterPool += symbols;
    }

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
};

// Generate and display password
const password = generatePassword(length, useNumbers, useUppercase, useSymbols);
console.log(`Generated Password: ${password}`);
