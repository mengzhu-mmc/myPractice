# Day 5 (03-11) — 树进阶

## 算法题

### 1. [236] 二叉树的最近公共祖先 — Medium
- 链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
- 思路：后序遍历，自底向上。如果左右子树各找到一个目标，当前节点就是 LCA
- 关键：递归返回值的含义 —— 找到了就返回节点，没找到返回 null

### 2. [105] 从前序与中序遍历序列构造二叉树 — Medium
- 链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
- 思路：前序第一个是根，在中序中找到根的位置，划分左右子树，递归构造
- 关键：用哈希表存中序的 val→index 映射，O(1) 查找

### 3. [124] 二叉树中的最大路径和 🔴 Hard
- 链接：https://leetcode.cn/problems/binary-tree-maximum-path-sum/
- 思路：后序遍历，每个节点计算「经过自己的最大路径和」= 左 + 右 + 自身
- 关键：递归返回的是「单边最大贡献值」= max(0, 自身 + max(左, 右))，全局维护最大值

### 4. [297] 二叉树的序列化与反序列化 🔴 Hard
- 链接：https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
- 思路：BFS 或前序 DFS，null 节点用特殊标记（如 "null"）
- 关键：反序列化时用队列/索引按顺序重建

## 场景题
- 手写 LRU Cache（Map 实现）

## 知识点：浏览器渲染流程
- HTML→DOM，CSS→CSSOM，合并→渲染树→布局→绘制→合成
- 重排(Reflow) 代价最大，重绘(Repaint) 次之，合成层(Composite) 最轻
- 面试问法：输入 URL 到页面显示发生了什么？如何减少重排？

## 核心套路
> **树 = 遍历 + 递归**。遍历顺序决定解题方向：
> - 前序：根→左→右，适合构造树
> - 中序：左→根→右，适合 BST
> - 后序：左→右→根，适合自底向上计算（LCA、最大路径和）
