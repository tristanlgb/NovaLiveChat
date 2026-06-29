function Contact() {
  return (
    <section id="contact" className="section py-5 bg-light">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">📬 Contacto</span>
          <h2>Hablemos de tu próximo acuario.</h2>
          <p className="section-intro">
            Escríbenos para recibir asesoramiento, ver disponibilidad y encontrar la selección perfecta para tu espacio.
          </p>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-6 fade-in-up delay-1">
            <div className="card p-4 h-100">
              <h3>Datos de contacto</h3>
              <p className="mb-1">Email</p>
              <p className="mb-3">hola@aquariostudio.com</p>
              <p className="mb-1">WhatsApp</p>
              <p className="mb-3">+54 11 5555 0101</p>
              <p className="mb-1">Horario</p>
              <p>Lunes a viernes · 10:00 a 20:00</p>
            </div>
          </div>

          <div className="col-lg-6 fade-in-up delay-2">
            <div className="card p-4 h-100">
              <h3>Reserva tu selección</h3>
              <p>
                Cuéntanos qué estilo buscas y te orientamos con los ejemplares ideales para un resultado más vivo, armónico y sofisticado.
              </p>
              <a className="btn btn-primary" href="mailto:hola@aquariostudio.com">Escribir por email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
