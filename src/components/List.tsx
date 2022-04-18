import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Card from './Card';

export default function List() {

    const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/character')
          .then((res) => {
            setPersonajes(res.data.results)
          });
      }, []) 

    return (
        
    <div className='row bg-light mb-0'>
        {personajes?.map((personaje:any,index) => (
        <Card
            key={index}
            name={personaje.name} 
            image={personaje.image}
            state={personaje.status}
            location={personaje.location.name}
        />
        ))}
    </div>
    
    )   
}