import { ReactNode } from "react";
import "./styles.sass";

type ButtonProps = {
  children: ReactNode;
};
export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
