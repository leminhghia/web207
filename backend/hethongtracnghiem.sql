-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 04:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hethongtracnghiem`
--

-- --------------------------------------------------------

--
-- Table structure for table `answeroption`
--

CREATE TABLE `answeroption` (
  `option_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_text` text NOT NULL,
  `is_correct` tinyint(1) DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answeroption`
--

INSERT INTO `answeroption` (`option_id`, `question_id`, `option_text`, `is_correct`, `created_at`) VALUES
(1, 1, '1', 0, '2024-11-19 19:26:49'),
(2, 1, '2', 0, '2024-11-19 19:26:56'),
(3, 1, '3', 0, '2024-11-19 19:27:00'),
(4, 1, '4', 1, '2024-11-19 19:27:06'),
(5, 2, '2', 0, '2024-11-19 19:40:50'),
(6, 2, '4', 0, '2024-11-20 10:02:28'),
(7, 2, '6', 1, '2024-11-20 10:02:43'),
(8, 2, '7', 0, '2024-11-20 10:02:50'),
(9, 3, '20', 1, '2024-11-23 16:31:52'),
(10, 3, 'hai mươi', 1, '2024-11-23 16:32:03'),
(11, 3, '15', 0, '2024-11-23 16:32:22'),
(12, 3, '13', 0, '2024-11-23 16:32:45');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `user_quiz_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `comments` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `permission_id` int(11) NOT NULL,
  `permission_name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `question_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question_text` text NOT NULL,
  `difficulty` enum('easy','medium','hard') DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `quiz_id`, `question_text`, `difficulty`, `created_at`) VALUES
(1, 1, 'Câu hỏi ví dụ: 2 + 2 = ?', 'easy', '2024-11-17 19:31:03'),
(2, 1, '3+3 = ?', 'easy', '2024-11-19 19:40:34'),
(3, 1, ' 10 + 10 = ?', 'easy', '2024-11-23 16:31:34');

-- --------------------------------------------------------

--
-- Table structure for table `questioncategory`
--

