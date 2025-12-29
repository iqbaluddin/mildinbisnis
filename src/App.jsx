import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<Products />} />
    </Routes>
  );
}

export default App;
