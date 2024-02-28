<h2><a href="https://leetcode.com/problems/find-k-closest-elements/">658. Find K Closest Elements</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.</p>

<p>An integer a is closer to x than an integer b if:</p>

<ul>
<li>|a - x| &lt; |b - x|, or</li>
<li>|a - x| == |b - x| and a &lt; b</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3
<strong>Output:</strong> [1,2,3,4]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = -1
<strong>Output:</strong> [1,2,3,4]
</pre>

<p><strong>Constraints:</strong></p>

<ul>
<li>1 <= k <= arr.length</li>
<li>1 <= arr.length <= 10<sup>4</sup></li>
<li>arr is sorted in ascending order.</li>
<li>-10<sup>4</sup> <= arr[i], x <= 10<sup>4</sup></li>
</ul>
</div>
