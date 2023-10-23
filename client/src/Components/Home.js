import React, {useState} from 'react'
import Navbar from './Navbar'
import AttendanceForm from './AttendanceForm'
import '../CSS/Home.css'
import AllStudents from './AllStudents';
import { Link } from 'react-router-dom';

function Home() {
  const [isFormVisible, setFormVisibility] = useState(false);

    const openForm = () => {
        setFormVisibility(true);
    };

    const closeForm = () => {
        setFormVisibility(false);
    };
  return (
    <div>
      <Navbar/>
      <div className=''>
       <ul>
        <li><button className='center butt' onClick={openForm}> Attendance</button></li>
        <li><button className='center butt' ><Link  className='buttt' to='/allstudents'>AllStudents</Link> </button></li>
        <li><button className='center butt' > Attendance</button></li>
        
        </ul> 
        {isFormVisible && <AttendanceForm onClose={closeForm} />}
        
      </div>
    </div>
  )
}

export default Home