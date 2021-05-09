export interface PhoneCode {
  name: string;
  type: string;
  eng?: string;
  cities?: { name: string }[];
  slang?: string;
  areas?: { name: string }[];
}

export interface Code {
  name: {
    fa: string;
    en: string;
  };
  number: {
    fa: string[];
    en: string[];
  };
  metadata?: {
    slang?: string;
    flag?: string;
    emoji?: string;
    areas?: string[];
  };
  type: string;
}
