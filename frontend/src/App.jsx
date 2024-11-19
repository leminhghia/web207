import { Routes, Route } from 'react-router-dom'
// import Home from "./page/Home"
// import Quiz from "./page/Quiz"
// import Quiz from './components/Quiz/Quiz'
import Result from './components/Quiz/Result'
// import Home from './components/Quiz/Home'
import PagesHome from './page/PagesHome'
import Navbar from './components/Navbar'
import Footer from './components/footer'
// import Login from './page/Login'
// import Register from './page/Register'
import Account from './page/account/Account'
import IntroductionPage from './page/BLOG/IntroductionPage'
import FeedbackPage from './page/FeedbackPage'
import FAQPage from './page/FAQPage'
import ContactPage from './page/ContactPage'
import QuizPages from './page/QuizPages'
import QuizzAdd from './page/QuizzAdd'
import Login from './components/Quiz/Login'
import Register from './components/Quiz/Register'
import CauHoi from './page/cauhoi'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Header from './components/Header'
// import BaoMat from './page/account/settingaccount/BaoMat'
// import MainAccountDetails from './page/account/settingaccount/mainAccountDetails'
function App() {
  return (
    <div>
      <div className="">
        <ToastContainer/>
        <Navbar />
        {/* <Navbar /> */}
        <Routes>
          <Route index path="/" element={<PagesHome />} />
          {/* <Route path="/quiz/:Id" element={<Quiz />} />
          <Route path="/quizlog" element={<QuizLog />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/account" element={<Account />} />
          <Route path="/result" element={<Result />} />
          <Route path="/gioi-thieu" element={<IntroductionPage />} />
          <Route path="/gop-y" element={<FeedbackPage />} />
          <Route path="/hoi-dap" element={<FAQPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/quiz" element={<QuizPages />} />
          <Route path="/quiz/:id" element={<CauHoi />} />

          <Route path="/QuizAdd" element={<QuizzAdd />} />
          
          {/* <Route path="/mainAccountDetails" element={<MainAccountDetails />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
