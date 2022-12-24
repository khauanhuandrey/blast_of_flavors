import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import CakeSlice from "../../assets/images/cake_slice.jpg";
import CakeSliceBox from "../../assets/images/cake_slice_box.jpeg";
import CustomCupcakes from "../../assets/images/custom_cupcakes.jpeg";
import PassionFruitCandy from "../../assets/images/passion_fruit_candy.jpeg";
import BrigadierBoxes from "../../assets/images/brigadier_boxes.jpeg";

import "./styles.sass";

export const BlastCarousel = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item className="carousel-item-wrapper" interval={3000}>
        <img
          className="d-flex w-100 cake-slice"
          src={CakeSlice}
          alt="Cake slice"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-wrapper " interval={3000}>
        <img
          className="d-flex  w-100 cake-slice-box"
          src={CakeSliceBox}
          alt="Cake slice box"
        />
      </Carousel.Item>
      <Carousel.Item
        className="carousel-item-wrapper custom-cupcake"
        interval={3000}
      >
        <img
          className="d-flex  w-100 custom-cupcakes"
          src={CustomCupcakes}
          alt="Custom cupcakes"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-wrapper" interval={3000}>
        <img
          className="d-flex  w-100 passion-fruit-candy"
          src={PassionFruitCandy}
          alt="Passion fruit candy"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item-wrapper" interval={3000}>
        <img
          className="d-flex  w-100 brigadier-boxes"
          src={BrigadierBoxes}
          alt="Brigadier boxes"
        />
      </Carousel.Item>
    </Carousel>
  );
};
