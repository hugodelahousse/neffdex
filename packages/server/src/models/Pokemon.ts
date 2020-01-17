import mongoose from 'mongoose';

enum PokemonType {
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

export interface Pokemon extends mongoose.Document {
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

const schema = new mongoose.Schema({
  dexNumber: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  sprite: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  primaryType: {
    type: String,
    required: true,
    enum: Object.values(PokemonType)
  },
  secondaryType: {
    type: String,
    required: false,
    enum: Object.values(PokemonType).concat([null])
  },
  statistic_hp: {
    type: Number,
    required: true
  },
  statistic_attack: {
    type: Number,
    required: true
  },
  statistic_defense: {
    type: Number,
    required: true
  },
  statistic_spatk: {
    type: Number,
    required: true
  },
  statistic_spdef: {
    type: Number,
    required: true
  },
  statistic_speed: {
    type: Number,
    required: true
  },
  ability_name: {
    type: String,
    required: true
  },
  ability_description: {
    type: String,
    required: true
  }
});


export default mongoose.model('Pokemon', schema);
