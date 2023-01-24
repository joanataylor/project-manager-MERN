import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    item: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5002/api/products/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5002/api/products/${id}`,{
        item: product.item,
        price: product.price,
        description: product.description,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="item" className="form-label">
                Item:
              </label>
              <input
                type="text"
                name="item"
                id="item"
                className="form-control"
                value={product.item}
                onChange={handleChange}
              />
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                value={product.price}
                onChange={handleChange}
              />
              <label htmlFor="item" className="form-label">
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
