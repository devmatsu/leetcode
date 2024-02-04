<h2><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array">26. Remove Duplicates from Sorted Array</a></h2><h3>Easy</h3><hr><div>

<p>Given an integer array <code>nums</code> sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in <code>nums</code>.</p>

<p><strong>Hint:</strong> Consider the number of unique elements of <code>nums</code> to be <em>k</em>, to get accepted, you need to do the following things:</p>

<ul>
  <li>Change the array <code>nums</code> such that the first <em>k</em> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
  <li>Return <em>k</em>.</li>
</ul>

<p><strong>Custom Judge:</strong></p>

<pre>
<code>int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</code></pre>

<p>If all assertions pass, then your solution will be accepted.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Your function should return <em>k = 2</em>, with the first two elements of <code>nums</code> being 1 and 2 respectively.
It does not matter what you leave beyond the returned <em>k</em> (hence they are underscores).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Your function should return <em>k = 5</em>, with the first five elements of <code>nums</code> being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned <em>k</em> (hence they are underscores).
</pre>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li>
  <li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
  <li><code>nums</code> is sorted in non-decreasing order.</li>
</ul>
</div>
