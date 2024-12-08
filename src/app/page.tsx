
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link"

export default function Home() {
  return (
    <div>
    <section>
    <Header />
    </section>
  
  <section>
  <section className="flex items-center justify-center bg-[#fef3c7] h-screen p-8 border-4 bg-[#fef3c7] box-border">
  <div className="flex flex-1 flex-col max-w-1/2">
    <h1 className="text-7xl text-black mb-20 ml-28">Rocket single seater</h1>
    <a href="/shop" className="text-4xl font-bold text-black no-underline relative mb-20 ml-28 hover:underline">
      Shop Now
    </a>
  </div>
  <div className="flex flex-1 justify-center">
    <img src="1.png" alt="Rocket single seater" className="w-full h-auto" />
  </div>
</section>

<section className="flex justify-around items-center bg-white h-screen p-8 box-border">
  <div className="text-center max-w-xs">
    <img src="2.jpg" alt="Side table" className="w-full h-auto" />
    <h2 className="text-4xl text-black mt-4">Side table 01</h2>
    <a href="/shop" className="text-2xl font-bold text-black no-underline relative hover:underline">View More</a>
  </div>
  <div className="text-center max-w-xs">
    <img src="3.jpg" alt="Side chair" className="w-full h-auto" />
    <h2 className="text-4xl text-black mt-4">Side table 02</h2>
    <a href="/shop" className="text-2xl font-bold text-black no-underline relative hover:underline">View More</a>
  </div>
</section>

<section className="text-center p-12">
  <h1 className="text-5xl font-bold mb-4">Top Picks For You</h1>
  <p className="text-2xl text-gray-600 mb-8">
    Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
  </p>
  <div className="flex justify-center gap-24 flex-wrap">
    <div className="text-center border-4 border-gray-300 rounded-lg p-4 transition-transform duration-300 hover:scale-105">
      <img src="4.jpg" alt="Trenton modular sofa" className="w-full rounded-md" />
      <h2 className="text-lg font-bold mt-4">Trenton modular sofa_3</h2>
      <p className="text-gray-800">Rs. 25,000.00</p>
    </div>
    <div className="text-center border-4 border-gray-300 rounded-lg p-4 transition-transform duration-300 hover:scale-105">
      <img src="5.jpg" alt="Granite dining table with dining chair" className="w-full rounded-md" />
      <h2 className="text-lg font-bold mt-4">Granite dining table with dining chair</h2>
      <p className="text-gray-800">Rs. 25,000.00</p>
    </div>
    <div className="text-center border-4 border-gray-300 rounded-lg p-4 transition-transform duration-300 hover:scale-105">
      <img src="6.jpg" alt="Outdoor bar table and stool" className="w-full rounded-md" />
      <h2 className="text-lg font-bold mt-4">Outdoor bar table and stool</h2>
      <p className="text-gray-800">Rs. 25,000.00</p>
    </div>
    
  </div>
  <div className="mt-10">
    <a href="#" className="text-xl font-bold text-black border-b-2 border-black hover:underline">View More</a>
  </div>
</section>

<section className="flex justify-between items-center bg-yellow-50 p-12 rounded-lg mb-12">
  <div className="flex-1">
    <img src="8.png" alt="Asgaard Sofa" className="rounded-lg" />
  </div>
  <div className="flex-1 max-w-1/2">
    <h3 className="text-4xl text-gray-700">New Arrivals</h3>
    <h1 className="text-7xl font-bold mt-2">Asgaard sofa</h1>
    <button className="px-4 py-2 text-2xl border-4 border-black hover:bg-black hover:text-white transition duration-300 mt-4">
      Order Now
    </button>
  </div>
</section>

<section className="text-center p-12">
  <h2 className="text-5xl font-bold mb-4">Our Blogs</h2>
  <p className="text-2xl text-gray-600 mb-8">
    Find a bright ideal to suit your taste with our great selection
  </p>
  <div className="flex justify-center gap-20 flex-wrap">
    <div className="w-80 bg-white border border-gray-300 rounded-lg text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img src="9.jpg" alt="Blog 1" className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold mt-4">Going all-in with millennial design</h3>
      <p className="text-black border-b border-black mt-2 cursor-pointer">Read More</p>
      <div className="text-gray-500 mt-4">12th Oct 2024</div>
    </div>
    <div className="w-80 bg-white border border-gray-300 rounded-lg text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img src="10.jpg" alt="Blog 2" className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold mt-4">Going all-in with millennial design</h3>
      <p className="text-black border-b border-black mt-2 cursor-pointer">Read More</p>
      <div className="text-gray-500 mt-4">12th Oct 2024</div>
    </div>
    <div className="w-80 bg-white border border-gray-300 rounded-lg text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img src="11.jpg" alt="Blog 3" className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold mt-4">Going all-in with millennial design</h3>
      <p className="text-black border-b border-black mt-2 cursor-pointer">Read More</p>
      <div className="text-gray-500 mt-4">12th Oct 2024</div>
    </div>
  </div>
  <div className="mt-8">
    <a href="/blog" className="text-xl font-bold text-black border-b-2 border-black hover:underline">View All Posts</a>
  </div>
</section>

<section className="bg-white h-[80vh] flex flex-col justify-center items-center text-center">
  <img src="12.jpg" alt="Instagram Image" className="rounded-lg" />
</section>

  </section>

<section>
  <Footer />
</section>
  </div>

  
  );
}
