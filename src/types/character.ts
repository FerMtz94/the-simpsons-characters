export interface Character {
	id: number;
	age: number;
	birthdate: string;
	gender: string;
	name: string;
	occupation: string;
	portrait_path: string;
	phrases: string[];
	status: string;
}

export interface CharacterExtended extends Character {
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  first_appearance_ep: FirstAppearanceEp;
  first_appearance_sh: FirstAppearanceSh;
}

export interface FirstAppearanceEp {
  id: number;
  airdate: string;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}

export interface FirstAppearanceSh {
  id: number;
  airdate: string;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}
