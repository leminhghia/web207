import { Routes, Route } from 'react-router-dom'
// import Home from "./page/Home"
// import Quiz from "./page/Quiz"
import Quiz from './components/Quiz/Quiz';
import Result from './components/Quiz/Result';
import Home from './components/Quiz/Home';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Login from './page/Login'
import Register from './page/Register'
import QuizLog from './page/QuizLog'
import Account from './page/account/Account'
import IntroductionPage from './page/IntroductionPage'
import FeedbackPage from './page/FeedbackPage'
import FAQPage from './page/FAQPage'
import ContactPage from './page/ContactPage'
function App() {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/quiz/:Id" element={<Quiz />} />
          <Route path="/quizlog" element={<QuizLog />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/quiz/:subId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/gioi-thieu" element={<IntroductionPage />} />
          <Route path="/gop-y" element={<FeedbackPage />} />
          <Route path="/hoi-dap" element={<FAQPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
