
import Link from "next/link"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"

export default function contact() {
  return (
    <div>
    <section>
<Header />
</section>

<section>
  <img src="contact.jpg" alt="" srcSet="" />
</section>


<section>
<section className="py-16 px-8">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
    <p className="text-gray-600 mt-2">
      For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
    </p>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
   
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <div className="text-amber-500 text-2xl">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="text-amber-500 text-2xl">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div>
          <h3 className="font-bold text-lg">Phone</h3>
          <p>Mobile: 03XXXXXXXX</p>
          <p>Hotline: +923XXXXXXXX</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="text-amber-500 text-2xl">
          <i className="fas fa-clock"></i>
        </div>
        <div>
          <h3 className="font-bold text-lg">Working Time</h3>
          <p>Monday-Friday: 7:00 - 22:00</p>
          <p>Saturday-Sunday: 8:00 - 21:00</p>
        </div>
      </div>
    </div>

   
    <div>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Your name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email address</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <input
            type="text"
            id="subject"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
            placeholder="This is an optional"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
           
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
            placeholder="Hi! I'd like to ask about"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-3 rounded hover:bg-amber-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

</section>

<section>
  
<section>
  <div className="footer-info mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="info bg-[#fef3c7] p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold text-lg text-gray-800">Free Delivery</h4>
        <p className="text-gray-600 mt-2">For all orders over Rs. 5000, consectetur adipiscing elit.</p>
      </div>
      <div className="info bg-[#fef3c7] p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold text-lg text-gray-800">90 Days Return</h4>
        <p className="text-gray-600 mt-2">If goods have problems, consectetur adipiscing elit.</p>
      </div>
      <div className="info bg-[#fef3c7] p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold text-lg text-gray-800">Secure Payment</h4>
        <p className="text-gray-600 mt-2">100% secure payment, consectetur adipiscing elit.</p>
      </div>
      </div>

  </section>

</section>
<br />

<section> 
  <Footer /></section>
  </div>
   
    
  )}