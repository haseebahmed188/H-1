
import Link from "next/link"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"

export default function cart() {
  return (
    <div>
    <section>
<Header />
</section>

<section>
  <img src="cart.jpg" alt="" />
</section>


<section className="p-8">
  <div className="flex flex-wrap gap-8">
    {/* Cart Table */}
    <table className="table-auto w-3/5 border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4 text-left">Product</th>
          <th className="p-4 text-left">Price</th>
          <th className="p-4 text-left">Quantity</th>
          <th className="p-4 text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-4">
            <div className="flex items-center gap-4">
              <img src="6.jpg" alt="Asgaard Sofa" className="w-16 h-16" />
              <span>Asgaard Sofa</span>
            </div>
          </td>
          <td className="p-4">Rs. 250,000.00</td>
          <td className="p-4">
            <input
              type="number"
              className="w-12 text-center p-1 border border-gray-300 rounded"
              value="1"
              readOnly
            />
          </td>
          <td className="p-4">Rs. 250,000.00</td>
        </tr>
      </tbody>
    </table>

    {/* Cart Totals */}
    <div className="bg-amber-50 p-6 rounded-md w-1/3">
      <h3 className="mb-4 text-lg font-bold">Cart Totals</h3>
      <div className="mb-4 flex justify-between">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="mb-4 flex justify-between font-bold text-amber-600">
        <span>Total</span>
        <span>Rs. 250,000.00</span>
      </div>
      <button className="w-full bg-amber-600 text-white py-3 rounded hover:bg-amber-700">
        Check Out
      </button>
    </div>
  </div>
</section>



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


<br />
<section> 
  <Footer /></section>
  </div>
   
    
  )}