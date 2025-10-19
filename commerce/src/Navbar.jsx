import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-black sticky md:px-6 lg:py-2 text-white">
            <div className="h-12 items-center flex justify-between px-4 md:px-8 ">
                <div>Tech Store</div> 
                <div className="flex space-x-8 text-center md:flex">
                <Link to="/" className="text-gray-300 text-lg ">Home</Link>
                <Link to="/Products" className="text-gray-300 text-lg ">About</Link>
                <Link to="/About" className="text-gray-300 text-lg ">Doctors</Link>
                <Link to="/Contact page" className="text-gray-300 text-lg">Services</Link>
                <Link to="/Contact" className="text-gray-300 text-lg">Contact</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;