/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { subjects, ADAV, ADTE, ADBS, ADUI, ASNE, CLCO, DBAV, DBBS, GAME, HTCS, INMA, JAAV, JABS, JSPR, LAYO, MOWE, PHPP, PMAG, VBPR, WEBU } from '../assets/assets'




// eslint-disable-next-line react-refresh/only-export-components
export const QuizContext = createContext();
const QuizContextProvider = (props) => {
    const [reload, setReload] = useState(true)



    const value = {
        subjects, ADAV, ADTE, ADBS, ADUI, ASNE, CLCO, DBAV, DBBS, GAME, HTCS, INMA, JAAV, JABS, JSPR, LAYO, MOWE, PHPP, PMAG, VBPR, WEBU, reload, setReload
    }

    return (
        <QuizContext.Provider value={value}>
            {props.children}

        </QuizContext.Provider>
    )

}

export default QuizContextProvider;