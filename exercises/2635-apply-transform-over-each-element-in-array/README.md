<h2><a href="https://leetcode.com/problems/apply-transform-over-each-element-in-array">2635. Apply Transform Over Each Element in Array</a></h2><h3>Easy</h3><hr><div>

<p>Given an integer array <code>arr</code> and a mapping function <code>fn</code>, return a new array with a transformation applied to each element.</p>

<p>The returned array should be created such that <code>returnedArray[i] = fn(arr[i], i)</code>.</p>

<p>Please solve it without using the built-in <code>Array.map</code> method.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3], fn = function plusone(n) { return n + 1; }
<strong>Output:</strong> [2,3,4]
<strong>Explanation:</strong>
<code>const newArray = map(arr, plusone); // [2,3,4]</code>
The function increases each value in the array by one. 
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
<strong>Output:</strong> [1,3,5]
<strong>Explanation:</strong> The function increases each value by the index it resides in.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [10,20,30], fn = function constant() { return 42; }
<strong>Output:</strong> [42,42,42]
<strong>Explanation:</strong> The function always returns 42.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= arr.length &lt;= 1000</code></li>
  <li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li>
  <li><code>fn</code> returns a number.</li>
</ul>
</div>
