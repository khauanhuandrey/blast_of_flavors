import { motion } from "framer-motion";
import { ReactNode } from "react";
import "./styles.sass";

type ButtonProps = {
  children: ReactNode;
};
export const Button = ({ children }: ButtonProps) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
};
