<h2><a href="https://leetcode.com/problems/chunk-array/">2677. Chunk Array</a></h2>
<h3>Easy</h3>
<hr>
<div>
<p>Given an array <code>arr</code> and a size <code>size</code>, return a chunked array. A chunked array contains the original elements of <code>arr</code>, but divided into groups of <code>size</code>. The length of the last group may be less than <code>size</code> if the number of elements in <code>arr</code> is not divisible by <code>size</code>.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3,4,5], size = 1
<strong>Output:</strong> [[1],[2],[3],[4],[5]]
<strong>Explanation:</strong> The array is split into subarrays each with 1 element.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,9,6,3,2], size = 3
<strong>Output:</strong> [[1,9,6],[3,2]]
<strong>Explanation:</strong> The array is split into subarrays of size 3. The last group has only 2 elements.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [8,5,3,2,6], size = 6
<strong>Output:</strong> [[8,5,3,2,6]]
<strong>Explanation:</strong> Since size is greater than the array length, all elements are placed in a single group.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> arr = [], size = 1
<strong>Output:</strong> []
<strong>Explanation:</strong> An empty array returns an empty array.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>arr.length == n</code></li>
  <li><code>0 &lt;= n &lt;= 100</code></li>
  <li><code>0 &lt;= arr[i] &lt;= 1000</code></li>
  <li><code>1 &lt;= size &lt;= n + 1</code></li>
</ul>
</div>
