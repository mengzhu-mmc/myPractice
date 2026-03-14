# Day 1 (03-07) — 单调栈

## 算法题

### 1. [739] 每日温度 ⭐ Medium
- 链接：https://leetcode.cn/problems/daily-temperatures/
- 思路：维护一个单调递减栈（存索引），遇到比栈顶大的元素时弹栈，计算天数差
- 关键：栈里存的是**索引**不是值

### 2. [496] 下一个更大元素 I — Easy
- 链接：https://leetcode.cn/problems/next-greater-element-i/
- 思路：对 nums2 做单调栈，用哈希表记录每个元素的下一个更大元素，再查询 nums1

### 3. [503] 下一个更大元素 II — Medium
- 链接：https://leetcode.cn/problems/next-greater-element-ii/
- 思路：循环数组 → 遍历 2 倍长度，索引取模 `i % n`

### 4. [42] 接雨水 🔴 Hard
- 链接：https://leetcode.cn/problems/trapping-rain-water/
- 思路：单调栈法 —— 维护递减栈，遇到更高柱子时弹栈计算积水；也可以用双指针法
- 关键：每次弹栈时，积水量 = `min(左墙, 右墙) - 当前高度) * 宽度`

## 场景题
- 手写 debounce + throttle

## 知识点：事件循环 Event Loop
- JS 单线程，通过事件循环处理异步
- 微任务（Promise.then）优先于宏任务（setTimeout）
- 面试问法：说说事件循环？Promise 和 setTimeout 谁先执行？

## 核心套路
> **单调栈模板**：用栈维护一个单调递减序列，遇到更大元素时弹栈处理。栈里存索引，不存值。
