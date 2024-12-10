import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useCart } from "./cardContexto";

Modal.setAppElement("#root");

const Detalle = ({ isOpen, onClose, productId, apiUrl }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { addToCart } = useCart();

    useEffect(() => {
        if (!productId || !isOpen) return;

        const fetchProductDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/${productId}`);
                setProduct(response.data);
            } catch (err) {
                setError("No se pudieron cargar los detalles.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId, isOpen, apiUrl]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            });
        }
    };
    if (!isOpen) return null;



    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalle del Producto"
            style={{
                content: {
                    maxWidth: "70%",
                    height: "70%",
                    margin: "auto",
                    borderRadius: "10px",
                    textAlign: "center",
                },
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
            }}
        >
            {loading && <p>Cargando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {product && (
                <div className="container-fluid">
                    {/* ... otros detalles */}
                    <div className="mt-4">
                        <button className='btn m-2 border border-dark w-auto' onClick={handleAddToCart} >
                            Agregar a la bolsa
                        </button>
                        <button onClick={onClose} className='btn m-2 border border-dark w-auto' >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default Detalle