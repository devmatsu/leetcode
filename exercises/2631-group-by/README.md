<h2><a href="https://leetcode.com/problems/group-by/">2631. Group By</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Write a function that groups elements of an array based on the given function <code>fn</code>. It should return an object with keys being the output of <code>fn</code> applied to each element, and the corresponding values being arrays of elements that returned the same key from <code>fn</code>.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
array = [1,2,3,4,5]
fn = function greaterThanThree(n) { return String(n > 3); }

<strong>Output:</strong> 
{
  "true": [4,5],
  "false": [1,2,3]
}
<strong>Explanation:</strong> Elements greater than 3 are grouped into key "true" and the rest into key "false".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
array = [1,2,3,4,5]
fn = function remainder(n) { return String(n % 2); }

<strong>Output:</strong> 
{
  "0": [2,4],
  "1": [1,3,5]
}
<strong>Explanation:</strong> Even numbers (remainder 0) and odd numbers (remainder 1) are grouped separately.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> 
array = [{} , {} , {}]
fn = function alwaysTrue() { return "group"; }

<strong>Output:</strong> 
{
  "group": [{},{},{}]
}
<strong>Explanation:</strong> All elements are grouped under the same key "group".
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= array.length &lt;= 1000</code></li>
  <li><code>fn</code> returns a string or a number</li>
</ul>
</div>
