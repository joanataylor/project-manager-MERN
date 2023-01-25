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
    isComplete: false,
  });
  const [errors, setErrors] = useState({});

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

  const handleCheck = (e) => {
    setProduct({
      ...product,
      isComplete: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5002/api/products/${id}`, {
        item: product.item,
        price: product.price,
        description: product.description,
        isComplete: product.isComplete,
      })
      .then((res) => {
        console.log(res.data);
        // setErrors({})
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h1>Edit Todo</h1>
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
            {errors?.item && (
              <span className="form-text tect-danger">
                {errors.item.message}
              </span>
            )}
          </div>
          <div className="mb-3">
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
            {errors?.price && (
              <span className="form-text tect-danger">
                {errors.price.message}
              </span>
            )}
            </div>

            <div className="mb-3">
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
            {errors?.description && (
              <span className="form-text tect-danger">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="form-check mb-3">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={product.isComplete}
                onChange={handleCheck}
              />
              <label htmlFor="isComplete" className="form-check-label">
                Completed?
              </label>
            </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
