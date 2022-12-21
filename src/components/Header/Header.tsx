import "./styles.sass";
import Logo from "../../assets/images/blast_logo.png";
import CartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

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
            Home
          </Link>
          <Link to="#about" className="link">
            About
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
