import React from 'react'
import {useQuery} from "@apollo/react-hooks"
import {GET_POKEMON} from "../graphql/get-pokemons"

function PokemonsContainer() {

    const {data: {pokemons = []} = {}} = useQuery(GET_POKEMON, {
        variables: {first: 9}
    })

    if(pokemons){
        console.log(pokemons)
    }
    return (
        <div>
            <h1>hihi</h1>
            {pokemons && pokemons.map(pokemon => JSON.stringify(pokemon))}
        </div>
    )
}

export default PokemonsContainer
