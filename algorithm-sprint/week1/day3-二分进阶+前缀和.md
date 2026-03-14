# Day 3 (03-09) — 二分进阶 + 前缀和

## 算法题

### 1. [153] 寻找旋转排序数组中的最小值 — Medium
- 链接：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
- 思路：二分，比较 `nums[mid]` 和 `nums[right]`，大于则最小值在右半段
- 关键：和右边界比较，不是和左边界

### 2. [162] 寻找峰值 — Medium
- 链接：https://leetcode.cn/problems/find-peak-element/
- 思路：二分，如果 `nums[mid] < nums[mid+1]` 说明峰值在右边
- 关键：不需要数组有序，只要能判断「哪边更可能有峰值」

### 3. [4] 寻找两个正序数组的中位数 🔴 Hard
- 链接：https://leetcode.cn/problems/median-of-two-sorted-arrays/
- 思路：在较短数组上二分，找到一个切分点使左右两部分平衡
- 关键：`j = (m + n + 1) / 2 - i`，保证左右数量平衡

### 4. [560] 和为 K 的子数组 — Medium
- 链接：https://leetcode.cn/problems/subarray-sum-equals-k/
- 思路：前缀和 + 哈希表，`prefixSum[j] - prefixSum[i] = k`
- 关键：把「区间求和」转化为「两数之差」

### 5. [238] 除自身以外数组的乘积 — Medium
- 链接：https://leetcode.cn/problems/product-of-array-except-self/
- 思路：左右前缀积，先算左边累积，再从右往左乘
- 关键：不能用除法，O(n) 时间 O(1) 额外空间

## 场景题
- 手写深拷贝（递归 + 循环引用处理）
- 手写 EventEmitter（on/emit/off/once）

## 知识点：原型链 Prototype
- 对象通过 `__proto__` 链接到原型，形成查找链
- 面试问法：说说原型链？instanceof 原理？如何实现继承？

## 核心套路
> **二分变体**：核心不是「有序数组」，而是「能把搜索空间一分为二」。关键判断：什么条件能让你安全丢掉一半？
> **前缀和**：`prefixSum[j] - prefixSum[i] = target`，配合哈希表做到 O(n)。
