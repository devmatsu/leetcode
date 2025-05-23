<h2><a href="https://leetcode.com/problems/is-object-empty/">2727. Is Object Empty</a></h2>
<h3>Easy</h3>
<hr>
<div>
<p>Given an object or an array, return if it is empty.</p>

<ul>
  <li>An empty object has no key-value pairs.</li>
  <li>An empty array has no elements.</li>
</ul>

<p>You may assume the object or array is the output of <code>JSON.parse</code>.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> obj = {"x": 5, "y": 42}
<strong>Output:</strong> false
<strong>Explanation:</strong> The object has 2 key-value pairs so it is not empty.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> obj = {}
<strong>Output:</strong> true
<strong>Explanation:</strong> The object has no key-value pairs so it is empty.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> obj = [null, false, 0]
<strong>Output:</strong> false
<strong>Explanation:</strong> The array has 3 elements so it is not empty.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10<sup>5</sup></code></li>
</ul>
</div>
