import { Link } from 'react-router-dom';

function Nav2() {
  return (
    <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
      <ul style={{ 
        listStyle: "none", 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-around", 
        margin: 0, 
        padding: 0 
      }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>
        <li><Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>Acerca de</Link></li>
        <li><Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Nav2;