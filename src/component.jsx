//import React, { useState, Suspense } from 'react'
import { UseFetch } from './useFetch';
import  Navbar  from './Navbar/navbar'

export default function Component() {
    //const [text, setText] = useState(''); 
    
    //const textOnChange = (event) => {
    //    setText(event.target.value)
    //}
    const {data} = UseFetch("https://pokeapi.co/api/v2/berry")

    const listPokemon = data?.map(pokemon => (
        <li>{pokemon.name}</li>
    ));
    
    return (
        <div>
            <Navbar />
            <h1>POKEMONS</h1>
            <ul>
                {listPokemon}
            </ul>
        </div>
    );
}