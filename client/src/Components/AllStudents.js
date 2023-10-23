import React,{useEffect,useState} from 'react'
import '../CSS/Allstudents.css'

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        Students();
    }, [])
    function Students() {
        fetch('http://localhost:5001/allstudents').then((res) => {
            res.json()
                .then((result) => {
                    console.log(result.AllStudents);
                    setStudents(result.AllStudents)
                })
        }).catch(err => console.log(err))
    }
  return (
    <div style={{ float: 'right', height: '700px', marginTop:'25px',  }} className='w-90 '>
            
            <table className='styled-table'>
         <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No.</th>
                <th style={{textAlign: 'center'}}>Date</th>
                <th style={{textAlign: 'center'}}>Studentid</th>
                
            </tr>
         </thead>
        
         <tbody>
            {
                students.map((item, index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope= 'row'>{index+1}</th>
                            <th >{item.date}</th>
                            <th >{item.studentId}</th>
                           
                        </tr>
                    )
                    
                })
            }
         </tbody>
         </table>
        </div>
  )
}

export default AllStudents