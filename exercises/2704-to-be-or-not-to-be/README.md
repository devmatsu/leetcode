<h2><a href="https://leetcode.com/problems/to-be-or-not-to-be">2704. To Be Or Not To Be</a></h2><h3>Easy</h3><hr><div>

<p>Write a function <code>expect</code> that helps developers test their code. It should take in any value <code>val</code> and return an object with the following two functions:</p>

<ul>
  <li><code>toBe(val)</code>: Accepts another value and returns <code>true</code> if the two values are equal (===). If they are not equal, it should throw an error "Not Equal".</li>
  <li><code>notToBe(val)</code>: Accepts another value and returns <code>true</code> if the two values are not equal (!==). If they are equal, it should throw an error "Equal".</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> func = () =&gt; expect(5).toBe(5)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 === 5, so this expression returns <code>true</code>.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> func = () =&gt; expect(5).toBe(null)
<strong>Output:</strong> {"error": "Not Equal"}
<strong>Explanation:</strong> 5 !== null, so this expression throws the error "Not Equal".
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> func = () =&gt; expect(5).notToBe(null)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 !== null, so this expression returns <code>true</code>.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>val</code> can be of any data type.</li>
</ul>
</div>
