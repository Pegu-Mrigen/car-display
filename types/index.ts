import { MouseEventHandler } from "react";
import { manufacturers } from './../constants/index';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
}
export interface SearchMenufacturerProps {
  menufacturer: string;
  setMenufacturer:(manufacturers:string)=>void
  
}
