import { useContext } from 'react'
import AddBlog from './Addblog'
import UpdateBlog from './UpdateBlog'
import { QuizContext } from '../../context/QuizContext'
const SettingBlog = () => {
  const { tab, setTab } = useContext(QuizContext)

  return (
    <div>
      {/*  */}
      <div className="flex space-x-4">
        <button
          onClick={() => setTab('1')}
          className={`px-4 py-2 ${
            tab === '1' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Add Blog
        </button>
        <button
          onClick={() => setTab('2')}
          className={`px-4 py-2 ${
            tab === '2' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Update Blog
        </button>
      </div>
      <div>
        {tab === '1' && <AddBlog />}
        {tab === '2' && <UpdateBlog />}
      </div>
    </div>
  )
}

export default SettingBlog
