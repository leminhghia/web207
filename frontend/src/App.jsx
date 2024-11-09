import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Home from "./page/Home"
import Quiz from "./page/Quiz"
import Login from "./page/Login"
import Register from "./page/Register"
import QuizLog from "./page/QuizLog"
function App() {
  return (
    <div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/quiz/:Id" element={<Quiz />} />
          <Route path="/quizlog" element={<QuizLog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        <Footer />
      </div>

    </div>
  )
}

export default App
