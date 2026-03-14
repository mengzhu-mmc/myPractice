# Day 4 (03-10) — 图 BFS/DFS 入门

## 算法题

### 1. [200] 岛屿数量 ⭐ Medium
- 链接：https://leetcode.cn/problems/number-of-islands/
- 思路：遍历矩阵，遇到 '1' 就 DFS/BFS 把整个岛标记为已访问，计数 +1
- 关键：四方向遍历 + visited 标记（或直接修改原数组为 '0'）

### 2. [695] 岛屿的最大面积 — Medium
- 链接：https://leetcode.cn/problems/max-area-of-island/
- 思路：和 200 类似，DFS 时累计面积，取最大值
- 关键：DFS 返回面积值

### 3. [994] 腐烂的橘子 — Medium
- 链接：https://leetcode.cn/problems/rotting-oranges/
- 思路：多源 BFS，所有腐烂橘子同时入队，逐层扩散
- 关键：记录层数就是分钟数，最后检查是否还有新鲜橘子

### 4. [542] 01 矩阵 — Medium
- 链接：https://leetcode.cn/problems/01-matrix/
- 思路：多源 BFS，所有 0 先入队，向外扩散更新距离
- 关键：和腐烂橘子同一个模板，反向思考

## 场景题
- 手写 call/apply/bind
- 手写 new 操作符

## 知识点：this 指向
- 四种绑定：默认(window)、隐式(obj.fn)、显式(call/apply/bind)、new
- 箭头函数没有自己的 this，继承外层
- 面试问法：说说 this 指向规则？箭头函数的 this 有什么不同？

## 核心套路
> **DFS**：递归/栈，适合「连通分量」类题，模板：遍历四方向 + visited 标记防重访
> **BFS**：队列，适合「最短路径/层级扩散」类题，模板：逐层出队 + 记录层数
> 矩阵题把每个格子当图节点，四方向就是边
