
function About(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-8">Who we are</h2>
            <div className="space-y-6 text-lg text-gray-700">
        <p >TechStyle Store is your premier destination for cutting-edge technology and contemporary fashion.
             Founded in 2020, we've been dedicated to bringing you the latest innovations and timeless style essentials that enhance your everyday life.</p>
        <p>We believe that technology and fashion shouldn't be separate worlds.
             That's why we curate a unique collection that bridges the gap between smart gadgets and stylish accessories, helping you express yourself while staying connected.</p>
        <p>Our team of experts carefully selects each product to ensure it meets our high standards for quality, design, and functionality.
             We're not just selling products; we're building a community of tech-savvy style enthusiasts.</p>
              <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Our mission</h3>
            <p className="text-center max-w-2xl mx-auto">To empower individuals with innovative products that seamlessly blend technology and style, making quality and convenience accessible to everyone.</p>
         </div>
         </div>
         <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
            <p className="text-center text-gray-600 mb-12">We're committed to providing an exceptional shopping experience from start to finish.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div  className="text-center border rounded-lg p-6">
                <img className="h-10 mx-auto bg-gray-500 rounded-lg" src="https://cdn-icons-png.flaticon.com/512/1892/1892654.png" alt="" />
                <h2 className="text-xl font-bold mb-4">Quality</h2>
                <p className="text-gray-600">Every product is handpicked and tested to meet our rigorous quality standards.</p>
            </div>
            <div className="text-center border rounded-lg p-6">
                <img className="h-10 mx-auto bg-gray-500 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Cd8KIJwrIwICvSTzC4QFeBPEvsx2VZpaQA&s" alt="" />
                <h2 className="text-xl font-bold mb-4">Support</h2>
                <p className="text-gray-600">Our knowledgeable team is always ready to help you find exactly what you need.</p>
            </div>
            <div className="text-center border rounded-lg p-6">
                <img className="h-10 mx-auto bg-gray-500 rounded-lg" src="https://static.vecteezy.com/system/resources/previews/025/396/763/non_2x/low-price-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="" />
                <h2 className="text-xl font-bold mb-4">Best Price</h2>
                <p className="text-gray-600">Competitive pricing without compromising on quality or service.</p>
            </div>
            <div className="text-center border rounded-lg p-6">
                <img className="h-10 mx-auto bg-gray-500 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdP0rcz2Xlg57VugxDUplo9l9LSwmY2jKTLg&s" alt="" />
                <h2 className="text-xl font-bold mb-4">Secure Shopping</h2>
                <p className="text-gray-600">Your data is protected with industry-leading security measures.</p>
            </div>
            </div>
         </div>
        </div>
    )
}
export default About