import React, { useState } from 'react'

import './../../css/carteirinha.css';

import beyonce from '../../images/Mulher1.jpeg'
import rihanna from '../../images/Mulher2.jpeg'
import rosalia from '../../images/Mulher3.jpeg'
import jennifer from '../../images/Mulher4.jpeg'

export default function Carteirinha() {

    const[name, setName] = useState('')
    const[rm, setRm] = useState('')
    const[classes, setClasses] = useState('')
    const[career, setCareer] = useState('')

    return(
        <>

            <h1>Carteirinhas</h1>

            <section className='carteira'>

                <img 
                    className='img'
                    src={beyonce} 
                    alt="Mulher1" 
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - Mulher1</h2>
                    <h2 className='h2'>RM - 1</h2>
                    <h2 className='h2'>Sala - Sala1</h2>
                    <h2 className='h2'>Curso - Curso1</h2>
                </div>

            </section>

            <section className='carteira'>   

                <img 
                    className='img'
                    src={rihanna} 
                    alt="Mulher2" 
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - Mulher2</h2>
                    <h2 className='h2'>RM - 2</h2>
                    <h2 className='h2'>Sala - Sala2</h2>
                    <h2 className='h2'>Curso - Curso2</h2>
                </div>

            </section>

            <section className='carteira'>

                <img 
                    className='img'
                    src={rosalia} 
                    alt="Mulher3"
                />

                <div className='divC'>
                    <h2 className='h2'>Nome - Mulher3</h2>
                    <h2 className='h2'>RM - 3</h2>
                    <h2 className='h2'>Sala - Sala3</h2>
                    <h2 className='h2'>Curso - Curso3</h2>
                </div>

            </section>
                
            <section className='carteiraJ'>

                <img 
                    className='img'
                    src={jennifer} 
                    alt="Mulher4" 
                />

                <div className='j'>
                    <input 
                        type="text" 
                        onChange={
                            (e) => setName(e.target.value)
                        } 
                    />
                    <label>Nome</label>
                    <h2 className='h2'>Nome - {name}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setRm(e.target.value)
                        } 
                    />
                    <label>RM</label>
                    <h2 className='h2'>RM - {rm}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setClasses(e.target.value)
                        } 
                    />
                    <label>Turma</label>
                    <h2 className='h2'>Sala - {classes}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (e) => setCareer(e.target.value)
                        } 
                    />
                    <label>Curso</label>
                    <h2 className='h2'>Curso - {career}</h2>
                </div>

            </section>
        </>
    )
}