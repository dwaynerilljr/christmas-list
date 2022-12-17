import React, {useState } from 'react'
import Name from './Name';
import Email from './Email'
import Gifts from './Gifts';

export default function List() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        gifts: []
    });
    const [name, isName] = useState(true);
    const [email, isEmail] = useState(false);
    const [gifts, isGifts] = useState(false);

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    console.log(user)


  return (
    <main className='flex font-primary justify-center bg-green-500 items-center h-screen flex-col'>
        <header className='font-bold text-4xl'>Ho ho ho! Merry Christmas!</header>
        <div className='font-thin text-2xl'>
            <Name setUser={setUser} user={user} name={name} isName={isName} isEmail={isEmail}/>
            <Email email={email} isEmail={isEmail} user={user} setUser={setUser} isGifts={isGifts} />
            <Gifts user={user} setUser={setUser} />
        </div>
    </main>
  )
}
