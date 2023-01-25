import { useState } from "react";
import axios from "axios";

function ProductForm({ setLoaded }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      item,
      price,
      description,
    };
    axios
      .post("http://localhost:5002/api/products", newItem)
      .then((res) => {
        console.log(res.data);
        setErrors({})
        setLoaded (false);
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors);
  });
};

  return (
    <div className="card mb-3">
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
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            { errors?.item && (
              <span className="form-text tect-danger">{errors.item.message}</span>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* optional chaining operator ---> ?  */}
            { errors?.price && (
              <span className="form-text tect-danger">{errors.price.message}</span>
              )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            { errors?.description && (
              <span className="form-text tect-danger">{errors.description.message}</span>
              )}
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
