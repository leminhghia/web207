-- Thiết lập môi trường
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET NAMES utf8mb4;

-- Database: quizsys
-- Bắt đầu tạo bảng

-- Bảng Category
CREATE TABLE `category` (
  `category_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT
);

-- Bảng Tag
CREATE TABLE `tag` (
  `tag_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

-- Bảng Subject
CREATE TABLE `subject` (
  `subject_id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT
);

-- Bảng Role
CREATE TABLE `role` (
  `role_id` INT AUTO_INCREMENT PRIMARY KEY,
  `role_name` VARCHAR(50) NOT NULL,
  `description` TEXT
);

-- Bảng Permission
CREATE TABLE `permission` (
  `permission_id` INT AUTO_INCREMENT PRIMARY KEY,
  `permission_name` VARCHAR(50) NOT NULL,
  `description` TEXT
);

-- Bảng User
CREATE TABLE `user` (
  `user_id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `role` ENUM('student', 'admin', 'teacher') NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Quiz
CREATE TABLE `quiz` (
  `quiz_id` INT AUTO_INCREMENT PRIMARY KEY,
  `subject_id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `total_questions` INT,
  `duration_minutes` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`)
);

-- Bảng Question
CREATE TABLE `question` (
  `question_id` INT AUTO_INCREMENT PRIMARY KEY,
  `quiz_id` INT NOT NULL,
  `question_text` TEXT NOT NULL,
  `difficulty` ENUM('easy', 'medium', 'hard'),
  FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
);

-- Bảng AnswerOption
CREATE TABLE `answeroption` (
  `option_id` INT AUTO_INCREMENT PRIMARY KEY,
  `question_id` INT NOT NULL,
  `option_text` TEXT NOT NULL,
  `is_correct` TINYINT(1) DEFAULT 0,
  FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`)
);

-- Bảng UserQuiz
CREATE TABLE `userquiz` (
  `user_quiz_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `quiz_id` INT NOT NULL,
  `start_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `end_time` TIMESTAMP NULL DEFAULT NULL,
  `score` INT DEFAULT 0,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
);

-- Bảng Result
CREATE TABLE `result` (
  `result_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `quiz_id` INT NOT NULL,
  `score` INT,
  `date_taken` DATE,
  `time_taken` TIME,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
);

-- Bảng Feedback
CREATE TABLE `feedback` (
  `feedback_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_quiz_id` INT NOT NULL,
  `rating` INT CHECK (`rating` BETWEEN 1 AND 5),
  `comments` TEXT,
  FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`)
);

-- Bảng QuestionCategory (nhiều câu hỏi thuộc nhiều danh mục)
CREATE TABLE `questioncategory` (
  `question_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`question_id`, `category_id`),
  FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`),
  FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
);

-- Bảng QuestionTag (nhiều câu hỏi có nhiều thẻ)
CREATE TABLE `questiontag` (
  `question_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`question_id`, `tag_id`),
  FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`),
  FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`)
);

-- Bảng RolePermission
CREATE TABLE `rolepermission` (
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`role_id`, `permission_id`),
  FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`)
);

-- Bảng UserRole
CREATE TABLE `userrole` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
);

-- Bảng UserAnswer (lưu trữ câu trả lời của người dùng)
CREATE TABLE `useranswer` (
  `user_answer_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_quiz_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `selected_option_id` INT NOT NULL,
  `is_correct` TINYINT(1),
  FOREIGN KEY (`user_quiz_id`) REFERENCES `userquiz` (`user_quiz_id`),
  FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`),
  FOREIGN KEY (`selected_option_id`) REFERENCES `answeroption` (`option_id`)
);

-- Bảng QuizSetting (tùy chọn cài đặt cho quiz)
CREATE TABLE `quizsetting` (
  `setting_id` INT AUTO_INCREMENT PRIMARY KEY,
  `quiz_id` INT NOT NULL,
  `allow_backtracking` TINYINT(1) DEFAULT 1,
  `shuffle_questions` TINYINT(1) DEFAULT 1,
  `shuffle_options` TINYINT(1) DEFAULT 1,
  `time_limit` INT,
  FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
);

-- Kết thúc
COMMIT;
