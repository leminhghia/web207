import { Routes, Route } from 'react-router-dom'
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
import QuestionAdd from './page/QuestionAdd'
import EditQuestion from './page/account/EditQuestion'
import BlogPost from './page/BLOG/BlogPost'
import ScrollToTop from './components/ScrollToTop '
import Text from './page/BLOG/Text'
import AddBlog from './page/BLOG/Addblog'
import UpdateBlog from './page/BLOG/UpdateBlog'
import SettingBlog from './page/BLOG/settingBlog'
import PersonalDataPage from './page/Text/text'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <ScrollToTop />
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="flex-grow relative z-0">
        <Routes>
          <Route path="/account" element={<Account />} />
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
          <Route path="/taoDeThi" element={<EditQuestion />} />
          <Route path="/docThemBlog" element={<BlogPost />} />
          {/* <Route path="/mainAccountDetails" element={<MainAccountDetails />} /> */}
          <Route path="/ketqua" element={<ResultOnpage />} />
          <Route path="/text1" element={<Text />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/updateBlog" element={<UpdateBlog />} />
          <Route path="/settingBlog" element={<SettingBlog />} />
          <Route path="/text3" element={<PersonalDataPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
