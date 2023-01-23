import axios from "axios";
import { useEffect, useState } from "react";
import ProjectForm from "../components/ProjectForm";

function Main() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://localhost:5002/api", { signal: controller.signal })
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Main</h1>
      {message && <h2>Message: {message}</h2>}
      <ProjectForm />
    </div>
  );
}

export default Main;
