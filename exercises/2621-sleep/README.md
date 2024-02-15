<h2><a href="https://leetcode.com/problems/sleep">2621. Sleep</a></h2><h3>Easy</h3><hr><div>

<p>Given a positive integer <code>millis</code>, write an asynchronous function that sleeps for <code>millis</code> milliseconds. It can resolve any value.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> millis = 100
<strong>Output:</strong> 100
<strong>Explanation:</strong> It should return a promise that resolves after 100ms.
<code>let t = Date.now();
sleep(100).then(() =&gt; {
  console.log(Date.now() - t); // 100
});
</code></pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> millis = 200
<strong>Output:</strong> 200
<strong>Explanation:</strong> It should return a promise that resolves after 200ms.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= millis &lt;= 1000</code></li>
</ul>
</div>
