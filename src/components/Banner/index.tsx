import "./styles.sass";
import BlastBanner from "../../assets/images/blast_banner.jpg";
import { Button } from "../elements/Button";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-description">
        <h2>Blast of Flavors</h2>
        <p>Faça já o seu pedido!</p>
        <div className="btn-container">
          <Button>Compre agora</Button>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
            <a href="/menu">Veja o menu</a>
          </motion.div>
        </div>
      </div>
      <div className="banner-image">
        <img src={BlastBanner} alt="banner" className="blast-banner" />
      </div>
    </div>
  );
};
