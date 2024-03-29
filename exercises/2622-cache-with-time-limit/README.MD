<h2><a href="https://leetcode.com/problems/cache-with-time-limit">2622. Cache With Time Limit</a></h2><h3>Medium</h3><hr><div>

<p>Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.</p>

<p>The class has three public methods:</p>

<ul>
  <li><code>set(key, value, duration)</code>: accepts an integer <code>key</code>, an integer <code>value</code>, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return <code>true</code> if the same unexpired key already exists and <code>false</code> otherwise. Both the value and duration should be overwritten if the key already exists.</li>
  <li><code>get(key)</code>: if an unexpired key exists, it should return the associated value. Otherwise, it should return <code>-1</code>.</li>
  <li><code>count()</code>: returns the count of unexpired keys.</li>
</ul>

<hr>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]
<strong>Output:</strong> [null, false, 42, 1, -1]
<strong>Explanation:</strong>
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) is called but -1 is returned because the cache is empty.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]
<strong>Output:</strong> [null, false, true, 50, 50, -1, 0]
<strong>Explanation:</strong>
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
At t=50, get(1) is called which returned 50.
At t=120, get(1) is called which returned 50.
At t=140, key=1 expires.
At t=200, get(1) is called but the cache is empty so -1 is returned.
At t=250, count() returns 0 because the cache is empty.
</pre>

<hr>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>0 &lt;= key, value &lt;= 10<sup>9</sup></code></li>
  <li><code>0 &lt;= duration &lt;= 1000</code></li>
  <li><code>1 &lt;= actions.length &lt;= 100</code></li>
  <li><code>actions.length === values.length</code></li>
  <li><code>actions.length === timeDelays.length</code></li>
  <li><code>0 &lt;= timeDelays[i] &lt;= 1450</code></li>
  <li><code>actions[i]</code> is one of <code>"TimeLimitedCache"</code>, <code>"set"</code>, <code>"get"</code>, and <code>"count"</code></li>
  <li>First action is always <code>"TimeLimitedCache"</code> and must be executed immediately, with a 0-millisecond delay</li>
</ul>
</div>
