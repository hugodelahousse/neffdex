import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ability = {
  __typename?: 'Ability';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  dexNumber: Scalars['Int'];
  name: Scalars['String'];
  ability: Array<Ability>;
  height: Scalars['Int'];
  weight: Scalars['Int'];
  sprite: Scalars['String'];
  species: Scalars['String'];
  primaryType: Type;
  secondaryType?: Maybe<Type>;
  statistics: Statistics;
};

export type Query = {
  __typename?: 'Query';
  pokemon: Pokemon;
  pokemons: Array<Pokemon>;
};

export type QueryPokemonArgs = {
  dexNumber: Scalars['Int'];
};

export type Statistics = {
  __typename?: 'Statistics';
  hp: Scalars['Int'];
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  spatk: Scalars['Int'];
  spdef: Scalars['Int'];
  speed: Scalars['Int'];
};

export enum Type {
  Normal = 'NORMAL',
  Fire = 'FIRE',
  Fighting = 'FIGHTING',
  Water = 'WATER',
  Flying = 'FLYING',
  Grass = 'GRASS',
  Poison = 'POISON',
  Electric = 'ELECTRIC',
  Ground = 'GROUND',
  Psychic = 'PSYCHIC',
  Rock = 'ROCK',
  Ice = 'ICE',
  Bug = 'BUG',
  Dragon = 'DRAGON',
  Ghost = 'GHOST',
  Dark = 'DARK',
  Steel = 'STEEL',
  Fairy = 'FAIRY'
}

export type AllStatisticsFragment = { __typename?: 'Pokemon' } & {
  statistics: { __typename?: 'Statistics' } & Pick<
    Statistics,
    'hp' | 'attack' | 'defense' | 'spatk' | 'spdef' | 'speed'
  >;
};

export type PokemonDetailsFragment = { __typename?: 'Pokemon' } & Pick<
  Pokemon,
  'name' | 'primaryType' | 'secondaryType' | 'sprite' | 'weight' | 'height'
> &
  AllStatisticsFragment;

export type PokemonDetailQueryQueryVariables = {
  dexNumber: Scalars['Int'];
};

export type PokemonDetailQueryQuery = { __typename?: 'Query' } & {
  pokemon: { __typename?: 'Pokemon' } & PokemonDetailsFragment;
};

export type PokemonListItemFragment = { __typename?: 'Pokemon' } & Pick<
  Pokemon,
  'dexNumber' | 'name' | 'sprite'
>;

export type PokemonListQueryQueryVariables = {};

export type PokemonListQueryQuery = { __typename?: 'Query' } & {
  pokemons: Array<{ __typename?: 'Pokemon' } & PokemonListItemFragment>;
};

export const AllStatisticsFragmentDoc = gql`
  fragment AllStatistics on Pokemon {
    statistics {
      hp
      attack
      defense
      spatk
      spdef
      speed
    }
  }
`;
export const PokemonDetailsFragmentDoc = gql`
  fragment PokemonDetails on Pokemon {
    name
    primaryType
    secondaryType
    sprite
    weight
    height
    ...AllStatistics
  }
  ${AllStatisticsFragmentDoc}
`;
export const PokemonListItemFragmentDoc = gql`
  fragment PokemonListItem on Pokemon {
    dexNumber
    name
    sprite
  }
`;
export const PokemonDetailQueryDocument = gql`
  query PokemonDetailQuery($dexNumber: Int!) {
    pokemon(dexNumber: $dexNumber) {
      ...PokemonDetails
    }
  }
  ${PokemonDetailsFragmentDoc}
`;
export type PokemonDetailQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: PokemonDetailQueryQueryVariables; skip?: boolean }
    | { skip: boolean });

export const PokemonDetailQueryComponent = (
  props: PokemonDetailQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >
    query={PokemonDetailQueryDocument}
    {...props}
  />
);

export type PokemonDetailQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  PokemonDetailQueryQuery,
  PokemonDetailQueryQueryVariables
> &
  TChildProps;
export function withPokemonDetailQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables,
    PokemonDetailQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables,
    PokemonDetailQueryProps<TChildProps>
  >(PokemonDetailQueryDocument, {
    alias: 'pokemonDetailQuery',
    ...operationOptions
  });
}

/**
 * __usePokemonDetailQueryQuery__
 *
 * To run a query within a React component, call `usePokemonDetailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonDetailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonDetailQueryQuery({
 *   variables: {
 *      dexNumber: // value for 'dexNumber'
 *   },
 * });
 */
export function usePokemonDetailQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >(PokemonDetailQueryDocument, baseOptions);
}
export function usePokemonDetailQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PokemonDetailQueryQuery,
    PokemonDetailQueryQueryVariables
  >(PokemonDetailQueryDocument, baseOptions);
}
export type PokemonDetailQueryQueryHookResult = ReturnType<
  typeof usePokemonDetailQueryQuery
>;
export type PokemonDetailQueryLazyQueryHookResult = ReturnType<
  typeof usePokemonDetailQueryLazyQuery
>;
export type PokemonDetailQueryQueryResult = ApolloReactCommon.QueryResult<
  PokemonDetailQueryQuery,
  PokemonDetailQueryQueryVariables
>;
export const PokemonListQueryDocument = gql`
  query PokemonListQuery {
    pokemons {
      ...PokemonListItem
    }
  }
  ${PokemonListItemFragmentDoc}
`;
export type PokemonListQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >,
  'query'
>;

export const PokemonListQueryComponent = (
  props: PokemonListQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >
    query={PokemonListQueryDocument}
    {...props}
  />
);

export type PokemonListQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  PokemonListQueryQuery,
  PokemonListQueryQueryVariables
> &
  TChildProps;
export function withPokemonListQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables,
    PokemonListQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables,
    PokemonListQueryProps<TChildProps>
  >(PokemonListQueryDocument, {
    alias: 'pokemonListQuery',
    ...operationOptions
  });
}

/**
 * __usePokemonListQueryQuery__
 *
 * To run a query within a React component, call `usePokemonListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonListQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePokemonListQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >(PokemonListQueryDocument, baseOptions);
}
export function usePokemonListQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PokemonListQueryQuery,
    PokemonListQueryQueryVariables
  >(PokemonListQueryDocument, baseOptions);
}
export type PokemonListQueryQueryHookResult = ReturnType<
  typeof usePokemonListQueryQuery
>;
export type PokemonListQueryLazyQueryHookResult = ReturnType<
  typeof usePokemonListQueryLazyQuery
>;
export type PokemonListQueryQueryResult = ApolloReactCommon.QueryResult<
  PokemonListQueryQuery,
  PokemonListQueryQueryVariables
>;
