export class PokemonCard {
    id: string;
    name: string;
    ability: PokemonCardAbility
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
    text: Array<string>;
    attacks: Array<PokemonCardAttack>;
    weaknesses: Array<PokemonCardWeakness>;
    resistances: Array<PokemonCardResistance>;
}

export class PokemonCardAbility {
    name: string;
    text: string;
    type: string;
}

export class PokemonCardAttack {
    cost: Array<string>;
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
}

export class PokemonCardWeakness {
    type: string;
    value: string;
}

export class PokemonCardResistance {
    type: string;
    value: string;
}