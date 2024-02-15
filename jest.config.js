const directory = '<rootDir>/exercises';
const testFile = 'index.test.js';
const testFiles = [
  '1-two-sum',
  '26-remove-duplicates-from-sorted-array',
  '41-first-missing-positive',
  '2620-counter',
  '2621-sleep',
  '2623-memoize',
  '2626-array-reduce-transformation',
  '2629-function-composition',
  '2634-filter-elements-from-array',
  '2635-apply-transform-over-each-element-in-array',
  '2665-counter-ii',
  '2666-allow-one-function-call',
  '2667-create-hello-world-function',
  '2703-return-length-of-arguments-passed',
  '2704-to-be-or-not-to-be',
  '2715-timeout-cancellation',
  '2723-add-two-promises',
];

const testMatch = testFiles.map((file) => `${directory}/${file}/${testFile}`);

const config = {
  testMatch,
  verbose: true,
};

export default config;
