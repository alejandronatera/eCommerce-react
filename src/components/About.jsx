import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>Sobre Nosotros</h2>

      <p className="about-texto">
        Bienvenido a nuestra tienda online, donde la innovación y la comodidad se encuentran. Nuestro objetivo es ofrecerte una experiencia de compra ágil, segura y con productos de calidad. Creemos en el poder de la tecnología para mejorar la vida cotidiana.
                                                                             necesitas de manera rápida y sencilla. ¡Gracias por confiar en nosotros!
      </p>

      <div className="imagenes-secundarias">
        <div className="imagen-item">
          <img src="/persona_comprando.jpg" alt="Persona comprando" />
          <p className="descripcion-imagen">Elegí desde el celular</p>
        </div>
        <div className="imagen-item">
          <img src="/pantalla_pc.jpg" alt="Pantalla PC" />
          <p className="descripcion-imagen">Comprá desde casa</p>
        </div>
      </div>
    </section>
  );
}

export default About;