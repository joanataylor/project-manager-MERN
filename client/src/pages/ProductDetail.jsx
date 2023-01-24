import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5002/api/products/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5002/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/products')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Details of Product</h1>
      {product && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.item}</h5>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link
              to={`/products/${product._id}/edit`}
              className="btn btn-warning me-2">
              Edit{" "}
            </Link>
            <button
                className="btn btn-danger me-2"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
