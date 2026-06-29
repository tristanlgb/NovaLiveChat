function Home() {
  return (
    <section id="home" className="hero section py-5">
      <div className="container">
        <div className="hero-card fade-in-up">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="eyebrow">🌈 Peces tropicales de lujo</span>
              <h1 className="hero-title">
                Descubre una selección <span>premium</span> de peces de colores.
              </h1>
              <p className="hero-text">
                Creamos una experiencia elegante para encontrar ejemplares vibrantes, saludables y cuidadosamente seleccionados para tu acuario.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#projects">Ver destacados</a>
                <a className="btn btn-outline-primary btn-lg" href="#contact">Consultar disponibilidad</a>
              </div>

              <div className="stat-grid mt-4">
                <div className="stat-card">
                  <h3>120+</h3>
                  <p>Ejemplares disponibles</p>
                </div>
                <div className="stat-card">
                  <h3>24h</h3>
                  <p>Atención personalizada</p>
                </div>
                <div className="stat-card">
                  <h3>98%</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual" aria-hidden="true">
                <div className="hero-fish fish-one">🐠</div>
                <div className="hero-fish fish-two">🐟</div>
                <div className="hero-bubble bubble-one" />
                <div className="hero-bubble bubble-two" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
