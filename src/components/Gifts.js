import React from 'react'

export default function Gifts({ user, setUser }) {
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <header>Now what would you like for Christmas?</header>
        </div>
    )
}
