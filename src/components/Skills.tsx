function Skills() {
  return (
    <section id="stack" className="section py-5 bg-light">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">� Colección destacada</span>
          <h2>Especies que combinan color, elegancia y personalidad.</h2>
          <p className="section-intro">
            Una curation moderna de peces que aporta vida y estilo a cada acuario, con una estética cuidada y una presentación premium.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4 fade-in-up delay-1">
            <div className="card h-100 p-4 text-center">
              <h3 className="h5">Peces SATIVA</h3>
              <p>Colores intensos, aletas fluidas y presencia visual única.</p>
            </div>
          </div>

          <div className="col-md-4 fade-in-up delay-2">
            <div className="card h-100 p-4 text-center">
              <h3 className="h5">Peces INDICA</h3>
              <p>Tonalidades vibrantes y movimiento constante en cada detalle.</p>
            </div>
          </div>

          <div className="col-md-4 fade-in-up delay-3">
            <div className="card h-100 p-4 text-center">
              <h3 className="h5">Peces DMTs</h3>
              <p>Brillo azul y verde que transforma cualquier espacio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
