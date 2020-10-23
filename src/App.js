import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import GetProduct from "./components/GetProduct";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/productsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Go Save More</h1>
      <div>
        <Login />
        <br></br>
        <Register />
        {/* <ProductList />
        <AddProduct />
        <EditProduct />
        <GetProduct /> */}
      </div>
    </div>
  );
}

export default App;
