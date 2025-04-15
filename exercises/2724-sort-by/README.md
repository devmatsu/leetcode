<h2><a href="https://leetcode.com/problems/sort-by/">2724. Sort By</a></h2>
<h3>Easy</h3>
<hr>
<div>
<p>Given an array of objects <code>arr</code> and a function <code>fn</code>, return a sorted array sorted in ascending order by the result of calling <code>fn</code> on each element of <code>arr</code>. </p>

<p>Assume that <code>fn</code> will return a value that can be compared with the <code>&lt;</code>, <code>&gt;</code>, and <code>===</code> operators.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
arr = [{"x": 3, "y": 4}, {"x": 5, "y": 2}]
fn = (item) => item.x

<strong>Output:</strong> [{"x": 3, "y": 4}, {"x": 5, "y": 2}]
<strong>Explanation:</strong> The array is sorted based on the "x" value of each object.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
arr = [{"x": 3, "y": 4}, {"x": 5, "y": 2}]
fn = (item) => item.y

<strong>Output:</strong> [{"x": 5, "y": 2}, {"x": 3, "y": 4}]
<strong>Explanation:</strong> The array is sorted based on the "y" value of each object.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> 
arr = [null, {"x": 5, "y": 2}, {}]
fn = () => 42

<strong>Output:</strong> [null, {"x": 5, "y": 2}, {}]
<strong>Explanation:</strong> All elements are considered equal since fn returns the same value for all, so the array remains in its original order.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>arr.length == n</code></li>
  <li><code>0 &lt;= n &lt;= 1000</code></li>
</ul>
</div>
