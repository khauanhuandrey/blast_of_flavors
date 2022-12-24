import { Link } from "react-router-dom";
import "./styles/styles.sass";
import Logo from "../../assets/images/blast_logo.png";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <nav id="header">
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <Link to="/" className="toogle-color">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-menu-wrapper">
          <Link to="/" className="link">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Home
            </motion.div>
          </Link>
          <Link to="#about" className="link">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.div>
          </Link>{" "}
        </div>
        <div className="auth-wrapper">
          <Link to="/cart" className="cart-icon-wrapper link">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/login" className="link">
            Log In
          </Link>
          <Link to="signup" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
