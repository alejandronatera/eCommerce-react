import { Link } from "react-router-dom";
import "../styles/Productos.css";

function Card({ producto }) {
  return (
    <div className="producto-card">
      <img className="producto-image" src={producto.imagene} alt={producto.name} />
      <h2 className="producto-nombre">{producto.name}</h2>
      <p>{producto.price} $</p>
      <Link to={`/productos/${producto.id}`}>
        <button>Ver detalles del producto</button>
      </Link>
    </div>
  );
}

export default Card;