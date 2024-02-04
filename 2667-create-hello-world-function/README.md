<h2><a href="https://leetcode.com/problems/create-hello-world-function/">2667. Create Hello World Function</a></h2><h3>Solved</h3><h3>Easy</h3><hr><div>

<p>Write a function <code>createHelloWorld</code>. It should return a new function that always returns "Hello World".</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> args = []
<strong>Output:</strong> "Hello World"
<strong>Explanation:</strong>
<code>const f = createHelloWorld();
f(); // "Hello World"
</code></pre>

<p>The function returned by <code>createHelloWorld</code> should always return "Hello World".</p>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> args = [{},null,42]
<strong>Output:</strong> "Hello World"
<strong>Explanation:</strong>
<code>const f = createHelloWorld();
f({}, null, 42); // "Hello World"
</code></pre>

<p>Any arguments could be passed to the function but it should still always return "Hello World".</p>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= args.length &lt;= 10</code></li>
</ul>
</div>
