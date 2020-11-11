import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./components/AddProduct";
import Homepage from "./pages/Homepage";
import NavBar from "./pages/NavBar";
import ProductInfo from "./pages/ProductInfo";
import Footer from "./pages/Footer";
import Banner from "./components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/actions/productsActions";
import PrivateRoute from "./redux/util/privateRoute";
import CartList from "./components/CartList";
import Orders from "./components/Orders";
import { getCart } from "./redux/actions/cartActions";

function App() {
  const [search, setSearch] = useState({
    searchField: "",
  });

  const products = useSelector((state) => state.products.products);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart(auth.user.id));
  }, [dispatch, auth]);


  const handleChange = (e) => {
    setSearch({ searchField: e.target.value });
  };

  // search product if exists
  let filteredProduct;

  if (search.searchField) {
    filteredProduct = products.filter((product) =>
      product.productName.toLowerCase().startsWith(search.searchField)
    );
  } else {
    filteredProduct = products;
  }

  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <NavBar placeholder={"Search Product"} handleChange={handleChange} />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Homepage filteredProduct={filteredProduct} />}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={CartList} />
            <Route exact path="/admin/addProducts" component={AddProduct} />
            <Route exact path="/product/:id" component={ProductInfo} />
            <PrivateRoute exact path="/orders" component={Orders} />
          </Switch>
        </div>
      </header>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
