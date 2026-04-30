// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to ShopSphere
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover premium products with seamless shopping experience
      </p>
      <a 
        href="/products" 
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Browse Products
      </a>
    </div>
  );
};

export default Home;