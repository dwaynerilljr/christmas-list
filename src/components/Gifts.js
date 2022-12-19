import React from 'react'

export default function Gifts({ user, setUser }) {
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <form action="" className='flex space-between w-full'>
            <label htmlFor="gift" className='flex space-between'>
                <input type="text" name="gift" id="" />
            </label>
        </form>
    )
}
