// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn,SignUp,Home,About ,AllStudents} from './Components';
import { Admin } from './Admin';



function App() {

  return (
    <div className="App">


     <BrowserRouter>
        <Routes>
          {/* Authentication */}
          <Route path='/' element={<SignIn />} />        
          <Route path='/signup' element={<SignUp />} />

          {/* dashboard */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/allstudents' element={<AllStudents />} />
         

          {/* Admin side */}
          <Route path="/adminpanel" element={<Admin />} />
         

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
