-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2024 at 07:40 AM
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
(273, 90, '1', 0, '2024-11-30 08:35:43'),
(274, 90, '2', 1, '2024-11-30 08:35:43'),
(275, 90, '3', 0, '2024-11-30 08:35:43'),
(276, 90, '4', 0, '2024-11-30 08:35:43'),
(277, 91, '4', 1, '2024-11-30 10:04:36'),
(278, 91, '5', 0, '2024-11-30 10:04:36'),
(279, 91, '7', 0, '2024-11-30 10:04:36'),
(280, 91, '7', 0, '2024-11-30 10:04:36'),
(281, 92, '11', 1, '2024-11-30 10:04:46'),
(282, 92, '12', 0, '2024-11-30 10:04:46'),
(283, 92, '12', 0, '2024-11-30 10:04:46'),
(284, 92, '125', 0, '2024-11-30 10:04:46'),
(285, 93, '3', 1, '2024-11-30 10:57:53'),
(286, 93, 'bon', 1, '2024-11-30 10:57:53'),
(287, 93, '1', 0, '2024-11-30 10:57:53'),
(288, 93, '3', 0, '2024-11-30 10:57:53'),
(289, 94, '21', 1, '2024-11-30 16:14:44'),
(290, 94, '21', 1, '2024-11-30 16:14:44'),
(291, 94, '3', 0, '2024-11-30 16:14:44'),
(292, 94, '5', 0, '2024-11-30 16:14:44'),
(293, 95, 'a', 1, '2024-11-30 16:14:55'),
(294, 95, 'b', 0, '2024-11-30 16:14:55'),
(295, 95, 'c', 0, '2024-11-30 16:14:55'),
(296, 95, 'd', 0, '2024-11-30 16:14:55'),
(318, 101, '12', 0, '2024-12-01 13:35:09'),
(319, 101, '124', 1, '2024-12-01 13:35:09'),
(320, 101, '325', 0, '2024-12-01 13:35:09'),
(321, 101, '5', 0, '2024-12-01 13:35:09');

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
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `level_id` int(11) NOT NULL,
  `level_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`level_id`, `level_name`, `description`) VALUES
(1, 'Đại học', NULL),
(2, 'Trung học phổ thông', NULL),
(3, 'Cao đẳng', NULL),
(4, 'Trung học cơ sở', NULL),
(5, 'Cao học', NULL),
(6, 'Doanh nghiệp', NULL),
(7, 'Trung tâm đào tạo', NULL),
(8, 'Tiểu học', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `major`
--

CREATE TABLE `major` (
  `major_id` int(11) NOT NULL,
  `major_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `major`
--

INSERT INTO `major` (`major_id`, `major_name`, `description`) VALUES
(1, 'Y Dược', NULL),
(3, 'Đại cương', NULL),
(4, 'Công nghệ thông tin', NULL),
(5, 'Luật', NULL),
(6, 'Kế toán', NULL),
(7, 'Thương mại', NULL),
(8, 'Du lịch', NULL),
(9, 'Quản trị kinh doanh', NULL);

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
  `question_img` varchar(200) DEFAULT NULL,
  `question_type` varchar(20) DEFAULT NULL,
  `question_text` text NOT NULL,
  `difficulty` enum('easy','medium','hard') DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `quiz_id`, `question_img`, `question_type`, `question_text`, `difficulty`, `created_at`) VALUES
(90, 112, '1732930543207-z5969546348285_72cc6e02d0c5b359d1929299174e9f1f.gif', 'single', '1 + 1= ?', NULL, '2024-11-30 08:35:43'),
(91, 112, NULL, 'single', '1 + 3 = ', NULL, '2024-11-30 10:04:36'),
(92, 112, NULL, 'single', '10 + 1', NULL, '2024-11-30 10:04:46'),
(93, 112, NULL, 'multiple', '1 + 3 = ?', NULL, '2024-11-30 10:57:53'),
(94, 112, NULL, 'multiple', '1+ 20', NULL, '2024-11-30 16:14:44'),
(95, 112, NULL, 'single', 'a', NULL, '2024-11-30 16:14:55'),
(101, 118, NULL, 'multiple', '10+ 2 = ?', NULL, '2024-12-01 13:35:09');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quiz_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `quiz_image` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quiz_id`, `title`, `quiz_image`, `created_at`) VALUES
(112, 'Toán Cấp 1', '1732930478055-AppStore.png', '2024-11-30 08:34:38'),
(118, 'quiz test', NULL, '2024-12-01 13:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `quizsetting`
--

CREATE TABLE `quizsetting` (
  `setting_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `shuffle_questions` tinyint(1) DEFAULT 1,
  `shuffle_options` tinyint(1) DEFAULT 1,
  `time_limit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizsetting`
