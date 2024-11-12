import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectSubjects() {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2000/subjects')
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedSubjects([...selectedSubjects, value]);
        } else {
            setSelectedSubjects(selectedSubjects.filter(id => id !== value));
        }
    };

    const handleSubmit = () => {
        axios.post('http://localhost:2000/select-subjects', { subjectIds: selectedSubjects })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Select Subjects for Quiz</h2>
            {subjects.map(subject => (
                <div key={subject.subId}>
                    <input
                        type="checkbox"
                        value={subject.subId}
                        onChange={handleChange}
                    />
                    {subject.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SelectSubjects;

  // const handleSubmit = () => {
    //     axios.post('http://localhost:2000/select-subjects', { subjectIds: selectedSubjects })
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err));
    // };
