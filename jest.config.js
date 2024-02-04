const directory = '<rootDir>/exercises';
const testFile = 'index.test.js';
const testFiles = [
  '1-two-sum',
  '26-remove-duplicates-from-sorted-array',
  '41-first-missing-positive',
  '2620-counter',
  '2667-create-hello-world-function',
  '2704-to-be-or-not-to-be',
];

const testMatch = testFiles.map((file) => `${directory}/${file}/${testFile}`);

const config = {
  testMatch,
};

export default config;
