import { useState, useEffect } from 'react';
import { getUniqueCategories } from './api';

export default function Sidebar({ onCategorySelect, products }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoryDisplayNames = {
        "men's clothing": "Ropa de Hombre",
        "women's clothing": "Ropa de Mujer",
        "jewelery": "Joyería",
        "electronics": "Electrónicos"
    };

    useEffect(() => {
        if (products.length > 0) {
            const uniqueCategories = getUniqueCategories(products);
            setCategories(uniqueCategories);
        }
    }, [products]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    return (
        <div className="sidebar mt-5 pt-5">
            <aside className=" p-3">
                <h5>Categorías</h5>
                <ul className="list-unstyled">
                    <li
                        key="all"
                        className={`category-item ${selectedCategory === null ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(null)}
                    >
                        Todos los productos
                    </li>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {categoryDisplayNames[category] || category}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}