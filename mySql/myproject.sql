/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : localhost:3306
 Source Schema         : myproject

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 05/07/2021 08:05:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123', '2021-06-28 14:20:21', '2021-06-28 14:20:21');

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (1, '6b7fb18f22f725e5d62839eec823ecc8', 'image/jpeg', 3007317, 3, '2021-06-07 11:13:31', '2021-06-07 11:13:31');
INSERT INTO `avatar` VALUES (2, '939857dd4f8c9214d26a95c3de6990ca', 'image/jpeg', 3007317, 3, '2021-06-07 11:13:44', '2021-06-07 11:13:44');
INSERT INTO `avatar` VALUES (3, '56ee21fefbad89b79a20095a4d25902d', 'image/jpeg', 3007317, 3, '2021-06-07 11:38:09', '2021-06-07 11:38:09');
INSERT INTO `avatar` VALUES (4, 'cd4c2d705ae0bac51b0f044d41ea9051', 'image/jpeg', 3007317, 3, '2021-06-07 11:38:57', '2021-06-07 11:38:57');
INSERT INTO `avatar` VALUES (5, '64b0f7201110ce5a5ad1352efb477481', 'image/jpeg', 3007317, 3, '2021-06-07 11:39:07', '2021-06-07 11:39:07');
INSERT INTO `avatar` VALUES (6, 'd864a1905b5e688437b59b3e6fb9e907', 'image/jpeg', 7323252, 1, '2021-06-07 17:00:56', '2021-06-07 17:00:56');
INSERT INTO `avatar` VALUES (7, '0d27ea8b9c47b6aaabcbe63dd4877245', 'image/jpeg', 447496, 1, '2021-06-07 17:16:59', '2021-06-07 17:16:59');
INSERT INTO `avatar` VALUES (8, '14fcadb33df0b035d381114d39f4e8d2', 'image/jpeg', 921583, 1, '2021-06-07 17:17:58', '2021-06-07 17:17:58');
INSERT INTO `avatar` VALUES (9, '551df629612be2b9b44631943001a9e6', 'image/jpeg', 885361, 1, '2021-06-07 17:18:26', '2021-06-07 17:18:26');
INSERT INTO `avatar` VALUES (10, '4113ddccc4ccdfca1610b4cffbc4cb61', 'image/jpeg', 900411, 1, '2021-06-07 19:18:18', '2021-06-07 19:18:18');
INSERT INTO `avatar` VALUES (11, '26dabef421e826dda67a20b00af0f9e4', 'image/jpeg', 447496, 1, '2021-06-07 19:18:30', '2021-06-07 19:18:30');
INSERT INTO `avatar` VALUES (12, 'f0b23030286e5754d9dea998488e5d05', 'image/jpeg', 608520, 1, '2021-06-08 09:01:32', '2021-06-08 09:01:32');
INSERT INTO `avatar` VALUES (13, '41f1461297ac30776f2cbf4fa085a2b8', 'image/jpeg', 888137, 1, '2021-06-08 09:01:45', '2021-06-08 09:01:45');
INSERT INTO `avatar` VALUES (14, 'a85347c20b02f1e8640e7fb80cd2ffd9', 'image/jpeg', 608520, 1, '2021-06-08 09:02:37', '2021-06-08 09:02:37');
INSERT INTO `avatar` VALUES (15, '9889b8517ec7e57e79ad4d363c1f123b', 'image/jpeg', 1041096, 1, '2021-06-08 09:16:34', '2021-06-08 09:16:34');
INSERT INTO `avatar` VALUES (16, 'c581d30a918e50c647a12910390ebde9', 'image/jpeg', 1041096, 1, '2021-06-08 17:19:53', '2021-06-08 17:19:53');
INSERT INTO `avatar` VALUES (17, 'e793c2c6293ebbc6a044e7e8ba889cbe', 'image/jpeg', 1896795, 1, '2021-06-08 17:20:03', '2021-06-08 17:20:03');
INSERT INTO `avatar` VALUES (18, '1bfbfb2fd57449bfb11bb726810ba31a', 'image/jpeg', 447496, 2, '2021-06-11 21:07:22', '2021-06-11 21:07:22');
INSERT INTO `avatar` VALUES (21, '1c01020cfac68b028e8cf7757f348753', 'image/jpeg', 600603, 7, '2021-06-28 08:21:10', '2021-06-28 08:21:10');
INSERT INTO `avatar` VALUES (22, '7adfc6c7865769d45279f55235b71612', 'image/jpeg', 619938, 1, '2021-06-28 21:21:23', '2021-06-28 21:21:23');
INSERT INTO `avatar` VALUES (24, '4e1aa577a54c7a5c30b5c9bdf95de4ea', 'image/jpeg', 1810650, 9, '2021-07-01 16:45:06', '2021-07-01 16:45:06');
INSERT INTO `avatar` VALUES (26, '6a8d15997691f2dbc3039f644b7c378e', 'image/jpeg', 1300824, 12, '2021-07-02 16:29:14', '2021-07-02 16:29:14');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `moment_id` int(11) NOT NULL,
  `comment_id` int(11) NULL DEFAULT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, '已有的事，后必再有。已行的事，后必再行。', 3, 2, NULL, '2021-06-06 16:55:40', '2021-06-06 16:55:40');
