import React, { useEffect, useState } from 'react';

export default function Button(ButtonProps: { type: string; text: string | undefined; action: Function; }) {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 5) {
            alert('Ya has dado la cantidad máxima de likes')
            ButtonProps.action();
        }
    }, [count]);
    return (
        <button 
            className={'btn text-uppercase col-12 pt-3 pb-3 btn-' + ButtonProps.type} 
            onClick={() => {
                setCount(count + 1);
                
            }}
        >
          {ButtonProps.text} ({ count })
        </button>
    )
}