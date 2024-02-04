<h2><a href="https://leetcode.com/problems/counter/">2620. Counter</a></h2><h3>Easy</h3><hr><div>

<p>Given an integer <code>n</code>, return a counter function. This counter function initially returns <code>n</code> and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
n = 10 
["call","call","call"]
<strong>Output:</strong> [10,11,12]
<strong>Explanation:</strong> 
counter() = 10 // The first time counter() is called, it returns <code>n</code>.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
n = -2
["call","call","call","call","call"]
<strong>Output:</strong> [-2,-1,0,1,2]
<strong>Explanation:</strong> counter() initially returns -2. Then increases after each subsequent call.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>-1000 &lt;= n &lt;= 1000</code></li>
  <li><code>0 &lt;= calls.length &lt;= 1000</code></li>
  <li><code>calls[i] === "call"</code></li>
</ul>
</div>
