import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../ProductItem';
import { Link } from 'react-router-dom';

function SelectSubjects() {
    const [subjects, setSubjects] = useState([]);
    const [selectSub, setSelectSub] = useState([]);
    const [userSubjects, setUserSubjects] = useState([]); // To store the subjects the user has already registered for

    useEffect(() => {
        axios.get('http://localhost:2000/subjects')
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:2000/checkSubRes')
            .then(res => setUserSubjects(res.data)) // Store the data in state
            .catch(err => console.log(err));
    }, []);

   
    const isSubjectRegistered = (subId) => {
        return userSubjects.some(subject => subject.subId === subId);
    };

    const confirmAndSelect = (subId) => {
        const confirmation = window.confirm("Bạn muốn đăng ký môn học này?");
        if (confirmation) {
            axios.post('http://localhost:2000/registerSubject', { subId })
                .then(res => {
                    console.log(res.data);
                    setUserSubjects(prev => [...prev, { subId }]);
                    setSelectSub(subId); 
                })
                .catch(err => console.log(err));
        } else {
            console.log("Đăng ký bị hủy.");
        }
    };

    return (
        <div>
            <h2>Select Subjects for Quiz</h2>
            {subjects.map((item, index) => (
                <div key={index}>
                    {isSubjectRegistered(item.subId) ? (
                        <Link to={`/quiz/${item.subId}`}>
                            <ProductItem Id={item.subId} Name={item.name} />
                        </Link>
                    ) : (
                        <div onClick={() => confirmAndSelect(item.subId)}>
                            <ProductItem Id={item.subId} Name={item.name} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SelectSubjects;
