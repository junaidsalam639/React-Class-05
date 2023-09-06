import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, createUserWithEmailAndPassword } from '../Config/Firebase'
import { db , collection , addDoc } from '../Config/Firebase'

const Singup = () => {
    const navigate = useNavigate()
    const login = () => {
        navigate('/login')
    }
  
    
    const singup_user = () => {
        let username = document.getElementById('username').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let repeatPassword = document.getElementById('repeatPassword').value

    if(username == '' || email == '' || password == '' || repeatPassword == ''){
      alert('Please Fill The Input');
    }
    else if(password == repeatPassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            console.log(user);
            try {
                const docRef = await addDoc(collection(db , user.uid), {
                 username : username,
                 email : email,
                 password : password,
                 repeatPassword : repeatPassword,
                });
                console.log("Document written with ID: ", docRef.id);
                alert('Singup successfull');
                navigate('/login')
              } catch (e) {
                console.error("Error adding document: ", e);
              }    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    else{
        alert('Wrong Password!')
    }
    }
        
        return (
        <div className='container'>
            <div className="login-singup-user">
            <h1 className='fw-bold my-3 text-center text-info'>Singup</h1>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Username at least 8 letter" maxLength={8} aria-label="Username" aria-describedby="basic-addon1" id='username' />
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" id='email' />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password at least 8 character" maxLength={8} aria-label="Username" aria-describedby="basic-addon1" id='password' />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="repeat Password at least 8 character" maxLength={8} aria-label="Username" aria-describedby="basic-addon1" id='repeatPassword' />
                </div>
                <button type="button" onClick={singup_user} className="btn btn-outline-info w-100">SingUp</button>
                <a href="" className='my-3' onClick={login}>login?</a>
            </div>
        </div>
    )
}

export default Singup
