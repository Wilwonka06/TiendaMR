import React from 'react';
import { useCart } from './cardContexto';

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, isCartOpen, toggleCart, calculateTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay pt-5">
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Carrito de Compras</h2>
                    <button onClick={toggleCart} className="close-cart border-0 bg-light">x</button>
                </div>
                
                {cartItems.length === 0 ? (
                    <p className='p-2'>Tu carrito está vacío</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image mx" />
                                <div className="cart-item-details">
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                    <div className="quantity-control ">
                                        <button className='border-0 bg-light' onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button className='border-0 bg-light' onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button  onClick={() => removeFromCart(item.id)} className="remove-item border-0 bg-light">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="cart-summary mt-0">
                            <h3>Total: ${calculateTotal()}</h3>
                            <button className="checkout-btn border-0 bg-light">Finalizar Compra</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}