// src/pages/Products.jsx
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                ${product.price}
              </p>
              <Link 
                to={`/product/${product.id}`}
                className="block text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;