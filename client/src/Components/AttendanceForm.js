import React, { useState } from 'react';
import '../CSS/Button.css'

const AttendanceForm = ({ onClose }) => {
    const [studentId, setStudentId] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const markAttendance = async () => {
        try {
            const response = await fetch('http://localhost:5001/presentstudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ studentId, date, status }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className='pa4 bg-washed-green measure center mt5 w-200'>
            <div className="mb3"><label className="db b lh-copy f4 ">Student ID: </label>
                <input className="pa2 input-reset ba bg-transparent w-100" type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} /></div>

            <div className="mb3"> <label className="db b lh-copy f4">Date: </label>
                <input className="pa2 input-reset ba bg-transparent" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>

            <div className="mb3">
                <label className="db b lh-copy f4">
                     Status:
                    <select className="pa2 w-90" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="absent">Absent</option>
                        <option value="absent">Absent</option>
                        <option value="present">Present</option>
                    </select>
                </label>
            </div>
            
            <button className='bottom' onClick={markAttendance}>Mark Attendance</button>
            <button className="f6 mt2 br-pill ph3 pv2 mb2 dib white bg-red close" onClick={onClose}>Close</button>

        </form>
    );
};

export default AttendanceForm;
