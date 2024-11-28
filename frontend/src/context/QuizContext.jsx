/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext()

const QuizContextProvider = (props) => {
  const [reload, setReload] = useState(false)
  const [visible, setVisible] = useState(false) //constext
  const [userQuizId, setUserQuizId] = useState(null) //conteext
  const [idthemquiz,setIdthemquiz] = useState(0)
  const [tab, setTab] = useState(1)
  const [checkId,setCheckId] = useState('')
 

  const value = {
    reload,
    setReload,
    visible,
    setVisible,
    userQuizId,
    setUserQuizId, tab, setTab,idthemquiz,setIdthemquiz,checkId,setCheckId
  }

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  )
}

export default QuizContextProvider
