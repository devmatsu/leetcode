<h2><a href="https://leetcode.com/problems/flatten-deeply-nested-array/">2625. Flatten Deeply Nested Array</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Given a&nbsp;<strong>multi-dimensional</strong>&nbsp;array <code>arr</code> and a depth <code>n</code>, return a&nbsp;<strong>flattened</strong>&nbsp;version of that array.</p>

<p>A&nbsp;<strong>multi-dimensional</strong>&nbsp;array is a recursive data structure that contains integers or other&nbsp;<strong>multi-dimensional</strong>&nbsp;arrays.</p>

<p>A&nbsp;<strong>flattened</strong>&nbsp;array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening should not exceed <code>n</code> levels.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
arr = [1,2,[3,4,[5,6]]], 
n = 1

<strong>Output:</strong> [1,2,3,4,[5,6]]

<strong>Explanation:</strong> The array has been flattened by 1 level.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
arr = [1,2,[3,4,[5,6]]], 
n = 2

<strong>Output:</strong> [1,2,3,4,5,6]

<strong>Explanation:</strong> The array has been flattened by 2 levels.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> 
arr = [1,2,[3,4,[5,6]]], 
n = 0

<strong>Output:</strong> [1,2,[3,4,[5,6]]]

<strong>Explanation:</strong> No flattening has occurred.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= count of elements in arr &lt;= 10<sup>4</sup></code></li>
  <li><code>0 &lt;= depth &lt;= 100</code></li>
  <li>The elements of <code>arr</code> are either integers or other <strong>multi-dimensional</strong> arrays</li>
  <li><strong>max nesting depth of arr is 100</strong></li>
</ul>
</div>
