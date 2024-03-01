import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItem {
  label: string;
  icon?: IconDefinition;
  path: string;
}

export type IMenuItems = Array<IMenuItem>;

export interface IMenuPart {
  key: string;
  items: IMenuItems;
}

export type IMenu = Array<IMenuPart>;
