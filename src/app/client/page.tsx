import PokemonGrid from "@/components/PokemonGrid";
import {getPokemonList} from "@/lib/pokemonAPI";

const Home = async () => {
    const pokemonList: JSON = await getPokemonList();
    return <PokemonGrid pokemonList={pokemonList}/>
}

export default Home;