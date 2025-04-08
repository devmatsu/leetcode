<h2><a href="https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/">2721. Execute Asynchronous Functions in Parallel</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Given an array of asynchronous functions <code>functions</code>, return a new promise <code>promise</code>. Each function in the array accepts no arguments and returns a promise. All the functions should be executed in parallel.</p>

<p><code>promise</code> resolves when all the promises returned from functions have resolved, and returns an array of all the resolved values. If any promise rejects, <code>promise</code> should reject with the reason of the first promise that rejects.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]

<strong>Output:</strong> {"rejected":"Error"}
<strong>Explanation:</strong> The returned promise rejects with "Error" since the second promise rejected first.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
  () => new Promise(resolve => setTimeout(() => resolve(2), 100))
]

<strong>Output:</strong> {"resolved":[1,2]}
<strong>Explanation:</strong> All promises resolved successfully, so the output is [1, 2].
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>functions.length == n</code></li>
  <li><code>0 &lt;= n &lt;= 10</code></li>
</ul
