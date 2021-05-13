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
    address?: string;
    email?: string;
    website?: string;
    description?: string;
  };
  type: string;
}
