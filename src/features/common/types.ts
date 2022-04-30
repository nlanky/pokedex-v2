export interface APIResource {
  url: string;
}

export interface Description {
  description: string;
  language: NamedAPIResource;
}

export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

export interface Genus {
  genus: string;
  language: NamedAPIResource;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface NamedAPIResource extends APIResource {
  name: string;
}

export interface VerboseEffect extends Effect {
  short_effect: string;
}
