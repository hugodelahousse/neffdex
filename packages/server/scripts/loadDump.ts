import fs from 'fs';
import mongoose from 'mongoose';
import ora from 'ora';
import pokemonModel, { Pokemon } from '../src/models/Pokemon';

async function main() {
  const fileContents = fs.readFileSync(process.argv[2], 'utf8');
  const dumpData = JSON.parse(fileContents) as [Pokemon];
  await mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  const spinner = ora('Loading pokemons').start();

  for (const pokemon of Object.values(dumpData)) {
    spinner.text = `#${pokemon.dexNumber}: ${pokemon.name}`;
    const exists = await pokemonModel.findOne({ dexNumber: pokemon.dexNumber });
    if (!exists) {
      await pokemonModel.create(pokemon);
    }
  }
  spinner.succeed('Loaded all pokemons !');
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
