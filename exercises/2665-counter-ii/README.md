<h2><a href="https://leetcode.com/problems/counter-ii">2665. Counter II</a></h2><h3>Easy</h3><hr><div>

<p>Write a function <code>createCounter</code>. It should accept an initial integer <code>init</code>. It should return an object with three functions:</p>

<ul>
  <li><code>increment()</code>: Increases the current value by 1 and then returns it.</li>
  <li><code>decrement()</code>: Reduces the current value by 1 and then returns it.</li>
  <li><code>reset()</code>: Sets the current value to <code>init</code> and then returns it.</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> init = 5, calls = ["increment","reset","decrement"]
<strong>Output:</strong> [6,5,4]
<strong>Explanation:</strong>
<code>const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</code></pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> init = 0, calls = ["increment","increment","decrement","reset","reset"]
<strong>Output:</strong> [1,2,1,0,0]
<strong>Explanation:</strong>
<code>const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</code></pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>init</code> is an integer.</li>
  <li><code>calls</code> is an array of strings that can contain "increment", "decrement", or "reset".</li>
</ul>
</div>
