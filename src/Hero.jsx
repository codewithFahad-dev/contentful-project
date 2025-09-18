import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            accusantium quibusdam. Vel accusantium, minus veritatis quam quas
            quos earum veniam aliquid ea quaerat autem quidem eaque iste tempora
            accusamus nulla.
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
