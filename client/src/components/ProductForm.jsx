import { useState } from "react";
import axios from "axios";

function ProductForm({ setLoaded }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const [itemError, setItemError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

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
        setErrors({});
        setLoaded(false);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  //********** - FRONT END VALIDATIONS - ***************** */

  const itemHandler = (e) => {
    console.log(errors)
    setErrors({})
    setItem(e.target.value);
    if (e.target.value.length < 1) {
      setItemError("Item required.");
    } else if (e.target.value.length < 2) {
      setItemError("Item name must be more than 2 characters.");
    } else {
      console.log("ERRRROOOOORRRRR")
      setItemError(null);
    }
  };

  const priceHandler = (e) => {
    setErrors({})
    setPrice(e.target.value);
    if (e.target.value < 1) {
      setPriceError("Price must be higher than $0.");
    } else {
      setPriceError(null);
    }
  };

  const descriptionHandler = (e) => {
    setErrors({})
    setDescription(e.target.value);
    if (e.target.value.length < 1) {
      setDescriptionError("Description required.");
    } else if (e.target.value.length < 2) {
      setDescriptionError("Description must be more than 2 characters.");
    } else {
      setDescriptionError(null);
    }
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
              // onChange={(e) => setItem(e.target.value)}
              onChange={itemHandler}
            />
            {errors?.item && (
              <span className="form-text tect-danger">
                {errors.item.message}
              </span>
            )}
            {itemError && (
              <span className="form-text text-danger">{itemError}</span>
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
              min="0"
              className="form-control"
              value={price}
              // onChange={(e) => setPrice(e.target.value)}
              onChange={priceHandler}
            />
            {/* optional chaining operator ---> ?  */}
            {errors?.price && (
              <span className="form-text tect-danger">
                {errors.price.message}
              </span>
            )}
            {priceError && (
              <span className="form-text text-danger">{priceError}</span>
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
              // onChange={(e) => setDescription(e.target.value)}
              onChange={descriptionHandler}
            />
            {errors?.description && (
              <span className="form-text tect-danger">
                {errors.description.message}
              </span>
            )}
            {descriptionError && (
              <span className="form-text text-danger">{descriptionError}</span>
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
