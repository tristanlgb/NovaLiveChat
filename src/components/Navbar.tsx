function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-mark">🐠</span>
          <span>Aquario Studio</span>
        </a>

        <div className="navbar-nav">
          <a className="nav-link" href="#home">Inicio</a>
          <a className="nav-link" href="#about">Nosotros</a>
          <a className="nav-link" href="#stack">Colección</a>
          <a className="nav-link" href="#projects">Destacados</a>
          <a className="nav-link" href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
