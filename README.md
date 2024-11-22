# LeetCode Code Resolution Repository

Welcome to my LeetCode Code Resolution Repository! Here, you'll find a personal collection of solutions to various LeetCode problems that I've tackled. This repository serves as a reflection of my coding journey, showcasing my problem-solving skills and approaches.

Each solution is a result of careful thought and dedication, aimed at not just solving the problem but also understanding the underlying concepts. While these solutions are tailored to my style and understanding, I hope they provide insights and inspiration to others embarking on their own coding challenges.

---
## Exercise list
| Exercise                                                                                                                                                       | Difficulty |
| :---                                                                                                                                                           | :---:      |
| [1. Two Sum](https://github.com/devmatsu/leetcode/tree/main/exercises/1-two-sum)                                                                               | Easy       |
| [26. Remove Duplicates from Sorted Array](https://github.com/devmatsu/leetcode/tree/main/exercises/26-remove-duplicates-from-sorted-array)                     | Easy       |
| [41. First Missing Positive](https://github.com/devmatsu/leetcode/tree/main/exercises/41-first-missing-positive)                                               | Hard       |
| [443. String Compression](https://github.com/devmatsu/leetcode/tree/main/exercises/443-string-compression)                                                     | Medium     |
| [2620. Counter](https://github.com/devmatsu/leetcode/tree/main/exercises/2620-counter)                                                                         | Easy       |
| [2621. Sleep](https://github.com/devmatsu/leetcode/tree/main/exercises/2621-sleep)                                                                             | Easy       |
| [2622. Cache With Time Limit](https://github.com/devmatsu/leetcode/tree/main/exercises/2622-cache-with-time-limit)                                             | Medium     |
| [2623. Memoize](https://github.com/devmatsu/leetcode/tree/main/exercises/2623-memoize)                                                                         | Medium     |
| [2626. Array Reduce Transformation](https://github.com/devmatsu/leetcode/tree/main/exercises/2626-array-reduce-transformation)                                 | Easy       |
| [2627. Debounce](https://github.com/devmatsu/leetcode/tree/main/exercises/2627-debounce)                                                                       | Medium     |
| [2629. Function Composition](https://github.com/devmatsu/leetcode/tree/main/exercises/2629-function-composition)                                               | Easy       |
| [2634. Filter Elements from Array](https://github.com/devmatsu/leetcode/tree/main/exercises/2634-filter-elements-from-array)                                   | Easy       |
| [2635. Apply Transform Over Each Element in Array](https://github.com/devmatsu/leetcode/tree/main/exercises/2635-apply-transform-over-each-element-in-array)   | Easy       |
| [2637. Promise Time Limit](https://github.com/devmatsu/leetcode/tree/main/exercises/2637-promise-time-limit)                                                   | Medium     |
| [2665. Counter II](https://github.com/devmatsu/leetcode/tree/main/exercises/2665-counter-ii)                                                                   | Easy       |
| [2666. Allow One Function Call](https://github.com/devmatsu/leetcode/tree/main/exercises/2666-allow-one-function-call)                                         | Easy       |
| [2667. Create Hello World Function](https://github.com/devmatsu/leetcode/tree/main/exercises/2667-create-hello-world-function)                                 | Easy       |
| [2703. Return Length of Arguments Passed](https://github.com/devmatsu/leetcode/tree/main/exercises/2703-return-length-of-arguments-passed)                     | Easy       |
| [2704. To Be Or Not To Be](https://github.com/devmatsu/leetcode/tree/main/exercises/2704-to-be-or-not-to-be)                                                   | Easy       |
| [2715. Timeout Cancellation](https://github.com/devmatsu/leetcode/tree/main/exercises/2715-timeout-cancellation)                                               | Easy       |
| [2723. Add Two Promises](https://github.com/devmatsu/leetcode/tree/main/exercises/2723-add-two-promises)                                                       | Easy       |
| [2725. Interval Cancellation](https://github.com/devmatsu/leetcode/tree/main/exercises/2725-interval-cancellation)                                             | Easy       |


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

This command will run the test suite and provide feedback of your LeetCode solutions.

### Selecting Specific Tests
If you want to run tests for a specific LeetCode challenge, you can customize the test selection by modifying the `jest.config.js` file. To modify the test selection, open the config file and find the `testFiles` variable, this variable contains an array of exercise names that determine which tests are run. To include or exclude exercises, edit this array as needed.

For example, to exclude a specific exercise, you can comment it out by adding double slashes (//) in front of its entry in the `testFiles` array:
````js
const testFiles = [
  //'1-two-sum', // This exercise is commented out and will not run the tests.
  '26-remove-duplicates-from-sorted-array', 
  '41-first-missing-positive',
  // ...
];
````
