import React from 'react'

export default function Name( {setUser, user, name, isName, isEmail} ) {
    
    const handleSubmit = e => {
        e.preventDefault();
        setUser({...user})
        isName(false);
        isEmail(true);
    }

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

  return (
    <div>
        {name ? 
                <label htmlFor="" className='flex items-center flex-col gap-y-2'>
                    What's your name?
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                    <button onClick={handleSubmit} className='bg-white font-normal text-xl p-1'>Submit</button>
                </label>
                : null
        }
    </div>
  )
}
