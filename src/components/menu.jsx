import { Link } from "react-router-dom";
import { useCart } from './cardContexto';
import { useState } from "react";

export default function Menu({ onCategorySelect }) {
    const { toggleCart, cartItems } = useCart();
    const [activeIndex, setActiveIndex] = useState(null);

    const categories = [
        { name: 'Ropa', category: "clothing" },
        { name: 'Joyería', category: "jewelry" },
        { name: 'Electrónicos', category: "electronics" }
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-2 menu1 fixed-top">
                <div className="container-fluid row d-flex">
                    <Link to='/Inicio' className="navbar-brand col-5 d-flex justify-content-start m-2">
                        <img src="src\assets\img\hoodie.png" className="menuLq" alt="" />
                    </Link>
                    <button className="navbar-toggler w-25 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-6" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            {categories.map((cat, index) => (
                                <li key={index} className="nav-item">
                                    <Link
                                        to="/"
                                        className={`nav-link boton ${activeIndex === index ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveIndex(index); 
                                            onCategorySelect(cat.category);
                                        }}
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse col-6 sesion" id="navbarNav">
                        <img src="src\assets\img\usuario.png" className="menuL" alt="" />
                        <div className="cart-icon-container menuL">
                            <img src="src\assets\img\lupa.png" className="menuL" alt="" />
                        </div>
                        <div className="cart-icon-container " onClick={toggleCart}>
                            <img src="src\assets\img\bolsa-de-la-compra.png" className="menuL" alt="" />
                            {cartItems.length > 0 && (
                                <span className="cart-badge">{cartItems.length}</span>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
}