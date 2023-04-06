import {ButtonHTMLAttributes, ReactNode} from "react";
import {TBrand} from "../types/type";

export interface ICard {
  id?: number;
  onclick?: any
  link: string;
  title: string;
  size: string;
  currency: string;
  value: number;
  card: any
}

export interface IButton {
  props?: ButtonHTMLAttributes<any>;
  content: string | number;
  index?: number;
  onclick?: any;
  crnPage?: number;
}

export interface IModal {
  children: ReactNode
}

export interface ICardCart extends Omit<ICard, "size" | "onclick"> {
  increment: any;
  decrement: any;
  card: any;
}

export interface ISelectUi {
  items: TBrand[] | any;
  value: string | any;
  action: any;
  textSelect?: string;
}

export interface IBtn {
  text: string;
  handleClick?: any
  type?: 'submit' | 'reset' | 'button' | undefined;
  bool?: boolean;
}

