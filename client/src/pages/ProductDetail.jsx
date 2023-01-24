import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
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
  }, []);

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
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
