import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import * as React from 'react';
import {
  PokemonListItemFragment,
  usePokemonListQueryQuery
} from '../generated/graphql';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  media: {
    height: 140,
    backgroundSize: 'contain',
    imageRendering: 'pixelated'
  },
  cardTitle: {
    textTransform: 'capitalize',
    fontSize: '1.5em'
  }
});

function PokemonTile({ pokemon }: { pokemon: PokemonListItemFragment }) {
  const classes = useStyles({});
  return (
    <Link to={`${pokemon.dexNumber}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardActionArea>
          <CardMedia image={pokemon.sprite} className={classes.media} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.cardTitle}
            >
              {`#${pokemon.dexNumber}: ${pokemon.name}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default function PokemonList() {
  const { error, loading, data } = usePokemonListQueryQuery();

  if (error || loading) {
    return null;
  }

  return (
    <Grid container justify="space-around" spacing={2}>
      {data.pokemons.map(pokemon => (
        <Grid item md={2} xs={4} key={pokemon.dexNumber}>
          <PokemonTile pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
