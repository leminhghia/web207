import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Result = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2000/result')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])
  console.log(data);

  return (
    <div>

    </div>
  )
}

export default Result
