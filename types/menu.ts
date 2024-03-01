export interface IMenuItem {
  label: string;
  icon: string;
  path: string;
}

export type IMenuItems = Array<IMenuItem>;

export interface IMenuPart {
  key: string;
  items: IMenuItems;
}

export type IMenu = Array<IMenuPart>;
