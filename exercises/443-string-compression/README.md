<h2><a href="https://leetcode.com/problems/string-compression/">443. String Compression</a></h2><h3>Medium</h3>
<hr>
<div>
<p>Given an array of characters <code>chars</code>, compress it using the following algorithm:</p>

<p>Begin with an empty string <code>s</code>. For each group of consecutive repeating characters in <code>chars</code>:</p>

<ul>
    <li>If the group's length is 1, append the character to <code>s</code>.</li>
    <li>Otherwise, append the character followed by the group's length.</li>
</ul>

<p>The compressed string <code>s</code> should not be returned separately, but instead be stored in the input character array <code>chars</code>. Note that group lengths greater than 9 will be split into multiple digits.</p>

<p>After you are done modifying the input array, return the new length of the array.</p>

<p>You must write an algorithm that uses only constant extra space.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> chars = ["a","a","b","b","c","c","c"]
<strong>Output:</strong> Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
<strong>Explanation:</strong> The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> chars = ["a"]
<strong>Output:</strong> Return 1, and the first character of the input array should be: ["a"]
<strong>Explanation:</strong> The group is "a", which is uncompressed as it is only a single character.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
<strong>Output:</strong> Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
<strong>Explanation:</strong> The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
    <li><code>1 &lt;= chars.length &lt;= 2000</code></li>
    <li><code>chars[i]</code> is a lowercase English letter, digit, or symbol.</li>
</ul>
</div>
