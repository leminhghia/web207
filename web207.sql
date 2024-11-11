-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2024 at 01:05 PM
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
-- Database: `web207`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `ansId` int(11) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `is_correct` tinyint(1) DEFAULT 0,
  `queId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`ansId`, `content`, `is_correct`, `queId`) VALUES
(1, 'A programming language', 0, 1),
(2, 'A type of software', 0, 1),
(3, 'A markup language', 1, 1),
(4, 'Cascading Style Sheets', 1, 2),
(5, 'Computer Style Sheets', 0, 2),
(6, 'Cascading Simple Sheets', 0, 2),
(7, 'HTML', 0, 3),
(8, 'JavaScript', 1, 3),
(9, 'Python', 0, 3),
(10, '8', 1, 4),
(11, '7', 0, 4),
(12, '6', 0, 4),
(13, '4', 0, 5),
(14, '2', 1, 5),
(15, '5', 0, 5),
(16, '36', 0, 6),
(17, '24', 1, 6),
(18, '48', 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `queId` int(11) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `score` varchar(20) DEFAULT NULL,
  `subId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`queId`, `content`, `score`, `subId`) VALUES
(1, 'What is HTML?', '1', 1),
(2, 'What does CSS stand for?', '1', 1),
(3, 'Which of the following is a programming language?', '1', 1),
(4, 'What is 5 + 3?', '1', 2),
(5, 'What is the square root of 16?', '1', 2),
(6, 'What is 12 * 3?', '1', 2);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `resId` int(11) NOT NULL,
  `score` varchar(20) DEFAULT NULL,
  `date` varchar(200) DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `useId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`resId`, `score`, `date`, `time`, `useId`) VALUES
(1, '5', '2024-11-11', '10:00:00', 1),
(2, '6', '2024-11-11', '10:30:00', 2),
(3, '0', '2024-11-11', '18:12:16', 6),
(4, '0', '2024-11-11', '18:14:21', 6),
(5, '0', '2024-11-11', '18:15:15', 6),
(6, '0', '2024-11-11', '18:16:25', 6),
(7, '0', NULL, NULL, 6),
(8, '0', NULL, NULL, 6),
(9, '0', NULL, NULL, 6),
(10, '0', '2024-11-11', '18:33:28', 6);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subId` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `logo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subId`, `name`, `logo`) VALUES
(1, 'Programming Basics', 'programming_logo.png'),
(2, 'Mathematics', 'math_logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `useId` int(11) NOT NULL,
  `surName` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`useId`, `surName`, `name`, `email`, `password`) VALUES
(1, 'Nguyen', 'An', 'an@example.com', '$2b$10$z5k/UjkQxMzMHi1BcJxT/OE.Us5jEK4vvfD4PQ/mD5AqEz2pfrhzC'),
(2, 'Le', 'Binh', 'binh@example.com', '$2b$10$8n9Ws6.QjgoFvggwvM9ZGfpm2lPr9O4fXUMnNKCwBfr4MRWcBi19a'),
(6, 'le ', 'nghia', 'a@1', '$2b$10$wYO5Kp8CqLb80LoSBo/tHurYLNbwOKpyEzf6moIeKSKRactpD2uJy');

-- --------------------------------------------------------

--
-- Table structure for table `user_subject`
--

CREATE TABLE `user_subject` (
  `userId` int(11) NOT NULL,
  `subId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_subject`
--

INSERT INTO `user_subject` (`userId`, `subId`) VALUES
(6, 1),
(6, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`ansId`),
  ADD KEY `queId` (`queId`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`queId`),
  ADD KEY `subId` (`subId`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`resId`),
  ADD KEY `useId` (`useId`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`useId`);

--
-- Indexes for table `user_subject`
--
ALTER TABLE `user_subject`
  ADD KEY `userId` (`userId`),
  ADD KEY `subId` (`subId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `ansId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `queId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `resId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `useId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`queId`) REFERENCES `question` (`queId`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`subId`) REFERENCES `subject` (`subId`);

--
-- Constraints for table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`useId`) REFERENCES `users` (`useId`);

--
-- Constraints for table `user_subject`
--
ALTER TABLE `user_subject`
  ADD CONSTRAINT `user_subject_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`useId`),
  ADD CONSTRAINT `user_subject_ibfk_2` FOREIGN KEY (`subId`) REFERENCES `subject` (`subId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
