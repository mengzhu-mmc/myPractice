# Day 2 (03-08) — 二分查找

## 算法题

### 1. [704] 二分查找 — Easy
- 链接：https://leetcode.cn/problems/binary-search/
- 思路：标准二分模板，左闭右闭 `[left, right]`

### 2. [35] 搜索插入位置 — Easy
- 链接：https://leetcode.cn/problems/search-insert-position/
- 思路：标准二分，找不到时 left 就是插入位置

### 3. [34] 在排序数组中查找元素的第一个和最后一个位置 ⭐ Medium
- 链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
- 思路：两次二分，分别找左边界和右边界
- 关键：找左边界时 `right = mid`，找右边界时 `left = mid + 1`

### 4. [33] 搜索旋转排序数组 ⭐ Medium
- 链接：https://leetcode.cn/problems/search-in-rotated-sorted-array/
- 思路：先判断 mid 在哪段有序区间，再决定收缩方向
- 关键：`nums[left] <= nums[mid]` 说明左半段有序

## 场景题
- 手写 Promise（基础版：resolve/reject/then）

## 知识点：原型链 & 继承
- `__proto__` vs `prototype` 的区别
- 原型链查找机制：本对象 → `__proto__` → 原型对象 → ... → Object.prototype → null
- 面试问法：new 做了什么？手写 new？instanceof 原理？

## 核心套路
> **二分查找模板**：边界处理是核心。左闭右闭 vs 左闭右开，`left < right` vs `left <= right`。旋转数组是经典变体，面试超高频。
