-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 12:17 PM
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
(2, 'Tiếng Anh', NULL),
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
  `question_img` varchar(200) NOT NULL,
  `question_type` varchar(20) DEFAULT NULL,
  `question_text` text NOT NULL,
  `difficulty` enum('easy','medium','hard') DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `quiz_level`
--

CREATE TABLE `quiz_level` (
  `quiz_id` int(11) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_major`
--

CREATE TABLE `quiz_major` (
  `quiz_id` int(11) NOT NULL,
  `major_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_subject`
--

CREATE TABLE `quiz_subject` (
  `quiz_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
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
  `rating` varchar(20) DEFAULT NULL,
  `date_taken` datetime DEFAULT NULL,
  `time_taken` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `name`, `description`) VALUES
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
(5, 'minh nghia 1233', '$2b$10$yP0DAor.Qz3disjuu1R.eehhgNlQhy29vT3HNeVCvfL65sKuxN1Bm', '', 'nghia@111', 'Nam', '2024-11-27', 12309999, 'admin', '2024-11-19 18:24:38'),
(7, 'nghia', '$2b$10$zAkXhO1O1skjtpv8HrdOnOrVMZq1rHCy33olvKFGrbMJpSlSrxF7C', '', 'test@gmail.com', 'Nam', '2024-11-18', 99999, 'admin', '2024-11-28 22:08:37');

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
  ADD PRIMARY KEY (`quiz_id`),
  ADD KEY `FK_quiz_subject` (`subject_id`);

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
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=261;

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
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `quizsetting`
--
ALTER TABLE `quizsetting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `result_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

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
  MODIFY `user_answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=667;

--
-- AUTO_INCREMENT for table `userquiz`
--
ALTER TABLE `userquiz`
  MODIFY `user_quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=370;

--
-- AUTO_INCREMENT for table `user_quiz_creator`
--
ALTER TABLE `user_quiz_creator`
  MODIFY `user_quiz_creator_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
