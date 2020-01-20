// import dynamo from 'dynamodb';
// import Joi from 'joi';

export enum PokemonType {
  NORMAL = 'normal',
  FIRE = 'fire',
  FIGHTING = 'fighting',
  WATER = 'water',
  FLYING = 'flying',
  GRASS = 'grass',
  POISON = 'poison',
  ELECTRIC = 'electric',
  GROUND = 'ground',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  ICE = 'ice',
  BUG = 'bug',
  DRAGON = 'dragon',
  GHOST = 'ghost',
  DARK = 'dark',
  STEEL = 'steel',
  FAIRY = 'fairy',
}

export interface Pokemon {
  dexNumber: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  species: string;
  primaryType: string;
  secondaryType?: string;
  statistic_hp: number;
  statistic_attack: number;
  statistic_defense: number;
  statistic_spatk: number;
  statistic_spdef: number;
  statistic_speed: number;
  ability_name: string;
  ability_desc: string;
}

// export const PokemonDb = dynamo.define('Pokemon', {
//   hashKey: 'name',
//   schema: {
//     dexNumber: Joi.number(),
//     name: Joi.string(),
//     height: Joi.number(),
//     weight: Joi.number(),
//     sprite: Joi.string(),
//     species: Joi.string(),
//     primaryType: Joi.string(),
//     secondaryType: Joi.string(),
//     statistic_hp: Joi.number(),
//     statistic_attack: Joi.number(),
//     statistic_defense: Joi.number(),
//     statistic_spatk: Joi.number(),
//     statistic_spdef: Joi.number(),
//     statistic_speed: Joi.number(),
//     ability_name: Joi.string(),
//     ability_desc: Joi.string(),
//   }
// });
//
// export default PokemonDb;
