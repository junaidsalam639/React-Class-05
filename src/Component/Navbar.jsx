import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, onAuthStateChanged, signOut } from '../Config/Firebase'
import { db , collection , query, where, getDocs  } from '../Config/Firebase'

const Navbar = () => {

    const navigate = useNavigate()
    const login = () => {
        navigate('/login')
    }


    onAuthStateChanged(auth, async(user) => {
        if (user) {
            const uid = user.uid;
            console.log(user, '====', uid);
            const q = query(collection(db, user.uid), where("email", "==", user.email));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                document.getElementById('inner').innerHTML =
                    `<a href="">${doc.data().username}</a>
                    <a href="" id='dash'>Dashboard</a>
                    <a href="" id='logout'>Logout</a>
                    `
            });

        } else {
            navigate('/')
        }

        const dash = document.getElementById('dash');
        if(dash) {
            dash.addEventListener('click' , (e) => {
                navigate('/dashboard')
            })
        }
        
        const logout = document.getElementById('logout');
        if (logout) {
            logout.addEventListener('click', (e) => {
                signOut(auth)
                    .then(() => {
                        alert('Signout successful');
                        window.location.reload();
                        navigate('/')
                    })
                    .catch((error) => {
                        console.error('Signout error:', error);
                    });
            });
        }
    });
    const blogging = () => {
        navigate('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top" data-aos="fade-down">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <h2 className='fw-bold text-light' onClick={blogging}>Blogging_App</h2>
                        </a>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        </ul>
                        <form className="d-flex text-center" role="search" id="inner">
                            <a href="" onClick={login}>Login</a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
