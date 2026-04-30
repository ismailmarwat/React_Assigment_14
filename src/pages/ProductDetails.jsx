// src/pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link 
        to="/products"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full rounded-xl"
        />
        
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {product.description}
          </p>
          
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;