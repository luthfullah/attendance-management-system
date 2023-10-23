import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'
import '../CSS/signin.css'

const SignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  })



  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
        // localStorage.setItem('usertype', data.usertype);

      if (data.token && data.usertype) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        if (data.usertype === "admin") {
          navigate('/adminpanel')
        } else {
          navigate('/home')
        }
      }


    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div >
      <div className='shadow black-80 shadow-5 measure center f3 css-color pt3 mt5'>
        {/*  */}
        <img src={logo}  height='110px' width='200px' className='center flex  grow' />
        <article style={{ padding: '120px' }} >
          <form method="get" accept-charset="utf-8" onSubmit={submithandler}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Sign In</legend>

              <div className="mt3">
                <label className="db fw4 lh-copy f3" >Email</label>
                <input className="pa2 input-reset ba hover-bg-black hover-white w-100 measure" type="email" name="email" id="email-address" onChange={(e) => setValues({ ...values, email: e.target.value })} />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f3" >Password</label>
                <input className="pa2 input-reset ba hover-bg-black hover-white w-100 measure" type="password" name="password" id="email-address" onChange={(e) => setValues({ ...values, password: e.target.value })} />
              </div>
            </fieldset>
            {/* <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="button" value="Sign Up" /></div> */}
            <button className="b ph3 pv2 bg-black white input-reset ba b--black grow pointer mt4">SignIn</button>
            <button className='b css-color ml4 ph3 pv2 grow mt4 '><a className="black css-color no-underline " href="/signup">SignUp</a></button>

          </form>

        </article>
      </div>
    </div>
  )
}

export default SignIn