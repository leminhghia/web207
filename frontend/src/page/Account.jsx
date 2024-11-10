import { useState, useEffect } from "react";
import axios from "axios";
const Account = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:2000/user`)
            .then((res) => setUser(res.data))

            .catch((err) => console.log(err));


    }, []);

    return (
        <div>
            {
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    )
}

export default Account
