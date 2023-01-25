import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router-dom'

function ProductList({ products, setLoaded }) {
  const handleCheck = (e, id) => {
    axios
      .put(`http://localhost:5002/api/products/${id}`, {
        isComplete: e.target.checked,
      })
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  // const { id } = useParams();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5002/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    products &&
    products.map((product) => {
      return (
        <div key={product._id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                
                <input
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  className="form-check-input"
                  checked={product.isComplete}
                  onChange={(e) => handleCheck(e, product._id)}
                />

                <label htmlFor="isComplete" className="form-check-label">
                  <div className="form-check">
                    <Link to={`/products/${product._id}`}>{product.item}</Link>
                  </div>
                </label>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>

            </div>
          </div>
        </div>
      );
    })
  );
}

export default ProductList;
