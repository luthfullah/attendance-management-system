import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/signin.css'

const SignUp = () => {
    let role=''; 
    let navigate=useNavigate();
    const [values, setvalues] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: role ? '': 'user'
    });
    const handlesubmt = (e) => {
        e.preventDefault();
        fetch('http://localhost:5001/', {
            method: "POST",
            headers: {
                'accept': 'application/json',
                "content-type": "application/json"
            },
            body: JSON.stringify(values)
        })
        
            .then((res)=>{
                    return navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            
            <article style={{ marginTop: "50px", padding: '50px' }} className=" shadow black-80 shadow-5 measure center f3 css-color">
                <form onSubmit={handlesubmt} method="get" accept-charset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="center b f2">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f3" >Name</label>
                            <input className="pa2 input-reset ba w-100 measure hover-bg-black hover-white" type="text" name="name" id="email-address" onChange={e => setvalues({ ...values, name: e.target.value })} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f3" >Email</label>
                            <input className="pa2 input-reset ba hover-bg-black hover-white w-100 measure" type="email" name="email" id="email-address" onChange={e => setvalues({ ...values, email: e.target.value })} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f3" >Password</label>
                            <input className="pa2 input-reset ba hover-bg-black hover-white w-100 measure" type="password" name="password" id="email-address" onChange={e => setvalues({ ...values, password: e.target.value })} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f3" >Number</label>
                            <input className="pa2 input-reset ba hover-bg-black hover-white w-100 measure" type="number" name="phone" id="password" onChange={e => setvalues({ ...values, phone: e.target.value })} />
                        </div>
                    </fieldset>
                    {/* <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="button" value="Sign Up" /></div> */}
                    <button className="b ph3 pv2 input-reset ba b--black bg-black white grow pointer">SignUp</button>
                    <button className='b css-color  ml4 ph3 pv2 grow '><a className="css-color no-underline black" href="/">SignIn</a></button>

                </form>
            </article>
        </div>
    )
}

export default SignUp