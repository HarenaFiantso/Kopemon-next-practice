'use client'

import {useState} from "react";

/* TODO: Remove 'any' type and add an explicit type by the way */
const PokemonGrid = ({pokemonList}: any) => {
    const [searchText, setSearchText] = useState('');

    /* JSON Structure:  { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/1/' } */
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }
    const filteredPokemonList = searchFilter(pokemonList);
    return (
        <>
            
        </>
    );
}

export default PokemonGrid;