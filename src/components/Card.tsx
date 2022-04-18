import React, { useEffect, useState } from 'react';
import Button from './Button';
import Axios from 'axios'

export default function Card(CardProps: { name:string; image:string; state:string;  location:string; }) {



    const [type, setType] = useState('primary'); 
    return (
        <div className='col-3 d-flex justify-content-center mt-4'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{CardProps.name} </h5>
                    <img src={CardProps.image} className="card-img-top mb-3 mt-3" alt="..."/>
                        <p>Status: {CardProps.state} </p>
                        <p>Location: {CardProps.location} </p>
                         <Button
                             text="Like"
                             type={type}
                                action={(text: string) => {
                             setType('secondary')
                                   }}
                             />
                    </div>
             </div>
        </div>
    )
}