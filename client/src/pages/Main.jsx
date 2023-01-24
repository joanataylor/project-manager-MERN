import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Main() {
  // const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://localhost:5002/api/products", { signal: controller.signal })
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);
  // string booleans and numbers are primitive - can go inside []
  //cannot put arrays or objects - not primitive

  return (
    <div>
      <h1>Main</h1>

      {/* {message && <h2>Message: {message}</h2>} */}
      <ProductForm setLoaded = { setLoaded } />
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Main;
