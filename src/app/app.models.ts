export interface Skill {
  name: string;
  value?: number;
  favorite?: boolean;
}

export interface SkillsGrouping {
  name: string;
  skills: Skill[];
  fullWidth?: boolean;
}

export interface Experience {
  business: string;
  startDate: Date;
  endDate?: Date;
  work: string;
  url: string;
  description?: string;
  descriptionUrl?: string;
}

export interface Bio {
  name: string;
  surnames: string;
  description: string;
  imgUrl: string;
  work: string;
}

export interface Network {
  networkName: string;
  userName: string;
  class: string;
  url: string;
}

export interface Talk {
  name: string;
  place: string;
  date: Date;
  url: string;
}
