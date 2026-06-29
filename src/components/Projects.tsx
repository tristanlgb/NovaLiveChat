function Projects() {
  return (
    <section id="projects" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">✨ Destacados</span>
          <h2>Una propuesta visual y comercial pensada para impresionar.</h2>
          <p className="section-intro">
            Cada ejemplar está presentado con una estética cuidada para que el catálogo se sienta tan refinado como los peces que ofrece.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 fade-in-up delay-1">
            <div className="card h-100">
              <div className="card-body">
                <span className="price-pill">Premium</span>
                <h3 className="h5">Peces SATIVA</h3>
                <p>Un pez de tonos azules y violetas con una presencia elegante y muy llamativa.</p>
                <div className="badge-group">
                  <span className="badge">Color intenso</span>
                  <span className="badge">Alta demanda</span>
                  <span className="badge">Entrega segura</span>
                </div>
                <a className="btn btn-outline-primary me-2" href="#contact">Solicitar ficha</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 fade-in-up delay-2">
            <div className="card h-100">
              <div className="card-body">
                <span className="price-pill">Trending</span>
                <h3 className="h5">Peces INDICA</h3>
                <p>Una selección vibrante con tonos dorados, naranjas y rojos para acentos cálidos.</p>
                <div className="badge-group">
                  <span className="badge">Acuario tropical</span>
                  <span className="badge">Muy colorido</span>
                  <span className="badge">Ideal para grupos</span>
                </div>
                <a className="btn btn-primary" href="#contact">Consultar stock</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 fade-in-up delay-3">
            <div className="card h-100">
              <div className="card-body">
                <span className="price-pill">Nuevo</span>
                <h3 className="h5">Peces DMTs</h3>
                <p>Brillantes reflejos azules y verdes que aportan profundidad visual al acuario.</p>
                <div className="badge-group">
                  <span className="badge">Brillo premium</span>
                  <span className="badge">Estilo moderno</span>
                  <span className="badge">Muy buscado</span>
                </div>
                <a className="btn btn-outline-primary me-2" href="#contact">Ver disponibilidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
