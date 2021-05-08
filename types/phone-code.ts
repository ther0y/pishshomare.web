export interface PhoneCode {
  name: string;
  type: string;
  eng?: string;
  cities?: { name: string }[];
  slang?: string;
  areas?: { name: string }[];
}
