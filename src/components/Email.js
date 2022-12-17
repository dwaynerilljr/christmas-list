import React from 'react'

export default function Email({ user, email, setUser, isEmail, isGifts }) {

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleEmailSubmit = e => {
        e.preventDefault();
        setUser({...user})
        isEmail(false);
        isGifts(true);
    }

  return (
    <>
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
    </>
  )
}
