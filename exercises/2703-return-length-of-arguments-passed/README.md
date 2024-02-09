<h2><a href="https://leetcode.com/problems/return-length-of-arguments-passed">2703. Return Length of Arguments Passed</a></h2><h3>Easy</h3><hr><div>

<p>Write a function <code>argumentsLength</code> that returns the count of arguments passed to it.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> args = [5]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
<code>argumentsLength(5); // 1</code>

One value was passed to the function so it should return 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> args = [{}, null, "3"]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
<code>argumentsLength({}, null, "3"); // 3</code>

Three values were passed to the function so it should return 3.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>args</code> is a valid JSON array.</li>
  <li><code>0 &lt;= args.length &lt;= 100</code></li>
</ul>
</div>
