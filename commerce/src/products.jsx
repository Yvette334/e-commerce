
function ProductCard({ name, image, price }) {
    return(
        <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-gray-700 font-medium">${price}</p>
        </div>
    );
}

function Products() {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        },
        {
            id: 3,
            name: "Leather Backpack",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        },
        {
            id: 4,
            name: "Sunglasses",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
        },
         {
            id: 5,
            name: "Running Shoes",
            price: 129.99,
            category: "Fashion",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      },
      {
            id: 6,
            name: "Camera",
            price: 599.99,
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
  }
    ];

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    name={product.name}
                    image={product.image} 
                    price={product.price} 
                />
            ))}
        </div>
    );
}

export default Products;