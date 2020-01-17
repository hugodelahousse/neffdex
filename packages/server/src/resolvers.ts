import pokemonModel, { Pokemon } from './models/Pokemon';

export default {
  Query: {
    pokemon: async (obj: any, { dexNumber }: { dexNumber: string }) => {
      const pokemonData = (await pokemonModel.findOne({ dexNumber })) as Pokemon;
      return {
        ...pokemonData.toObject(),
        primaryType: pokemonData.primaryType.toUpperCase(),
        secondaryType: pokemonData.secondaryType ? pokemonData.secondaryType.toUpperCase() : null,
        statistics: {
          hp: pokemonData.statistic_hp,
          attack: pokemonData.statistic_attack,
          defense: pokemonData.statistic_defense,
          spatk: pokemonData.statistic_spatk,
          spdef: pokemonData.statistic_spdef,
          speed: pokemonData.statistic_speed
        },
        ability: {
          name: pokemonData.ability_name,
          description: pokemonData.ability_desc,
        }
      };
    },
    pokemons: async () => {
      return pokemonModel.find();
    }
  }
};
