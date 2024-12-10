import React, { useState } from 'react';
import { useCart } from './cardContexto';
import ProductModal from './ProductModal'; // Importa el nuevo componente de modal

export default function Card({ id, title, price, image }) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart({ id, title, price, image });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="tarjeta mt-5">
                <div className="card">
                    <div className="image" onClick={openModal}>
                        <img className="img-fluid" src={image} alt={title} />
                    </div>
                    <h2 className="title" onClick={openModal}>{title}</h2>
                    <div>
                        <span className="price fw-bold" onClick={openModal}>${price}</span>
                    </div>
                </div>
            </div>
            <ProductModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                productId={id}
            />
        </>
    );
}