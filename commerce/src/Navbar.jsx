import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="sticky top-0 z-50 py-4 bg-black text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="text-xl font-bold text-white">Tech Store</div> 
                <div className="flex space-x-6 md:space-x-8">
                <Link to="/" className="text-gray-300 text-lg hover:text-white">Home</Link>
                <Link to="/Products" className="text-gray-300 text-lg hover:text-white">Product</Link>
                <Link to="/About" className="text-gray-300 text-lg hover:text-white">About</Link>
                <Link to="/Contact" className="text-gray-300 text-lg hover:text-white">Contact</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;