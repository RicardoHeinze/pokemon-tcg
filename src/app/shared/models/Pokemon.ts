export class PokemonCard {
    id: string;
    name: string;
    ability: PokemonAbility
    convertedRetreatCost: number;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: Array<string>;
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    retreatCost: Array<string>;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Array<PokemonAttack>;
    weaknesses: Array<PokemonWeakness>;
}

export class PokemonAbility {
    name: string;
    text: string;
    type: string;
}

export class PokemonAttack {
    cost: Array<string>;
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
}

export class PokemonWeakness{
    type: string;
    value: string;
}