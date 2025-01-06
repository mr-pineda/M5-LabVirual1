export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  description: string;
  services: string[];
  years: number;
  img?: string;
  availableTimes: number[];
};
