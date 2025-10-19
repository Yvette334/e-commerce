import Product from './Product.jsx'
import{Link} from 'react-router-dom'
function Home(){
    return(
      <section className="min-h-screen">
       <div className="bg-gray-900 text-white py-16 text-center">
      <h1 className="mb-6 text-4xl md:text-5xl font-bold">Discover the Latest in Tech & Fashion</h1>
      <p className='text-lg mx-auto mb-8 max-w-2xl'>Shop premium quality products at unbeatable prices. From cutting-edge electronics to stylish accessories, find everything you need in one place.</p>
      <Link to="/Products">
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200" >Shop Now</button>
      </Link>
      </div>
      <div className='text-center py-16 mx-auto px-4'>
        <h2 className='font-bold text-3xl mb-4'>Featured Products</h2>
        <p className='mb-4 text-gray-600 max-w-2xl mx-auto'>Check out our handpicked selection of trending items that combine quality, style, and innovation.</p>
        <Product/>
      </div>
      </section>
)}
export default Home
