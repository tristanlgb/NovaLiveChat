function About() {
  return (
    <section id="about" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">💎 Nuestra propuesta</span>
          <h2>Selección cuidadosa, estética impecable y cuidado para cada detalle.</h2>
          <p className="section-intro">
            Ofrecemos peces tropicales de alta calidad con una presentación sofisticada para que cada compra se sienta especial, confiable y visualmente impactante.
          </p>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-6 fade-in-up delay-1">
            <div className="card h-100 p-4">
              <p>
                Cada ejemplar es elegido por su color, salud y comportamiento para garantizar una experiencia excepcional en tu acuario.
              </p>
              <p>
                Nuestro enfoque combina diseño moderno, atención humana y una curación visual que transforma la compra en una experiencia premium.
              </p>
            </div>
          </div>

          <div className="col-lg-6 fade-in-up delay-2">
            <div className="card h-100 p-4">
              <h3>Lo que nos diferencia</h3>
              <ul className="lh-lg">
                <li>Variedad exclusiva de especies tropicales.</li>
                <li>Envíos cuidadosos y asesoramiento experto.</li>
                <li>Presentación elegante y experiencia visual premium.</li>
              </ul>
              <p>
                Si buscas una propuesta refinada para tu acuario, este es el lugar indicado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
