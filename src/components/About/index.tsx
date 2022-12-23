import "./styles.sass";
import AboutImg from "../../assets/images/about_image.jpg";

export const About = () => {
  return (
    <div className="about-container">
      <div className="grid-container">
        <div>
          {/*style={{ border: "1px solid blue" }} */}
          <h2>Sobre Nós</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
        </div>
        <div className="img-container">
          <img src={AboutImg} alt="Imagem Sobre Nós" className="aboutImg" />
        </div>
      </div>
    </div>
  );
};
