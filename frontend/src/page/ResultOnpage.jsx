import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResultOnpage = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:2000/api/userquiz/result/list/${id}`)
                setData(res.data)
            } catch (error) {
                console.error(error);

            }
        }
        fetchData()
    }, [id])
    return (
        <div>
            {
                data.map((item, index) => {
                    const formatDate = new Date(item.date_taken).toLocaleDateString('vi-VN');
                    return (
                        <div key={index}>
                            <p>{item.email}</p>
                            <p>{formatDate}</p>
                            <p>{item.time_taken}</p>
                            <p>{item.score}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ResultOnpage
