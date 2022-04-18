import React from 'react'
import useUser from '../hooks/useUser'

export default function UserCard() {
    const { name, picture } = useUser();
  return (
    <div className='card  bg-dark'>
        <div className='card-body  bg-dark '>
            <section className='row'>
                <section className='col'>
                    <h5 className='card-title text-primary'>
                        {name.first}
                    </h5>
                    <h6 className='card-subtitle text-white'>
                    {name.last}
                    </h6>
                </section>
                <section className='col'>
                    <img src={picture?.medium} alt="profile-user" height={60} width={60} />
                </section>
            </section>
        </div>
    </div>
  )
}