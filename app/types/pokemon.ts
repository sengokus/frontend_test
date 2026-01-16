export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
  sprites: Sprite;
};

type Ability = {
  ability: {
    name: string;
  };
};

type Move = {
  move: {
    name: string;
  };
};

type Sprite = {
  front_default: string;
};
