
-- Tạo bảng `subject`
CREATE TABLE subject (
    subject_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    description NVARCHAR(MAX) NULL
);

-- Tạo bảng `quiz`
CREATE TABLE quiz (
    quiz_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    subject_id INT NOT NULL,
    title NVARCHAR(100) NOT NULL,
    total_questions INT NULL,
    duration_minutes INT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_quiz_subject FOREIGN KEY (subject_id) REFERENCES subject (subject_id)
);

-- Tạo bảng `question`
CREATE TABLE question (
    question_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    quiz_id INT NOT NULL,
    question_text NVARCHAR(MAX) NOT NULL,
    difficulty NVARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    CONSTRAINT FK_question_quiz FOREIGN KEY (quiz_id) REFERENCES quiz (quiz_id)
);

-- Tạo bảng `answeroption`
CREATE TABLE answeroption (
    option_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    question_id INT NOT NULL,
    option_text NVARCHAR(MAX) NOT NULL,
    is_correct BIT DEFAULT 0,
    CONSTRAINT FK_answeroption_question FOREIGN KEY (question_id) REFERENCES question (question_id)
);

-- Tạo bảng `category`
CREATE TABLE category (
    category_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    description NVARCHAR(MAX) NULL
);

-- Tạo bảng `questioncategory`
CREATE TABLE questioncategory (
    question_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (question_id, category_id),
    CONSTRAINT FK_questioncategory_question FOREIGN KEY (question_id) REFERENCES question (question_id),
    CONSTRAINT FK_questioncategory_category FOREIGN KEY (category_id) REFERENCES category (category_id)
);

-- Tạo bảng `tag`
CREATE TABLE tag (
    tag_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL
);

-- Tạo bảng `questiontag`
CREATE TABLE questiontag (
    question_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (question_id, tag_id),
    CONSTRAINT FK_questiontag_question FOREIGN KEY (question_id) REFERENCES question (question_id),
    CONSTRAINT FK_questiontag_tag FOREIGN KEY (tag_id) REFERENCES tag (tag_id)
);

-- Tạo bảng `user`
CREATE TABLE [user] (
    user_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL,
    password NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    role NVARCHAR(10) CHECK (role IN ('student', 'admin', 'teacher')) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE()
);



-- Tạo bảng `feedback`
CREATE TABLE feedback (
    feedback_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    user_quiz_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comments NVARCHAR(MAX) NULL,
    CONSTRAINT FK_feedback_userquiz FOREIGN KEY (user_quiz_id) REFERENCES userquiz (user_quiz_id)
);

-- Tạo bảng `result`
CREATE TABLE result (
    result_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    quiz_id INT NOT NULL,
    score INT NULL,
    date_taken DATE NULL,
    time_taken TIME NULL,
    CONSTRAINT FK_result_user FOREIGN KEY (user_id) REFERENCES [user] (user_id),
    CONSTRAINT FK_result_quiz FOREIGN KEY (quiz_id) REFERENCES quiz (quiz_id)
);

-- Tạo bảng `quizsetting`
CREATE TABLE quizsetting (
    setting_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    quiz_id INT NOT NULL,
    allow_backtracking BIT DEFAULT 1,
    shuffle_questions BIT DEFAULT 1,
    shuffle_options BIT DEFAULT 1,
    time_limit INT NULL,
    CONSTRAINT FK_quizsetting_quiz FOREIGN KEY (quiz_id) REFERENCES quiz (quiz_id)
);

-- Tạo bảng `role`
CREATE TABLE role (
    role_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    role_name NVARCHAR(50) NOT NULL,
    description NVARCHAR(MAX) NULL
);

-- Tạo bảng `permission`
CREATE TABLE permission (
    permission_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    permission_name NVARCHAR(50) NOT NULL,
    description NVARCHAR(MAX) NULL
);

-- Tạo bảng `rolepermission`
CREATE TABLE rolepermission (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    CONSTRAINT FK_rolepermission_role FOREIGN KEY (role_id) REFERENCES role (role_id),
    CONSTRAINT FK_rolepermission_permission FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
);

-- Tạo bảng `userrole`
CREATE TABLE userrole (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    CONSTRAINT FK_userrole_user FOREIGN KEY (user_id) REFERENCES [user] (user_id),
    CONSTRAINT FK_userrole_role FOREIGN KEY (role_id) REFERENCES role (role_id)
);



-- Tạo bảng `userquiz`
CREATE TABLE userquiz (
    user_quiz_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    quiz_id INT NOT NULL,
    start_time DATETIME NOT NULL DEFAULT GETDATE(),
    end_time DATETIME NULL,
    score INT DEFAULT 0,
    CONSTRAINT FK_userquiz_user FOREIGN KEY (user_id) REFERENCES [user] (user_id),
    CONSTRAINT FK_userquiz_quiz FOREIGN KEY (quiz_id) REFERENCES quiz (quiz_id)
);

-- Tạo bảng `useranswer`
CREATE TABLE useranswer (
    user_answer_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    user_quiz_id INT NOT NULL,
    question_id INT NOT NULL,
    selected_option_id INT NOT NULL,
    is_correct BIT NULL,
    CONSTRAINT FK_useranswer_userquiz FOREIGN KEY (user_quiz_id) REFERENCES userquiz (user_quiz_id),
    CONSTRAINT FK_useranswer_question FOREIGN KEY (question_id) REFERENCES question (question_id),
    CONSTRAINT FK_useranswer_answeroption FOREIGN KEY (selected_option_id) REFERENCES answeroption (option_id)
);
