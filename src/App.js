import "./App.css";
import HomePage from "./pages/home_page";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/login_page";
import RegisterPage from "./pages/register_page";
import CartPage from "./pages/cart_page";
import ProductInfoPage from "./pages/product_info_page";
import "./css/layout.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" exact element={<LoginPage />}></Route>
          <Route path="/register" exact element={<RegisterPage />}></Route>
          <Route path="/cart" exact element={<CartPage />}></Route>
          <Route
            path="/product-info"
            exact
            element={<ProductInfoPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
