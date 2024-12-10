import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./ProductModal";

const Destacados = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProductId(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="featured-products container">
        <h2 className='mt-3 text-center pb-5'>Productos Destacados</h2>
        <div className="product-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
          {products.slice(0, 4).map((product) => (
            <div
              className="col"
              key={product.id}
              onClick={() => openModal(product.id)}
            >
              <div className="product h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className='img-fluid product-image'
                />
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={selectedProductId}
      />
    </div>
  );
};

export default Destacados;