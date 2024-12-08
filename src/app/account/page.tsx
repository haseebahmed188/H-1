
import Link from "next/link"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"

export default function account() {
  return (
    <div>
    <section>
<Header />
</section>

<section>
  <img src="account.jpg" alt="" />
</section>

<section className="py-16 px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 
    <div>
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username or email address</label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
          />
          <label htmlFor="remember" className="text-sm">Remember me</label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-amber-500 text-white py-2 px-6 rounded hover:bg-amber-600"
          >
            Log In
          </button>
          <a href="#" className="text-sm text-amber-500 hover:underline">Forgot Your Password?</a>
        </div>
      </form>
    </div>

  
    <div>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email address</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <p className="text-sm text-gray-600">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
          <a href="#" className="text-amber-500 hover:underline font-medium">privacy policy</a>.
        </p>
        <button
          type="submit"
          className="bg-amber-500 text-white py-2 px-6 rounded hover:bg-amber-600 w-full"
        >
          Register
        </button>
      </form>
    </div>
  </div>
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