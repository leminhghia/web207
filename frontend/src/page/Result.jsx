import axios from 'axios'
import  { useEffect, useState } from 'react'

const Result = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:2000/api/userquiz/result/list`)
                setData(res.data)
            } catch (error) {
                console.error(error);

            }
        }
        fetchData()
    },[])
    console.log(data);
    
    return (
        <div>

        </div>
    )
}

export default Result
