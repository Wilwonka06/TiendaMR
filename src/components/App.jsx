import { Response, filterProductsByCategory, CATEGORY_MAP } from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cardContexto";
import { useEffect, useState } from "react";
import "../assets/css/Destacados.css";
import "../assets/css/Detalle.css";
import "../assets/css/Footer.css";
import "../assets/css/Inicio.css";
import Sidebar from "./sidebar";
import "../assets/css/App.css";
import Footer from "./Footer";
import Card from "./products";
import Inicio from "./Inicio";
import Menu from "./menu";
import Cart from "./cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const obtenerProducts = async () => {
      const data = await Response();
      setProducts(data);
      setFilteredProducts(data);
    };
    obtenerProducts();

    const handleCategorySelect = (event) => {
      const { category } = event.detail;
      handleCategorySelectInternal(category);
    };

    window.addEventListener('categorySelect', handleCategorySelect);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('categorySelect', handleCategorySelect);
    };
  }, []);

  const handleCategorySelectInternal = (category) => {
    let categoriesToFilter;

    if (CATEGORY_MAP[category]) {
      categoriesToFilter = CATEGORY_MAP[category];
    } else {
      categoriesToFilter = category;
    }

    const filtered = filterProductsByCategory(products, categoriesToFilter);

    setCurrentCategory(category);
    setFilteredProducts(filtered);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Menu onCategorySelect={handleCategorySelectInternal} />
        <Cart />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route
            path="/"
            element={
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2 sidebar">
                    <Sidebar
                      onCategorySelect={handleCategorySelectInternal}
                      products={products}
                    />
                  </div>
                  <div className="col-10">
                    <div className="tarjetas w-100">
                      {filteredProducts.map((p) => (
                        <Card
                          key={p.id}
                          id={p.id}
                          title={p.title}
                          price={p.price}
                          image={p.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />

        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>
  );
}

export default App;