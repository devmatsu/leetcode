<h2><a href="https://leetcode.com/problems/filter-elements-from-array">2634. Filter Elements from Array</a></h2><h3>Easy</h3><hr><div>

<p>Given an integer array <code>arr</code> and a filtering function <code>fn</code>, return a filtered array <code>filteredArr</code>.</p>

<p>The <code>fn</code> function takes one or two arguments:</p>

<ul>
  <li><code>arr[i]</code> - number from the <code>arr</code></li>
  <li><code>i</code> - index of <code>arr[i]</code></li>
</ul>

<p><code>filteredArr</code> should only contain the elements from the <code>arr</code> for which the expression <code>fn(arr[i], i)</code> evaluates to a truthy value. A truthy value is a value where <code>Boolean(value)</code> returns true.</p>

<p>Please solve it without using the built-in <code>Array.filter</code> method.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
<strong>Output:</strong> [20,30]
<strong>Explanation:</strong>
<code>const newArray = filter(arr, fn); // [20, 30]</code>
The function filters out values that are not greater than 10.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
<strong>Output:</strong> [1]
<strong>Explanation:</strong>
<code>fn</code> can also accept the index of each element.
In this case, the function removes elements not at index 0.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1; }
<strong>Output:</strong> [-2,0,1,2]
<strong>Explanation:</strong>
Falsey values such as 0 should be filtered out.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= arr.length &lt;= 1000</code></li>
  <li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li>
</ul>
</div>
