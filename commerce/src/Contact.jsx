
function Contact(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                        <div className="space-y-4">
                            <p><strong>Email:</strong> support@techstyle.com</p>
                            <p><strong>Phone:</strong> 0787271334</p>
                            <p><strong>Address:</strong> KG 11 Ave</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                        <div className="space-y-2">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Enter your name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Enter your email"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea 
                            rows="5"
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Tell us how we can help you..."
                        ></textarea>
                    </div>
                    
                    <button 
                        type="button"
                        className="bg-black text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact