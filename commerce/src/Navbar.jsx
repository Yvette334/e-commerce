import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="sticky top-0 z-50 py-10 bg-black md:px-6 lg:py-2 text-white">
            <div className=" flex justify-between px-4 md:px-8 ">
                <div className="text-gray-300">Tech Store</div> 
                <div className="flex space-x-8 text-center md:flex">
                <Link to="/" className="text-gray-300 text-lg ">Home</Link>
                <Link to="/Products" className="text-gray-300 text-lg ">Product</Link>
                <Link to="/About" className="text-gray-300 text-lg ">About</Link>
                <Link to="/Contact" className="text-gray-300 text-lg">Contact</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;