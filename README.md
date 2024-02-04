# LeetCode Code Resolution Repository

Welcome to my LeetCode Code Resolution Repository! Here, you'll find a personal collection of solutions to various LeetCode problems that I've tackled. This repository serves as a reflection of my coding journey, showcasing my problem-solving skills and approaches.

Each solution is a result of careful thought and dedication, aimed at not just solving the problem but also understanding the underlying concepts. While these solutions are tailored to my style and understanding, I hope they provide insights and inspiration to others embarking on their own coding challenges.

---
## Exercise list
| Exercise                                                                                                                                   | Difficulty |
| :---                                                                                                                                       | :---: |
| [1. Two Sum](https://github.com/devmatsu/leetcode/tree/main/exercises/1-two-sum)                                                           | Easy |
| [26. Remove Duplicates from Sorted Array](https://github.com/devmatsu/leetcode/tree/main/exercises/26-remove-duplicates-from-sorted-array) | Easy |
| [41. First Missing Positive](https://github.com/devmatsu/leetcode/tree/main/exercises/41-first-missing-positive)                           | Hard |
| [2620. Counter](https://github.com/devmatsu/leetcode/tree/main/exercises/2620-counter)                                                     | Easy |
| [2667. Create Hello World Function](https://github.com/devmatsu/leetcode/tree/main/exercises/2667-create-hello-world-function)             | Easy |
| [2704. To Be Or Not To Be](https://github.com/devmatsu/leetcode/tree/main/exercises/2704-to-be-or-not-to-be)                               | Easy |


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
    '<rootDir>/exercises/1-exercise-name/index.test.js',
    '<rootDir>/exercises/2-exercise-name/index.test.js',

    // Comment or uncomment the tests based on your preferences
    // '<rootDir>/exercises/3-exercise-name/index.test.js',
    // '<rootDir>/exercises/4-exercise-name/index.test.js',
  ],
};
````
