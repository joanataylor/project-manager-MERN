import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <span className="navbar-brand">Product List</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/products'>All Products</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
