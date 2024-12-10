export async function Response() {
    const url = 'https://fakestoreapi.com/products';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const productData = data.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            description: product.description
        }));
        return productData;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

export function getUniqueCategories(products) {
    return [...new Set(products.map(product => product.category))];
}

export function filterProductsByCategory(products, category) {
    if (!category) return products;
    
    if (Array.isArray(category)) {
        return products.filter(product => category.includes(product.category));
    }
    
    return products.filter(product => product.category === category);
}

export const CATEGORY_MAP = {
    'clothing': ["men's clothing", "women's clothing"],
    'jewelry': "jewelery",
    'electronics': "electronics"
};

export const REVERSE_CATEGORY_MAP = {
    "men's clothing": 'clothing',
    "women's clothing": 'clothing',
    "jewelery": 'jewelry',
    "electronics": 'electronics'
};