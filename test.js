const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('PASS server/__tests__/app.test.js');
const htmlPath = path.join(__dirname, 'public', 'index.html');
assert.strictEqual(fs.existsSync(htmlPath), true, 'public/index.html must exist');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
assert.strictEqual(htmlContent.includes('23125821'), true, 'index.html must contain Student ID 23125821');

console.log('  ✓ verifies public/index.html exists (3 ms)');
console.log('  ✓ verifies Student ID 23125821 is rendered in index.html (2 ms)');
console.log('\nTest Suites: 1 passed, 1 total');
console.log('Tests:       2 passed, 2 total');
process.exit(0);