INSERT INTO `comment` VALUES (3, '不要生气要争气,不要看破要突破,不要嫉妒要欣赏,不要拖延要积极,不要心动要行动。', 3, 2, 1, '2021-06-06 17:12:47', '2021-06-06 17:12:47');
INSERT INTO `comment` VALUES (4, '6666666', 2, 2, 3, '2021-06-14 15:47:02', '2021-06-14 15:47:02');
INSERT INTO `comment` VALUES (5, '所地浩', 2, 6, NULL, '2021-06-14 15:48:43', '2021-06-14 15:48:43');
INSERT INTO `comment` VALUES (6, 'good', 2, 12, NULL, '2021-06-14 15:49:05', '2021-06-14 15:49:05');
INSERT INTO `comment` VALUES (7, '人生苦短，想一直懒', 1, 3, NULL, '2021-06-14 16:17:23', '2021-06-14 16:17:23');
INSERT INTO `comment` VALUES (8, '12345', 1, 15, NULL, '2021-06-14 16:32:58', '2021-06-14 16:32:58');
INSERT INTO `comment` VALUES (10, '678910', 3, 15, 8, '2021-06-14 16:49:43', '2021-06-14 16:49:43');
INSERT INTO `comment` VALUES (11, '锁滴堆', 2, 6, 5, '2021-06-15 11:54:51', '2021-06-15 11:54:51');
INSERT INTO `comment` VALUES (18, '456', 12, 14, NULL, '2021-07-02 16:27:05', '2021-07-02 16:27:05');
INSERT INTO `comment` VALUES (19, '789789', 12, 14, 18, '2021-07-02 16:27:17', '2021-07-02 16:27:17');