--

INSERT INTO `quizsetting` (`setting_id`, `quiz_id`, `shuffle_questions`, `shuffle_options`, `time_limit`) VALUES
(1, 112, 1, 1, 302),
(8, 118, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_level`
--

CREATE TABLE `quiz_level` (
  `quiz_id` int(11) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_level`
--

INSERT INTO `quiz_level` (`quiz_id`, `level_id`) VALUES
(112, 3),
(118, 3);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_major`
--

CREATE TABLE `quiz_major` (
  `quiz_id` int(11) NOT NULL,
  `major_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_major`
--

INSERT INTO `quiz_major` (`quiz_id`, `major_id`) VALUES
(112, 6),
(118, 5);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_subject`
--

CREATE TABLE `quiz_subject` (
  `quiz_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_subject`
--

INSERT INTO `quiz_subject` (`quiz_id`, `subject_id`) VALUES
(112, 27),
(118, 25);

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
  `total_correct` int(11) DEFAULT NULL,
  `rating` varchar(20) DEFAULT NULL,
  `date_taken` datetime DEFAULT NULL,
  `time_taken` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`result_id`, `user_id`, `quiz_id`, `user_quiz_id`, `score`, `total_correct`, `rating`, `date_taken`, `time_taken`) VALUES
(89, 5, 112, 377, 10, 3, 'giỏi', '2024-11-30 10:05:28', '00:00:39'),
(90, 5, 112, 378, 3.33, 1, 'Kém', '2024-11-30 10:27:17', '00:00:06'),
(91, 5, 112, 379, 7.5, 3, 'Khá', '2024-11-30 10:58:07', '00:00:07'),
(92, 5, 112, 380, 8.33, 5, 'Khá', '2024-11-30 16:15:15', '00:00:11'),
(93, 7, 112, 388, 6.67, 4, 'Trung bình', '2024-12-01 12:44:06', '00:00:13'),
(94, 7, 112, 389, 10, 6, 'giỏi', '2024-12-01 12:46:11', '00:00:16'),
(95, 7, 112, 390, 1.67, 1, 'Kém', '2024-12-01 12:46:57', '00:00:05');

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
  `subject_name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_name`, `description`) VALUES
