<h2><a href="https://leetcode.com/problems/01-matrix/">542. 01 Matrix</a></h2>
<h3>Medium</h3>
<hr>
<div>
<p>Given an <code>m x n</code> binary matrix <code>mat</code>, return the distance of the nearest <code>0</code> for each cell.</p>

<p>The distance between two adjacent cells is <code>1</code>.</p>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>m == mat.length</code></li>
  <li><code>n == mat[i].length</code></li>
  <li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
  <li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
  <li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
  <li>There is at least one <code>0</code> in <code>mat</code>.</li>
</ul>
</div>
