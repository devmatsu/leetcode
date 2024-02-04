# LeetCode Code Repository

Welcome to the LeetCode Code Repository! This collection is designed to store and organize a variety of LeetCode solutions, making it a valuable resource for coding enthusiasts. Explore a curated assortment of meticulously crafted code solutions that serve as a reference and learning aid.

---
## Exercise list
- [X] [1. Two Sum](https://github.com/devmatsu/leetcode/tree/main/exercises/1-two-sum)
- [X] [26. Remove Duplicates from Sorted Array](https://github.com/devmatsu/leetcode/tree/main/exercises/26-remove-duplicates-from-sorted-array)
- [X] [41. First Missing Positive](https://github.com/devmatsu/leetcode/tree/main/exercises/41-first-missing-positive)
- [X] [2667. Create Hello World Function](https://github.com/devmatsu/leetcode/tree/main/exercises/2667-create-hello-world-function)

---
## Getting Started

### Installing Dependencies

Before running the tests, make sure to install the project dependencies. Use the following command:

```bash
npm install
```

### Running the Project

To run the project and execute the tests, use the following command:

```bash
npm test
```

This command will run the test suite and provide feedback on the performance of your LeetCode solutions.

Selecting Specific Tests
If you want to run tests for a specific LeetCode challenge, you can customize the test selection by modifying the jest.config.js file. Locate the testMatch configuration in the file and adjust it according to your needs.

Example ```jest.config.js```:

````js
module.exports = {
  testMatch: [
    // Include the paths to the test files for the challenges you want to run
    '<rootDir>/tests/specific_challenge1.test.js',
    '<rootDir>/tests/specific_challenge2.test.js',

    // Comment or uncomment the tests based on your preferences
    // '<rootDir>/tests/specific_challenge3.test.js',
    // '<rootDir>/tests/specific_challenge4.test.js',
  ],
};
````
