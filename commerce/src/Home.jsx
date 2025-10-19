import Product from './Product.jsx'
function Home(){
    return(
      <section className="">
       <div className="bg-gray-900 text-white">
      <h1 className="mb-6">Discover the Latest in Tech & Fashion</h1>
      <p>Shop premium quality products at unbeatable prices. From cutting-edge electronics to stylish accessories, find everything you need in one place.</p>
      <button className="" >Shop Now</button>
      </div>
      <div>
        <h2>Featured Products</h2>
        <p>Check out our handpicked selection of trending items that combine quality, style, and innovation.</p>
        <Product/>
      </div>
      </section>
)}
export default Home
