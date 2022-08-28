import React from 'react'
import { useState } from 'react';

export default function Semaforo() {

    const [cor] = useState(["amarelo", "verde", "vermelho"]);
    const [count, setCount] = useState(0)

    const conta = () => {

        if(count === 0) {

            setCount(count + 1)

            document.getElementById('divTroca').style.backgroundColor="green"

        } 
        else if(count === 1) {

            setCount(count + 1)

            document.getElementById('divTroca').style.backgroundColor="red"

        } 
        else if(count === 2) {

            setCount(count - 2)
            
            document.getElementById('divTroca').style.backgroundColor="yellow"

        }

    }

    return(

        <div>
            <h2 id='sm'>
                {
                    cor[count]
                }
            </h2>

            <div style={{backgroundColor:'green'}} id="divTroca" className='circulo'/>

            <input 
                className='btn'
                value="Troca" 
                type="button" 
                onClick={() => conta()} 
            />

        </div>

    );
}