import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router-dom'

function ProductList({ products, setLoaded }) {
  // const { id } = useParams();

  // const handleCheck = (e, id) => {
  //   axios
  //     .put(`http://localhost:5002/api/products/${id}`)
  //     .then(res => {
  //       console.log(res.data);
  //       //something here
  //       setLoaded(false);
  //     })
  //     .catch(err => console.log(err));
  // };

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
                <p>
                  <Link to={`/products/${product._id}`}>{product.item}</Link>
                </p>
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
