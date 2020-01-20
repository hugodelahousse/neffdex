import { Pokemon } from './dynamo_models/Pokemon';
import dynamoDB from "./dynamo";


function dynamoItemToPokemon(item: any) {
  return {
    dexNumber: item.dexNumber.N,
      name: item.name.S,
      species: item.species.S,
      sprite: item.sprite.S,
      primaryType: item.primaryType.S.toUpperCase(),
      secondaryType: item.secondaryType.NULL ? null : item.secondaryType.S,
      statistics: {
      hp: item.statistic_hp.N,
        attack: item.statistic_attack.N,
        defense: item.statistic_defense.N,
        spatk: item.statistic_spatk.N,
        spdef: item.statistic_spdef.N,
        speed: item.statistic_speed.N
    },
    ability: {
      name: item.ability_name.S,
        description: item.ability_description.S,
    }
  };
}

export default {
  Query: {
    pokemon: async (obj: any, { name }: { name: string }) => {
      const request = await dynamoDB.getItem({
        TableName: process.env.DYNAMODB_TABLE,
        Key: { 'name': { S: name } },
      }).promise();

      return dynamoItemToPokemon(request.Item);
    },
    pokemons: async () => {
      const data = await dynamoDB.scan({TableName: process.env.DYNAMODB_TABLE}).promise();
      return data.Items.map((item: any) => dynamoItemToPokemon(item)).sort((a, b) => {
        return a.dexNumber - b.dexNumber;
      });
    },
    test: () => {
      return 'Hello World !';
    }
  }
};
