/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext();

const QuizContextProvider = (props) => {
    const [reload, setReload] = useState(true)
    const [visible, setVisible] = useState(false);//constext
    const [userQuizId, setUserQuizId] = useState(null);//conteext
    const value = {
        reload, setReload, visible, setVisible, userQuizId, setUserQuizId
    }

    return (
        <QuizContext.Provider value={value}>
            {props.children}

        </QuizContext.Provider>
    )

}

export default QuizContextProvider;