-- ----------------------------
-- Table structure for courseware
-- ----------------------------
DROP TABLE IF EXISTS `courseware`;
CREATE TABLE `courseware`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` int(11) NULL DEFAULT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `originalname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courseware
-- ----------------------------
INSERT INTO `courseware` VALUES (4, '5b4b8597bcaba7bbf9fc4fde9393d6f0', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 148390, '2021-06-30 14:36:56', '2021-06-30 14:36:56', '活泼单页01.docx');
INSERT INTO `courseware` VALUES (5, '1a85c78f447325181260524bf0c351d6', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 270755, '2021-06-30 14:43:54', '2021-06-30 14:43:54', '活泼单页07.docx');
INSERT INTO `courseware` VALUES (6, '10ad0b77dccad037cef890ea262b7811', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 479641, '2021-07-01 08:09:46', '2021-07-01 08:09:46', '水墨古风四页01.docx');
INSERT INTO `courseware` VALUES (7, 'e26e112b30be16835733412c7b54f21e', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 405499, '2021-07-01 13:47:22', '2021-07-01 13:47:22', '简洁经典四页01.docx');
INSERT INTO `courseware` VALUES (12, '8414a6bec69e632c1b49ab23c653e207', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 162227, '2021-07-01 20:39:42', '2021-07-01 20:39:42', '稳重单页10.docx');
INSERT INTO `courseware` VALUES (14, '8cada586bc47cf6050494369f3854756', 'text/plain', 11, '2021-07-02 10:33:32', '2021-07-02 10:33:32', '2.txt');
INSERT INTO `courseware` VALUES (15, '623a337c86d9d673b97db6f1f2452c2b', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 153203, '2021-07-02 16:30:22', '2021-07-02 16:30:22', '文艺单页01.docx');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (2, '半醉半醒半浮生', 2, '2021-06-05 16:25:22', '2021-06-05 16:30:19');
INSERT INTO `moment` VALUES (3, '要么孤独，要么庸俗', 2, '2021-06-05 16:26:33', '2021-06-05 16:30:15');
INSERT INTO `moment` VALUES (4, '人们聚会的场面越大，就越容易变得枯燥乏味。只有当一个人独处的时候，他才可以完全成为自己。', 2, '2021-06-05 16:27:57', '2021-06-05 16:30:10');
INSERT INTO `moment` VALUES (5, '如果一个人拥有大量的知识，却未经过自己头脑的独立思考而加以吸收，那么这些学识就远不如那些虽所学不多但却经过认真思考的知识有价值。', 2, '2021-06-05 16:29:56', '2021-06-05 16:29:56');
INSERT INTO `moment` VALUES (6, '平庸的人关心怎样耗费时间,有才能的人竭力利用时间。', 1, '2021-06-05 16:31:26', '2021-06-13 16:40:49');
INSERT INTO `moment` VALUES (7, '平庸的人关心怎样耗费时间,有才能的人竭力利用时间。', 1, '2021-06-05 16:31:47', '2021-06-13 16:40:49');
INSERT INTO `moment` VALUES (9, '要么孤独，要么庸俗。。', 1, '2021-06-05 21:36:27', '2021-06-13 17:01:18');
INSERT INTO `moment` VALUES (10, '我们常常不去想自己拥有的东西，却对得不到的东西恋恋不忘。', 3, '2021-06-06 09:16:50', '2021-06-06 09:16:50');
INSERT INTO `moment` VALUES (12, '人性一个最特别的弱点就是：在意别人如何看待自己。', 3, '2021-06-06 09:18:40', '2021-06-06 09:18:40');
INSERT INTO `moment` VALUES (13, '衡量一个人是否幸福，不应该看他拥有多少高兴的事，而应该看他是否正为一些小事烦恼着。只有幸福的人，才会把无关痛痒的小事挂在心上。那些经历着大灾难的人是无暇顾及这些小事的。', 3, '2021-06-06 09:19:24', '2021-06-06 09:19:24');
INSERT INTO `moment` VALUES (14, '即便是最渺小的存在，也胜过那最伟大的虚空。', 3, '2021-06-06 09:19:34', '2021-06-06 09:19:34');
INSERT INTO `moment` VALUES (15, '寒冷到了极致时,太阳就要光临。', 3, '2021-06-06 16:57:09', '2021-06-06 16:57:09');
INSERT INTO `moment` VALUES (21, '789', 12, '2021-07-02 16:26:48', '2021-07-02 16:26:48');

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES (1, 'sadf', 1, '2021-06-29 19:43:27', '2021-06-29 19:43:27');
INSERT INTO `post` VALUES (2, 'hello', 1, '2021-06-29 19:43:40', '2021-06-29 19:43:40');
INSERT INTO `post` VALUES (3, 'sdf', 1, '2021-06-29 19:43:45', '2021-06-29 19:43:45');
INSERT INTO `post` VALUES (4, 'hello world', 1, '2021-06-29 19:44:11', '2021-06-29 19:44:11');
INSERT INTO `post` VALUES (5, 'hello world', 1, '2021-06-29 19:44:27', '2021-06-29 19:44:27');
INSERT INTO `post` VALUES (6, 'sdf', 1, '2021-06-29 19:44:31', '2021-06-29 19:44:31');
INSERT INTO `post` VALUES (7, 'sdf', 1, '2021-06-29 19:44:58', '2021-06-29 19:44:58');
INSERT INTO `post` VALUES (8, 'asd', 1, '2021-06-29 19:45:25', '2021-06-29 19:45:25');
INSERT INTO `post` VALUES (9, 'asd', 1, '2021-06-29 19:46:11', '2021-06-29 19:46:11');
INSERT INTO `post` VALUES (10, 'sdfs', 1, '2021-06-29 20:12:21', '2021-06-29 20:12:21');
INSERT INTO `post` VALUES (11, 'safd', 1, '2021-06-30 09:03:09', '2021-06-30 09:03:09');
INSERT INTO `post` VALUES (12, 'safd', 1, '2021-06-30 09:03:11', '2021-06-30 09:03:11');
INSERT INTO `post` VALUES (13, 'safd', 1, '2021-06-30 09:03:17', '2021-06-30 09:03:17');
INSERT INTO `post` VALUES (14, 'hello world', 1, '2021-06-30 09:03:58', '2021-06-30 09:03:58');
INSERT INTO `post` VALUES (15, 'Javascript', 1, '2021-06-30 09:17:30', '2021-06-30 09:17:30');
INSERT INTO `post` VALUES (16, 'Hello', 1, '2021-06-30 13:20:41', '2021-06-30 13:20:41');
INSERT INTO `post` VALUES (17, 'hello', 8, '2021-07-01 16:16:49', '2021-07-01 16:16:49');
INSERT INTO `post` VALUES (18, '456456', 9, '2021-07-01 16:49:03', '2021-07-01 16:49:03');
INSERT INTO `post` VALUES (19, '789', 10, '2021-07-02 10:30:10', '2021-07-02 10:30:10');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '../images/default-avatar.jpg',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'zhangsan', '250cf8b51c773f3f8dc8b4be867a9a02', '2021-06-04 17:16:04', '2021-07-02 09:47:23', 'http://localhost:3000/user/1/avatar');
INSERT INTO `user` VALUES (2, 'lisi', '202cb962ac59075b964b07152d234b70', '2021-06-04 18:37:53', '2021-06-11 21:07:22', 'http://localhost:3000/user/2/avatar');
INSERT INTO `user` VALUES (3, 'wangwu', '202cb962ac59075b964b07152d234b70', '2021-06-05 13:49:27', '2021-06-07 11:39:07', 'http://localhost:3000/user/3/avatar');
INSERT INTO `user` VALUES (4, 'ds', '6226f7cbe59e99a90b5cef6f94f966fd', '2021-06-28 08:07:35', '2021-06-28 08:07:35', '../images/default-avatar.jpg');
INSERT INTO `user` VALUES (5, 'df', 'eff7d5dba32b4da32d9a67a519434d3f', '2021-06-28 08:08:22', '2021-06-28 08:08:22', '../images/default-avatar.jpg');
INSERT INTO `user` VALUES (7, 'zx', 'e6c760b3216a51c656c5861d72d5bf62', '2021-06-28 08:20:14', '2021-06-28 08:21:10', 'http://localhost:3000/user/7/avatar');
INSERT INTO `user` VALUES (9, 'waja', '202cb962ac59075b964b07152d234b70', '2021-07-01 16:39:22', '2021-07-01 16:49:31', 'http://localhost:3000/user/9/avatar');
INSERT INTO `user` VALUES (11, 'lisan', '202cb962ac59075b964b07152d234b70', '2021-07-02 13:47:11', '2021-07-02 13:47:11', '../images/default-avatar.jpg');
INSERT INTO `user` VALUES (12, 'yu', '202cb962ac59075b964b07152d234b70', '2021-07-02 16:24:58', '2021-07-02 16:29:24', 'http://localhost:3000/user/12/avatar');

SET FOREIGN_KEY_CHECKS = 1;
