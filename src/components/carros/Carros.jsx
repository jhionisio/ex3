
import React from 'react'

export default function Carro(props) {
  return (

    <div>

        <h2>Lista de Carros</h2>
        <ul>
            {props.listaCarrosProps.map((c,i)=>
                <li key={i}>{i+1} - {c}</li>
            )}
        </ul>

    </div>

  )
}