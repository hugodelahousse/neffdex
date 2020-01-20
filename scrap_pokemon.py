from tqdm import tqdm
import json
import requests
import requests_cache
requests_cache.install_cache('/tmp/request_cache')


def get_stat(pokemon, stat_name):
    return next(filter(lambda stat: stat['stat']['name'] == stat_name, pokemon['stats']))['base_stat']

def normalize_data(pokemon):
    return {
        'name': pokemon['name'],
        'dexNumber': pokemon['id'],
        'height': pokemon['height'],
        'weight': pokemon['weight'],
        'sprite': pokemon['sprites']['front_default'],
        'species': pokemon['species']['name'],
        'primaryType': pokemon['types'][0]['type']['name'],
        'secondaryType': pokemon['types'][1]['type']['name'] if len(pokemon['types']) > 1 else None,
        'statistic_hp': get_stat(pokemon, 'defense'),
        'statistic_attack': get_stat(pokemon, 'attack'),
        'statistic_defense': get_stat(pokemon, 'defense'),
        'statistic_spatk': get_stat(pokemon, 'special-attack'),
        'statistic_spdef': get_stat(pokemon, 'special-defense'),
        'statistic_speed': get_stat(pokemon, 'speed'),
        'ability_name': pokemon['abilities'][0]['ability']['name'],
        'ability_description': requests.get(pokemon['abilities'][0]['ability']['url']).json()['effect_entries'][0]['effect']
    }

def aws_format(data):
    def data_to_dict(value):
        if value is None:
            return {"NULL": True}
        if isinstance(value, str):
            return {'S': value}
        elif isinstance(value, int) or isinstance(value, float):
            return {'N': str(value)}
        assert value, value

    return {'PutRequest': {"Item": {k: data_to_dict(v) for k, v in data.items()} }}

def main():
    pokemon_data = {}
    for i in tqdm(range(1, 152)):
        response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{i}/')
        assert response.status_code == 200, response.url
        pokemon_data[i] = normalize_data(response.json())

    for pokemon in pokemon_data.values():
        with open(f'pokemon_data/{pokemon["name"]}.json', 'w') as f:
            json.dump({"Pokemon": [aws_format(pokemon)]}, f, indent=4, ensure_ascii=False)


if __name__ == "__main__":
    main()
