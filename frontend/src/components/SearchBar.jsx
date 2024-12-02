import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'
import { assets } from '../assets/assets'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(QuizContext)

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="web207/frontend/src/page/giuCode.jsx"
          type="text"
          placeholder="Search"
					value={search}
					onChange={(e)=> setSearch(e.target.value)}
        />
				<img className='w-4' src={assets.search_icon} alt="" />
      </div>
			<img onClick={()=> setShowSearch(true)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
