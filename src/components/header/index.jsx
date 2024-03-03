import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-14 border-b place-content-center items-center bg-gray-200'>
            {
                userLoggedIn
                    ?
                    <>
                        <div className='flex'>
                            <img className='w-10 h-10 left-2 top-2 fixed' src="replicate-prediction-d6pfwnjb65seipyxicht6ryi6y.png" alt="" />
<<<<<<< HEAD
                            <Link className='text-md text-blue-600 fixed right-44 top-4' to={'articles'}>News</Link>
=======
                            <Link className='text-md text-blue-600 fixed right-44 top-4' to={'articles'}>Articles</Link>
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
                            <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-md text-blue-600  bg-blue-600 text-white px-4 py-1 rounded-xl right-8 fixed top-3'>Logout</button>
                        </div>
                    </>
                    :
                    <>

                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}

export default Header