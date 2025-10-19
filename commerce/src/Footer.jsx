import{Link} from 'react-router-dom'
function Footer(){
    return(
        <footer className="bg-black bottom-0 ">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
            <div className="m-4 mb-8 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold text-gray-300">Tech Store</h2>
            <p className="text-gray-300 max-w-md">Your one-stop shop for the latest tech gadgets and fashion essentials.</p>
            </div>
             <div className='m-4'>
            <h4 className="mb-4 text-lg font-semibold text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className='hover:text-black '>
                <Link to="/" className=" hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li className='hover:text-black'>
                <Link to="/products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li className='hover:text-black'>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li className='hover:text-black'>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-300">Contact Us</h4>
            <p className="text-gray-300">Email:support@techstore.com</p>
            <p className="text-gray-300">Phone:0787271334</p>
          </div>
            </div>
            <p className="text-center text-gray-300">&copy;2025 Tech store.</p>
        </footer>
    )
}
export default Footer