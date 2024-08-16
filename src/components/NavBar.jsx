import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SanSa</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/historia">Nuestra Historia</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/detalles">Detalles</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cartas">Cartas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/para-ti">Para tí</Link></li>
          </ul>
          <MusicPlayer />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
