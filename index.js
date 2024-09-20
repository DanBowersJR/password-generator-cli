#!/usr/bin/env node

// Default settings
let length = 8;

// Function to display the help menu
const showHelp = () => {
    console.log(`
    Usage:
      node index.js [options]

    Options:
      --help, -h           Show help menu

    Example:
      node index.js        # Generate a basic password (no features)
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
        default:
            console.error(`Error: Unknown option '${arg}'`);
            showHelp();
    }
}

console.log('Password Generator is running with default settings (length = 8)');
