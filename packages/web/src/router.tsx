import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonDetail from './views/pokemonDetail';
import PokemonList from './views/pokemonList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <PokemonList />
      </Route>
      <Route path="/:dexNumber">
        <PokemonDetail />
      </Route>
    </Switch>
  );
}
