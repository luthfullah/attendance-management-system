import React,{useEffect,useState} from 'react'
import '../CSS/Allstudents.css'

const StudentsList = () => {
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

    // delete student 
    // function delet(id){
    //     alert(id)
    //     fetch(`http://localhost:5001/allstudents/${id}`,{
    //         method:'Delete'
    //     }).then((res) => {
    //         res.json() 
    //             .then((result) => {
    //                 console.log(result);
    //                 alert(result)
    //                 // setStudents("Item Successfully Deleted.....")
    //                 // Students();
    //             })
    //     }).catch(err => console.log(err))
    // }
    const handleDelete = async (id) => {
        try {
            alert(id)
          const response = await fetch(`http://localhost:5001/allstudents/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            // Item deleted successfully, update the list
            Students();
          } else {
            console.error('Failed to delete item');
          }
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };

  return (
    <div style={{ float: 'right', height: '700px', marginTop:'25px',  }} className='w-90 '>
            
            <table className='styled-table'>
         <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No.</th>
                <th style={{textAlign: 'center'}}>Date</th>
                <th style={{textAlign: 'center'}}>Studentid</th>
                <th style={{textAlign: 'center'}}>Action</th>
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
                            <th><button className='btn btn-delete' onClick={e=> handleDelete(item._id)} >Delete</button> </th>
                        </tr>
                    )
                    
                })
            }
         </tbody>
         </table>
        </div>
  )
}

export default StudentsList