
import Link from "next/link"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"
export default function shop() {
  return (
    <div>
    <section>
<Header />
</section>

<section>
  <img src="shop.jpg" alt=""  />
</section>

<section>
<div className="container mx-auto px-4">
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="4.jpg" alt="Trenton modular sofa" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Trenton modular sofa_3</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 25,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="5.jpg" alt="Granite dining table with dining chair" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Granite dining table with dining chair</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 40,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="6.jpg" alt="Outdoor bar table and stool" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Outdoor bar table and stool</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 50,000.00</p>
        </div>
      </div>
      
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="13.jpg" alt="Settee Sofa" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Settee Sofa</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 70,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="14.jpg" alt="Chesterfield" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Chesterfield</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 80,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="15.jpg" alt="Loveseat" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Loveseat</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 90,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="16.jpg" alt="Cabriole" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Cabriole</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 100,000.00</p>
        </div>
      </div>
      <div className="product bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="17.jpg" alt="Chaise Lounge" className="product-image w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="product-name text-xl font-semibold text-gray-800">Chaise Lounge</h2>
          <p className="price text-lg text-gray-600 mt-2">Rs. 1,25,000.00</p>
        </div>
      </div>
    </div>
    
    <div className="pagination mt-8 text-center">
      <button className="page px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200 mr-2">1</button>
      <button className="page px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200 mr-2">2</button>
      <button className="page px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200 mr-2">3</button>
      <button className="next px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200">Next</button>
    </div>
   
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
  </div>
  <br />
</section>



<section> 
  <Footer /></section>
  </div>
   
    
  )}