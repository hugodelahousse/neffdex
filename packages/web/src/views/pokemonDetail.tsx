import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import {
  AllStatisticsFragment,
  usePokemonDetailQueryQuery
} from '../generated/graphql';

function PokemonStatsChart({ statistics }: AllStatisticsFragment) {
  return <span>Hello World</span>;
  // return (
  // <Radar
  //   width={500}
  //   height={500}
  //   legend={[
  //     'HP',
  //     'Attack',
  //     'Defense',
  //     'Special Attack',
  //     'Special Defense',
  //     'Speed'
  //   ]}
  //   datasets={[
  //     {
  //       data: [
  //         statistics.hp,
  //         statistics.attack,
  //         statistics.defense,
  //         statistics.spatk,
  //         statistics.spdef,
  //         statistics.speed
  //       ]
  //     }
  //   ]}
  // />
  // );
  //   <RadarChart
}

export default function PokemonDetail() {
  const { dexNumber } = useParams();

  const { error, loading, data } = usePokemonDetailQueryQuery({
    variables: { dexNumber: parseInt(dexNumber, 10) }
  });

  if (error || loading) {
    return null;
  }

  return <PokemonStatsChart statistics={data.pokemon.statistics} />;
}