(25, 'Toán', NULL),
(26, 'Văn', NULL),
(27, 'Hóa', NULL),
(28, 'Lí', NULL),
(29, 'Công nghệ', NULL),
(30, 'Triết học', NULL),
(31, 'GDCD', NULL),
(32, 'Tiếng Anh', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_image` varchar(200) DEFAULT NULL,
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

INSERT INTO `user` (`user_id`, `name`, `password`, `user_image`, `email`, `gender`, `birthday`, `phonenumber`, `role`, `created_at`) VALUES
(5, 'nghia pro', '$2b$10$yP0DAor.Qz3disjuu1R.eehhgNlQhy29vT3HNeVCvfL65sKuxN1Bm', '1732930213096-ASNE.png', 'nghia@111', 'Nam', '2024-11-17', 31132999, 'admin', '2024-11-19 18:24:38'),
(7, 'nghia', '$2b$10$zAkXhO1O1skjtpv8HrdOnOrVMZq1rHCy33olvKFGrbMJpSlSrxF7C', '', 'test@gmail.com', 'Nam', '2024-11-18', 99999, 'student', '2024-11-28 22:08:37');

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
(670, 375, 90, 274, '1'),
(672, 377, 90, 274, '1'),
(673, 377, 91, 277, '1'),
(674, 377, 92, 281, '1'),
(675, 378, 90, 274, '1'),
(676, 378, 91, 279, '0'),
(677, 378, 92, 284, '0'),
(678, 379, 90, 274, '1'),
(679, 379, 91, 277, '1'),
(680, 379, 92, 281, '1'),
(681, 379, 93, 287, '0'),
(682, 379, 93, 286, '0'),
(683, 380, 90, 274, '1'),
(684, 380, 91, 277, '1'),
(685, 380, 92, 281, '1'),
(686, 380, 93, 286, '1'),
(687, 380, 93, 285, '1'),
(688, 380, 94, 290, '1'),
(689, 380, 94, 289, '1'),
(690, 380, 95, 294, '0'),
(691, 388, 92, 281, '1'),
(692, 388, 93, 286, '0'),
(693, 388, 93, 288, '0'),
(694, 388, 95, 293, '1'),
(695, 388, 94, 289, '1'),
(696, 388, 94, 290, '1'),
(697, 388, 90, 274, '1'),
(698, 389, 90, 274, '1'),
(699, 389, 91, 277, '1'),
(700, 389, 95, 293, '1'),
(701, 389, 92, 281, '1'),
(702, 389, 94, 289, '1'),
(703, 389, 94, 290, '1'),
(704, 389, 93, 285, '1'),
(705, 389, 93, 286, '1'),
(706, 390, 93, 286, '0'),
(707, 390, 92, 281, '1');

-- --------------------------------------------------------

--
-- Table structure for table `userquiz`
--

CREATE TABLE `userquiz` (
  `user_quiz_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `time_taken` datetime DEFAULT NULL,
  `score` float DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userquiz`
--

INSERT INTO `userquiz` (`user_quiz_id`, `user_id`, `quiz_id`, `start_time`, `end_time`, `time_taken`, `score`, `created_at`) VALUES
(372, 5, 112, '08:35:55', '08:36:40', '2024-11-30 08:36:40', 0, '2024-11-30 08:35:55'),
(373, 5, 112, '08:36:50', '08:36:55', '2024-11-30 08:36:55', 0, '2024-11-30 08:36:50'),
(374, 5, 112, '08:39:23', '08:39:25', '2024-11-30 08:39:25', 10, '2024-11-30 08:39:23'),
(375, 5, 112, '09:44:10', '09:44:15', '2024-11-30 09:44:15', 10, '2024-11-30 09:44:10'),
(376, 5, 112, '09:56:01', '09:56:02', '2024-11-30 09:56:02', 10, '2024-11-30 09:56:01'),
(377, 5, 112, '10:04:49', '10:05:28', '2024-11-30 10:05:28', 10, '2024-11-30 10:04:49'),
(378, 5, 112, '10:27:11', '10:27:17', '2024-11-30 10:27:17', 3.33, '2024-11-30 10:27:11'),
(379, 5, 112, '10:58:00', '10:58:07', '2024-11-30 10:58:07', 7.5, '2024-11-30 10:58:00'),
(380, 5, 112, '16:15:04', '16:15:15', '2024-11-30 16:15:15', 8.33, '2024-11-30 16:15:04'),
(381, 5, 112, '16:19:36', NULL, NULL, 0, '2024-11-30 16:19:36'),
(382, 5, 112, '11:22:40', NULL, NULL, 0, '2024-12-01 11:22:40'),
(383, 5, 112, '11:23:33', NULL, NULL, 0, '2024-12-01 11:23:33'),
(384, 5, 112, '11:25:01', NULL, NULL, 0, '2024-12-01 11:25:01'),
(385, 5, 112, '11:25:48', NULL, NULL, 0, '2024-12-01 11:25:48'),
(386, 5, 112, '11:28:16', NULL, NULL, 0, '2024-12-01 11:28:16'),
(387, 5, 112, '12:16:49', NULL, NULL, 0, '2024-12-01 12:16:49'),
(388, 7, 112, '12:43:53', '12:44:06', '2024-12-01 12:44:06', 6.67, '2024-12-01 12:43:53'),
(389, 7, 112, '12:45:55', '12:46:11', '2024-12-01 12:46:11', 10, '2024-12-01 12:45:55'),
(390, 7, 112, '12:46:52', '12:46:57', '2024-12-01 12:46:57', 1.67, '2024-12-01 12:46:52'),
(393, 5, 112, '13:18:17', NULL, NULL, 0, '2024-12-01 13:18:17'),
(396, 5, 112, '13:18:57', NULL, NULL, 0, '2024-12-01 13:18:57'),
(400, 5, 118, '13:36:45', NULL, NULL, 0, '2024-12-01 13:36:45');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_quiz_creator`
--

CREATE TABLE `user_quiz_creator` (
  `user_quiz_creator_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_quiz_creator`
--

INSERT INTO `user_quiz_creator` (`user_quiz_creator_id`, `user_id`, `quiz_id`, `created_at`) VALUES
(48, 5, 112, '2024-11-30 08:34:38'),
(54, 5, 118, '2024-12-01 13:34:56');

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
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `FK_feedback_userquiz` (`user_quiz_id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`level_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`major_id`);

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
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`);

--
-- Indexes for table `quizsetting`
--
ALTER TABLE `quizsetting`
  ADD PRIMARY KEY (`setting_id`),
  ADD KEY `FK_quizsetting_quiz` (`quiz_id`);

--
-- Indexes for table `quiz_level`
--
ALTER TABLE `quiz_level`
  ADD PRIMARY KEY (`quiz_id`,`level_id`),
  ADD KEY `level_id` (`level_id`);

--
-- Indexes for table `quiz_major`
--
ALTER TABLE `quiz_major`
  ADD PRIMARY KEY (`quiz_id`,`major_id`),
  ADD KEY `major_id` (`major_id`);

--
-- Indexes for table `quiz_subject`
--
ALTER TABLE `quiz_subject`
  ADD PRIMARY KEY (`quiz_id`,`subject_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`result_id`),
  ADD KEY `FK_result_user` (`user_id`),
  ADD KEY `user_quiz_id` (`user_quiz_id`),
  ADD KEY `FK_result_quiz` (`quiz_id`);

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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `useranswer`
--
ALTER TABLE `useranswer`
  ADD PRIMARY KEY (`user_answer_id`),
  ADD KEY `FK_useranswer_question` (`question_id`),
  ADD KEY `FK_useranswer_answeroption` (`selected_option_id`),
  ADD KEY `FK_useranswer_userquiz` (`user_quiz_id`);

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
-- Indexes for table `user_quiz_creator`
--
ALTER TABLE `user_quiz_creator`
  ADD PRIMARY KEY (`user_quiz_creator_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `quiz_id` (`quiz_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answeroption`
--
ALTER TABLE `answeroption`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=322;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `level_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `major_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `quizsetting`
--
ALTER TABLE `quizsetting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `result_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `useranswer`
--
ALTER TABLE `useranswer`
  MODIFY `user_answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=708;

--
-- AUTO_INCREMENT for table `userquiz`
--
ALTER TABLE `userquiz`
  MODIFY `user_quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=401;

--
-- AUTO_INCREMENT for table `user_quiz_creator`
--
ALTER TABLE `user_quiz_creator`
  MODIFY `user_quiz_creator_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answeroption`
--
ALTER TABLE `answeroption`
  ADD CONSTRAINT `FK_answeroption_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE CASCADE;

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
-- Constraints for table `quizsetting`
--
ALTER TABLE `quizsetting`
  ADD CONSTRAINT `FK_quizsetting_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_level`
--
ALTER TABLE `quiz_level`
  ADD CONSTRAINT `quiz_level_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_level_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `level` (`level_id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_major`
--
ALTER TABLE `quiz_major`
  ADD CONSTRAINT `quiz_major_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_major_ibfk_2` FOREIGN KEY (`major_id`) REFERENCES `major` (`major_id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_subject`
--
ALTER TABLE `quiz_subject`
  ADD CONSTRAINT `quiz_subject_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_subject_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`) ON DELETE CASCADE;

--
-- Constraints for table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `FK_result_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_result_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`) ON DELETE CASCADE;

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
  ADD CONSTRAINT `FK_useranswer_answeroption` FOREIGN KEY (`selected_option_id`) REFERENCES `answeroption` (`option_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_useranswer_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_useranswer_userquiz` FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`) ON DELETE CASCADE;

--
-- Constraints for table `userquiz`
--
ALTER TABLE `userquiz`
  ADD CONSTRAINT `FK_userquiz_quiz` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_userquiz_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `userrole`
--
ALTER TABLE `userrole`
  ADD CONSTRAINT `FK_userrole_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `FK_userrole_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user_quiz_creator`
--
ALTER TABLE `user_quiz_creator`
  ADD CONSTRAINT `FK_user_quiz_creator` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_quiz_creator_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
