import { Routes, Route, useLocation } from 'react-router-dom'
import PagesHome from './page/PagesHome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Account from './page/account/Account'
import IntroductionPage from './page/BLOG/IntroductionPage'
import FeedbackPage from './page/FeedbackPage'
import FAQPage from './page/FAQPage'
import ContactPage from './page/ContactPage'
import QuizPages from './page/QuizPages'
import QuizzAdd from './page/QuizzAdd'
import Login from './page/Login'
import Register from './page/Register'
import CauHoi from './page/CauHoi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ExamInfo from './page/ExamQuizz/ExamInfo'
import ExamQuizz from './page/ExamQuizz/ExamQuizz'
import ResultOnpage from './page/ResultOnpage'
import Tset from './page/tset'
import AccountFooter from './page/account/AccountFooter'
import AccountHeader from './page/account/AccountHeader'
import QuestionAdd from './page/QuestionAdd'
function App() {
  const location = useLocation()
  const pagesWithCustomHeaderFooter = ['/account']
  const isCustomHeaderFooter = pagesWithCustomHeaderFooter.includes(
    location.pathname
  )
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {isCustomHeaderFooter ? (
        <>
          {/* Account */}
          {location.pathname === '/account' && (
            <>
              <AccountHeader />
              <div className="flex-grow">
                <Routes>
                  <Route path="/account" element={<Account />} />
                </Routes>
              </div>
              <AccountFooter />
            </>
          )}
          {location.pathname}
          {/*  */}
        </>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route index path="/" element={<PagesHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/account" element={<Account />} /> */}
              <Route path="/resultonpage/:id" element={<ResultOnpage />} />
              <Route path="/gioi-thieu" element={<IntroductionPage />} />
              <Route path="/gop-y" element={<FeedbackPage />} />
              <Route path="/hoi-dap" element={<FAQPage />} />
              <Route path="/lien-he" element={<ContactPage />} />
              <Route path="/quiz" element={<QuizPages />} />
              <Route path="/quiz/:id" element={<CauHoi />} />
              <Route path="/quizadd" element={<QuizzAdd />} />
              <Route path="/examinfo" element={<ExamInfo />} />
              <Route path="/examquizz" element={<ExamQuizz />} />
              <Route path="/test" element={<Tset />} />
              <Route path="/quizadd/:id" element={<QuestionAdd />} />
              {/* <Route path="/mainAccountDetails" element={<MainAccountDetails />} /> */}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
