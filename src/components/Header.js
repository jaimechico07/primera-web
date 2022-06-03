import './Header.css';
import Carousel1 from './Carousel1';

function Header() {
  return (
    <div className="Header">
      <header>
        <div className="site_header">
          <div className="logo"></div>
          <div className="delivery_num"></div>
        </div>

        <div className="nav_container">
          <div className="nav_container-menu max-container">
            <nav className="nav_menu">
              <a href="/page/Nosotros.js">NOSOTROS</a>
              <a href="/page/Promociones.js">PROMOCIONES</a>
              <a href="/page/Cerveza.js">CERVEZAS</a>
              <a href="/page/Reparto.js">ZONAS DE REPARTO</a>
              <a href="/page/Contacto.js">CONTACTO</a>
            </nav>
          </div>

          <div>
            <div></div>
            <button></button>
          </div>
        </div>
        
      </header>

      <Carousel1 />
    </div>
  );
}

export default Header;
