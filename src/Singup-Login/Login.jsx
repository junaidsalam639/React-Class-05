import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from '../Config/Firebase'

const Login = () => {

    const navigate = useNavigate()
    const singup = () => {
        navigate('/singup')
    }

    const login_user = () => {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        if (email == '' || password == '') {
            alert('Please Fill The Input');
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    alert('Login successfull');
                    navigate('/dashboard')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Your SingUp Is First');
                });
        }

    }

    return (
        <div className='container'>
            <div className="login-singup-user">
                <h1 className='fw-bold my-3 text-center text-info'>Login</h1>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" id='email' />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password at least 8 character" aria-label="Username" aria-describedby="basic-addon1" id='password' />
                </div>
                <button type="button" onClick={login_user} className="btn btn-outline-info w-100">Login</button>
                <a href="" className='my-3' onClick={singup}>singup?</a>
            </div>
        </div>
    )
}

export default Login