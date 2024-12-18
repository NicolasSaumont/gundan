// PUBLIC HOME PAGE
export interface IGameSectionCardDetails {
  id: number;
  sourceImage: string;
  title: string;
  content: string;
  effect: "gearFifth" | "rasengan" | "enseiHeidan";
}

export type IGameSectionCards = IGameSectionCardDetails[];
