import { useState } from "react";
import axios from "axios";

function ProjectForm() {
  const [item, setItem] = useState("");

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
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
