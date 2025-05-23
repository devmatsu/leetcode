<h2><a href="https://leetcode.com/problems/join-two-arrays-by-id/">2722. Join Two Arrays by ID</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Given two arrays <code>arr1</code> and <code>arr2</code>, return a new&nbsp;<code>joinedArray</code>. All the objects in each&nbsp;of the two input arrays will contain an&nbsp;<code>id</code>&nbsp;field that has an integer value.</p>

<p><code>joinedArray</code>&nbsp;is an array formed by merging&nbsp;<code>arr1</code> and <code>arr2</code> based on their <code>id</code> key. The length of <code>joinedArray</code> should be the length of unique values of <code>id</code>. The returned array should be sorted in <strong>ascending</strong> order based on the <code>id</code> key.</p>

<p>If a given <code>id</code> exists in one array but not the other, the single object with that <code>id</code> should be included in the result array without modification.</p>

<p>If two objects share an <code>id</code>, their properties should be merged into a single object:</p>

<ul>
  <li>If a key only exists in one object, that single key-value pair should be included in the object.</li>
  <li>If a key is included in both objects, the value in the object from <code>arr2</code> should override the value from <code>arr1</code>.</li>
</ul>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong>
arr1 = [
  {"id": 1, "x": 1},
  {"id": 2, "x": 9}
], 
arr2 = [
  {"id": 3, "x": 5}
]
<strong>Output:</strong>
[
  {"id": 1, "x": 1},
  {"id": 2, "x": 9},
  {"id": 3, "x": 5}
]
<strong>Explanation:</strong> There are no duplicate ids so arr1 is simply concatenated with arr2.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong>
arr1 = [
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
]
<strong>Output:</strong>
[
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
]
<strong>Explanation:</strong> The two objects with id=1 and id=3 are included in the result array without modification. The two objects with id=2 are merged. The keys from arr2 override the values from arr1.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong>
arr1 = [
  {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}
],
arr2 = [
  {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
<strong>Output:</strong>
[
  {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
<strong>Explanation:</strong> For the keys "b" and "v", the values from arr2 are used. Since "y" only exists in arr1, it is preserved.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>arr1</code> and <code>arr2</code> are valid JSON arrays</li>
  <li>Each object in <code>arr1</code> and <code>arr2</code> has a unique integer <code>id</code> key</li>
  <li><code>2 &lt;= JSON.stringify(arr1).length &lt;= 10<sup>6</sup></code></li>
  <li><code>2 &lt;= JSON.stringify(arr2).length &lt;= 10<sup>6</sup></code></li>
</ul>
</div>
