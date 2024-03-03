import React, { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import ScanFiles from '../ScanFiles';

const Home = () => {
    const { currentUser } = useAuth()
    const [userUrl, setUserUrl] = useState('')
<<<<<<< HEAD
    
=======
    let value
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
    const handleInput = (e) => {
        setUserUrl(e.target.value)
        console.log(e);

    }
    // console.log(currentUser);
    return (
        <>
            {
                <div className=' h-screen pt-12'>
                    <div className='flex justify-center mt-16'>
                        <img className='w-52 h-52' src="replicate-prediction-d6pfwnjb65seipyxicht6ryi6y.png" alt="" />
                        <span className='text-6xl font-semibold text-black flex items-center'>Lakshman Rekha</span>
                    </div>
                    <div className='flex justify-center my-8'>
                        <span className=''>Analyse suspicious files, domains and URLs to detect malware and other viruses.</span>
                    </div>
                    {/* <div className='text-2xl font-bold'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div> */}
<<<<<<< HEAD
                    {/* <div className='flex justify-center'>
                        <input className='w-96 px-2 py-1 rounded-sm border border-gray-400' type='search' value={value} onChange={handleInput}></input>
                    </div> */}
                    <div className='flex justify-center mt-3'>
                        <ScanFiles  />
=======
                    <div className='flex justify-center'>
                        <input className='w-96 px-2 py-1 rounded-sm border border-gray-400' type='search' value={value} onChange={handleInput}></input>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <ScanFiles inputUrl={userUrl} />
>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
                    </div>
                </div>


            }
        </>
    )
}

export default Home