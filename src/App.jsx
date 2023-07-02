import { Route, Routes } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={ProductListing} />
        <Route path="/product/:productId" Component={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Routes>
    </>
  );
}

export default App;
