import React, {useState } from 'react'

export default function List() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        gifts: []
    });
    const [name, isName] = useState(true);
    const [email, isEmail] = useState(false);
    const [gifts, isGifts] = useState(false);

    const handleNameSubmit = e => {
        e.preventDefault();
        setUser({...user})
        isName(false);
        isEmail(true);
    }

    const handleEmailSubmit = e => {
        e.preventDefault();
        setUser({...user})
        isEmail(false);
        isGifts(true);
    }

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    console.log(user)


  return (
    <main className='flex font-primary justify-center bg-green-500 items-center h-screen flex-col'>
        <header className='font-bold text-4xl'>Ho ho ho! Merry Christmas!</header>
        <div className='font-thin text-2xl'>
            {name ? 
                <label htmlFor="" className='flex items-center flex-col gap-y-2'>
                    What's your name?
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                    <button onClick={handleNameSubmit} className='bg-white font-normal text-xl p-1'>Submit</button>
                </label>
                : null
            }
            {
                email ? 
                    <div className="flex flex-col items-center gap-y-2 p-3">
                        Thanks {user.name}!
                        <label htmlFor="" className='flex flex-col items-center'>
                            What's your email?
                            <input 
                                type="text"
                                name="email"
                                onChange={handleChange} 
                                required
                            />
                        </label>
                        <button onClick={handleEmailSubmit} className='bg-white font-normal text-xl p-1'>Submit</button>
                    </div>
                    : null
            }
            {
                gifts ? 
                    <div className='flex flex-col items-center'>
                        <label htmlFor="" className='flex flex-col items-center'>
                            And what would you like for Christmas?
                            <input 
                                type="text"
                                name="email"
                                onChange={handleChange} 
                                required
                            />
                        </label>
                        <button onClick={handleEmailSubmit}>Submit</button>
                    </div>
                    : null
            }
        </div>
    </main>
  )
}
