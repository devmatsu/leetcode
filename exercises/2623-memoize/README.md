<h2><a href="https://leetcode.com/problems/memoize">2623. Memoize</a></h2><h3>Medium</h3><hr><div>

<p>Given a function <code>fn</code>, return a memoized version of that function.</p>

<p>A memoized function is a function that will never be called twice with the same inputs. Instead, it will return a cached value.</p>

<p>You can assume there are 3 possible input functions: <code>sum</code>, <code>fib</code>, and <code>factorial</code>.</p>

<ul>
  <li><code>sum</code> accepts two integers <code>a</code> and <code>b</code> and returns <code>a + b</code>.</li>
  <li><code>fib</code> accepts a single integer <code>n</code> and returns <code>1</code> if <code>n &lt;= 1</code> or <code>fib(n - 1) + fib(n - 2)</code> otherwise.</li>
  <li><code>factorial</code> accepts a single integer <code>n</code> and returns <code>1</code> if <code>n &lt;= 1</code> or <code>factorial(n - 1) * n</code> otherwise.</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong>
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
<strong>Output:</strong> [4,4,1,3,2]
<strong>Explanation:</strong>
<code>const sum = (a, b) =&gt; a + b;</code>
<code>const memoizedSum = memoize(sum);</code>
<code>memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.</code>
<code>memoizedSum(2, 2); // "call" - returns 4. However, sum() was not called because the same inputs were seen before.</code>
// "getCallCount" - total call count: 1
<code>memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.</code>
// "getCallCount" - total call count: 2
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong>
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
<strong>Output:</strong> [2,6,2,2,6,2]
<strong>Explanation:</strong>
<code>const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));</code>
<code>const memoFactorial = memoize(factorial);</code>
<code>memoFactorial(2); // "call" - returns 2.</code>
<code>memoFactorial(3); // "call" - returns 6.</code>
<code>memoFactorial(2); // "call" - returns 2. However, factorial was not called because 2 was seen before.</code>
// "getCallCount" - total call count: 2
<code>memoFactorial(3); // "call" - returns 6. However, factorial was not called because 3 was seen before.</code>
// "getCallCount" - total call count: 2
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong>
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
<strong>Output:</strong> [8,1]
<strong>Explanation:</strong>
<code>fib(5) = 8 // "call"</code>
// "getCallCount" - total call count: 1
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= a, b &lt;= 10<sup>5</sup></code></li>
  <li><code>1 &lt;= n &lt;= 10</code></li>
  <li><code>0 &lt;= actions.length &lt;= 10<sup>5</sup></code></li>
  <li><code>actions.length === values.length</code></li>
  <li><code>actions[i]</code> is one of "call" and "getCallCount"</li>
  <li><code>fnName</code> is one of "sum", "factorial", and "fib"</li>
</ul>
</div>
