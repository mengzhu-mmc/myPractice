# Day 6 (03-12~13) — 链表 + 滑动窗口

## 算法题

### 链表部分（03-12 完成）

#### 1. [206] 反转链表 — Easy
- 链接：https://leetcode.cn/problems/reverse-linked-list/
- 思路：迭代法，三指针 prev/curr/next 逐步翻转

#### 2. [21] 合并两个有序链表 — Easy
- 链接：https://leetcode.cn/problems/merge-two-sorted-lists/
- 思路：虚拟头节点 + 双指针逐个比较

#### 3. [23] 合并 K 个有序链表 🔴 Hard
- 链接：https://leetcode.cn/problems/merge-k-sorted-lists/
- 思路：两两归并（分治），本质是 [21] 的升级版
- 关键：也可以用最小堆，但分治更直观

### 滑动窗口部分（03-13 完成）

#### 4. [3] 无重复字符的最长子串 — Medium
- 链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/
- 思路：变长滑窗，右扩左缩，Set/Map 记录窗口内字符

#### 5. [438] 找到字符串中所有字母异位词 — Medium
- 链接：https://leetcode.cn/problems/find-all-anagrams-in-a-string/
- 思路：固定窗口，窗口大小 = p.length，比较字符频率

#### 6. [567] 字符串的排列 — Medium
- 链接：https://leetcode.cn/problems/permutation-in-string/
- 思路：和 [438] 同一个模板，固定窗口判断是否是异位词

#### 7. [209] 长度最小的子数组 — Medium
- 链接：https://leetcode.cn/problems/minimum-size-subarray-sum/
- 思路：变长滑窗，窗口和 >= target 时左缩

#### 8. [76] 最小覆盖子串 🔴 Hard
- 链接：https://leetcode.cn/problems/minimum-window-substring/
- 思路：变长滑窗终极版，哈希表记录「还差多少字符」，全部覆盖时左缩找最优
- 关键：维护一个 formed 计数器，避免每次比较整个哈希表

## 场景题
- 虚拟列表实现（固定高度版）
- 并发请求控制器（Promise 调度器）
- 图片懒加载（IntersectionObserver）

## 知识点
- **跨域 & 同源策略**：CORS、JSONP、代理、postMessage
- **HTTP 缓存**：强缓存(Cache-Control) vs 协商缓存(ETag/Last-Modified)

## 核心套路
> **链表**：虚拟头节点简化边界，画图理清指针关系
> **滑动窗口**：「右扩左缩」模板 —— 外层 for 右扩，内层 while 左缩，期间更新答案
> 变长窗口看 [3] [76]，固定窗口看 [438] [567]