CREATE TABLE `questioncategory` (
  `question_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questiontag`
--

CREATE TABLE `questiontag` (
  `question_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quiz_id` int(11) NOT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `total_questions` int(11) DEFAULT NULL,
  `duration_minutes` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quiz_id`, `subject_id`, `title`, `total_questions`, `duration_minutes`, `created_at`) VALUES
(1, 1, 'Quiz 1', 10, 30, '2024-11-17 19:22:44'),
(19, 11, 'nghia pro', 20, 45, '2024-11-19 19:04:51');

-- --------------------------------------------------------

--
-- Table structure for table `quizsetting`
--

CREATE TABLE `quizsetting` (
  `setting_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `allow_backtracking` tinyint(1) DEFAULT 1,
  `shuffle_questions` tinyint(1) DEFAULT 1,
  `shuffle_options` tinyint(1) DEFAULT 1,
  `time_limit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `result_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `user_quiz_id` int(11) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `date_taken` date DEFAULT NULL,
  `time_taken` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`result_id`, `user_id`, `quiz_id`, `user_quiz_id`, `score`, `date_taken`, `time_taken`) VALUES
(49, 5, 1, NULL, 6.67, '2024-11-25', '22:12:23'),
(50, 5, 1, NULL, 6.67, '2024-11-25', '22:14:00'),
(51, 5, 1, NULL, 3.33, '2024-11-25', '22:14:58'),
(52, 5, 1, 310, 10, '2024-11-25', '22:24:07'),
(53, 5, 1, 311, 6.67, '2024-11-25', '22:24:22'),
(54, 5, 1, 312, 6.67, '2024-11-25', '22:25:13');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rolepermission`
--

CREATE TABLE `rolepermission` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` varchar(200) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `name`, `logo`, `description`) VALUES
(1, 'Lập trình Android nâng cao', 'ADAV.jpg', NULL),
(2, 'Lập trình Android cơ bản', 'ADBS.jpg', NULL),
(7, 'Kiểm thử và triển khai ứng dụng Android', 'ADTE.jpg', NULL),
(8, 'Thiết kế giao diện trên Android', 'ADUI.jpg', NULL),
(9, 'Lập trình ASP.NET', 'ASNE.png', NULL),
(10, 'Điện toán đám mây', 'CLCO.jpg', NULL),
(11, 'SQL Server', 'DBAV.png', NULL),
(12, 'Cơ sở dữ liệu', 'DBBS.png', NULL),
(13, 'Lập trình game 2D', 'GAME.png', NULL),
(14, 'HTML5 và CSS3', 'HTCS.jpg', NULL),
(15, 'Internet Marketing', 'INMA.jpg', NULL),
(16, 'Lập trình Java nâng cao', 'JAAV.png', NULL),
(17, 'Lập trình hướng đối tượng với Java', 'JABS.png', NULL),
(18, 'Lập trình JavaScript', 'JSPR.png', NULL),
(19, 'Thiết kế layout', 'LAYO.jpg', NULL),
(20, 'Thiết kế web cho điện thoại di động', 'MOWE.png', NULL),
(21, 'Lập trình PHP', 'PHPP.png', NULL),
(22, 'Quản lý dự án với Agile', 'PMAG.jpg', NULL),
(23, 'Lập trình VB.NET', 'VBPR.png', NULL),
(24, 'Xây dựng trang web', 'WEBU.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `tag_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `role` enum('student','admin','teacher') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `password`, `email`, `gender`, `birthday`, `phonenumber`, `role`, `created_at`) VALUES
(5, 'minh nghia 123', '$2b$10$yP0DAor.Qz3disjuu1R.eehhgNlQhy29vT3HNeVCvfL65sKuxN1Bm', 'nghia@111', 'Nam', '2024-11-28', 12309999, 'student', '2024-11-19 18:24:38');

-- --------------------------------------------------------

--
-- Table structure for table `useranswer`
--

CREATE TABLE `useranswer` (
  `user_answer_id` int(11) NOT NULL,
  `user_quiz_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `selected_option_id` int(11) NOT NULL,
  `is_correct` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `useranswer`
--

INSERT INTO `useranswer` (`user_answer_id`, `user_quiz_id`, `question_id`, `selected_option_id`, `is_correct`) VALUES
(518, 299, 1, 4, '1'),
(519, 299, 2, 7, '1'),
(520, 299, 3, 10, '0'),
(521, 300, 1, 4, '1'),
(522, 300, 2, 7, '1'),
(523, 300, 3, 10, '1'),
(524, 300, 3, 9, '1'),
(525, 301, 1, 4, '1'),
(526, 301, 2, 6, '0'),
(527, 302, 1, 4, '1'),
(528, 302, 2, 7, '1'),
(529, 302, 3, 9, '1'),
(530, 302, 3, 10, '1'),
(531, 303, 1, 4, '1'),
(532, 303, 2, 7, '1'),
(533, 303, 3, 9, '1'),
(534, 303, 3, 10, '1'),
(535, 304, 1, 4, '1'),
(536, 304, 2, 7, '1'),
(537, 304, 3, 9, '0'),
(538, 305, 1, 4, '1'),
(539, 305, 2, 7, '1'),
(540, 305, 3, 10, '0'),
(541, 306, 1, 4, '1'),
(542, 306, 2, 8, '0'),
(543, 306, 3, 9, '0'),
(544, 308, 1, 4, '1'),
(545, 308, 2, 7, '1'),
(546, 308, 3, 10, '0'),
(547, 309, 1, 4, '1'),
(548, 309, 2, 7, '1'),
(549, 309, 3, 9, '0'),
(550, 310, 1, 4, '1'),
(551, 310, 2, 7, '1'),
(552, 310, 3, 9, '1'),
(553, 310, 3, 10, '1'),
(554, 311, 1, 4, '1'),
(555, 311, 2, 7, '1'),
(556, 311, 3, 10, '0'),
(557, 312, 1, 4, '1'),
(558, 312, 2, 7, '1'),
(559, 312, 3, 9, '0');

-- --------------------------------------------------------

--
-- Table structure for table `userquiz`
--

CREATE TABLE `userquiz` (
  `user_quiz_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `start_time` time NOT NULL DEFAULT current_timestamp(),
  `end_time` time DEFAULT NULL,
  `score` float DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userquiz`
--

INSERT INTO `userquiz` (`user_quiz_id`, `user_id`, `quiz_id`, `start_time`, `end_time`, `score`, `created_at`) VALUES
(299, 5, 1, '21:24:23', '21:24:27', 6.67, '2024-11-25 21:24:23'),
(300, 5, 1, '21:24:33', '21:24:38', 10, '2024-11-25 21:24:33'),
(301, 5, 1, '21:30:07', '21:30:09', 3.33, '2024-11-25 21:30:07'),
(302, 5, 1, '22:09:44', '22:09:47', 10, '2024-11-25 22:09:44'),
(303, 5, 1, '22:11:38', '22:11:41', 10, '2024-11-25 22:11:38'),
(304, 5, 1, '22:12:21', '22:12:23', 6.67, '2024-11-25 22:12:21'),
(305, 5, 1, '22:13:58', '22:14:00', 6.67, '2024-11-25 22:13:58'),
(306, 5, 1, '22:14:38', '22:14:58', 3.33, '2024-11-25 22:14:38'),
(307, 5, 1, '22:15:48', NULL, 0, '2024-11-25 22:15:48'),
(308, 5, 1, '22:21:39', '22:21:42', 6.67, '2024-11-25 22:21:39'),
(309, 5, 1, '22:22:17', '22:22:25', 6.67, '2024-11-25 22:22:17'),
(310, 5, 1, '22:24:03', '22:24:07', 10, '2024-11-25 22:24:03'),
(311, 5, 1, '22:24:20', '22:24:22', 6.67, '2024-11-25 22:24:20'),
(312, 5, 1, '22:25:11', '22:25:13', 6.67, '2024-11-25 22:25:11');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answeroption`
--
ALTER TABLE `answeroption`
  ADD PRIMARY KEY (`option_id`),
  ADD KEY `FK_answeroption_question` (`question_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `FK_feedback_userquiz` (`user_quiz_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`permission_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `FK_question_quiz` (`quiz_id`);

--
-- Indexes for table `questioncategory`
--
ALTER TABLE `questioncategory`
  ADD PRIMARY KEY (`question_id`,`category_id`),
  ADD KEY `FK_questioncategory_category` (`category_id`);

--
-- Indexes for table `questiontag`
--
ALTER TABLE `questiontag`
  ADD PRIMARY KEY (`question_id`,`tag_id`),
  ADD KEY `FK_questiontag_tag` (`tag_id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`),
  ADD KEY `FK_quiz_subject` (`subject_id`);

--
-- Indexes for table `quizsetting`
--
ALTER TABLE `quizsetting`
  ADD PRIMARY KEY (`setting_id`),
  ADD KEY `FK_quizsetting_quiz` (`quiz_id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`result_id`),
  ADD KEY `FK_result_user` (`user_id`),
  ADD KEY `FK_result_quiz` (`quiz_id`),
  ADD KEY `user_quiz_id` (`user_quiz_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD PRIMARY KEY (`role_id`,`permission_id`),
  ADD KEY `FK_rolepermission_permission` (`permission_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`tag_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `useranswer`
--
ALTER TABLE `useranswer`
  ADD PRIMARY KEY (`user_answer_id`),
  ADD KEY `FK_useranswer_userquiz` (`user_quiz_id`),
  ADD KEY `FK_useranswer_question` (`question_id`),
  ADD KEY `FK_useranswer_answeroption` (`selected_option_id`);

--
-- Indexes for table `userquiz`
--
ALTER TABLE `userquiz`
  ADD PRIMARY KEY (`user_quiz_id`),
  ADD KEY `FK_userquiz_user` (`user_id`),
  ADD KEY `FK_userquiz_quiz` (`quiz_id`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FK_userrole_role` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answeroption`
--
ALTER TABLE `answeroption`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `quizsetting`
--
ALTER TABLE `quizsetting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `result_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `useranswer`
--
ALTER TABLE `useranswer`
  MODIFY `user_answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=560;

--
-- AUTO_INCREMENT for table `userquiz`
--
ALTER TABLE `userquiz`
  MODIFY `user_quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=313;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answeroption`
--
ALTER TABLE `answeroption`
  ADD CONSTRAINT `FK_answeroption_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FK_feedback_userquiz` FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `FK_question_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE;

--
-- Constraints for table `questioncategory`
--
ALTER TABLE `questioncategory`
  ADD CONSTRAINT `FK_questioncategory_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `FK_quiz_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`);

--
-- Constraints for table `quizsetting`
--
ALTER TABLE `quizsetting`
  ADD CONSTRAINT `FK_quizsetting_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`);

--
-- Constraints for table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `FK_result_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`),
  ADD CONSTRAINT `FK_result_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`);

--
-- Constraints for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD CONSTRAINT `FK_rolepermission_permission` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`),
  ADD CONSTRAINT `FK_rolepermission_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

--
-- Constraints for table `useranswer`
--
ALTER TABLE `useranswer`
  ADD CONSTRAINT `FK_useranswer_answeroption` FOREIGN KEY (`selected_option_id`) REFERENCES `answeroption` (`option_id`),
  ADD CONSTRAINT `FK_useranswer_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`),
  ADD CONSTRAINT `FK_useranswer_userquiz` FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`);

--
-- Constraints for table `userquiz`
--
ALTER TABLE `userquiz`
  ADD CONSTRAINT `FK_userquiz_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`),
  ADD CONSTRAINT `FK_userquiz_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `userrole`
--
ALTER TABLE `userrole`
  ADD CONSTRAINT `FK_userrole_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `FK_userrole_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
