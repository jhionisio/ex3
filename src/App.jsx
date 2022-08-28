import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Carteirinhas from './components/carteirinhas/Carteirinha';
import Carros from './components/carros/Carros';
import Semaforo from './components/semaforo/Semaforo';
import Menu from './components/menu/Menu';

export default function App() {

    const listaDeCarros = ['Carro1','Carro2','Carro3','Carro4','Carro5','Carro6','Carro7','Carro8','Carro9','Carro10']

    return(
        <>

            <h1>João Marcelo Piccablotto de Abreu - 1TDSR - 2022</h1>

            <Menu />
            <Routes>

                <Route path='/carros' element={<Carros listaCarrosProps={listaDeCarros} />} />
                <Route path='/semaforo' element={<Semaforo />}/>
                <Route path='/carteirinha' element={<Carteirinhas />} />

            </Routes>

        </>
    );
}