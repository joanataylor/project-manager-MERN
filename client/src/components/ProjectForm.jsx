import { useState } from "react";
import axios from "axios";

function ProjectForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <form>
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

export default ProjectForm;
