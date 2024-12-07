import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import quizRoutes from './routes/quizRoutes.js'
import questionRoutes from './routes/questionRoutes.js'
import answerOptionRoutes from './routes/answerOptionRoutes.js'
import userQuizRoutes from './routes/userQuizRoutes.js'
import userAnswerRoutes from './routes/userAnswerRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
const app = express()
const PORT = 2000

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
)
app.use(cookieParser())

app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/quizzes', quizRoutes)
app.use('/api/question', questionRoutes)
app.use('/api/answeroption', answerOptionRoutes)
app.use('/api/useranswer', userAnswerRoutes)
app.use('/api/userquiz', userQuizRoutes)
app.use('/api/blog', blogRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
