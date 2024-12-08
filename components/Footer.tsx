import Link from "next/link";

export default function Footer() {
    return (


        <footer className="footer">
      <div className="footer-content">
        <address>
            <p> 400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA</p>
        </address>
        <div className="footer-links">
          <ul>
          <p>Links</p>
          <br />
            <li><a href="/">Home</a></li>
            <br />
            <li><a href="/shop">Shop</a></li>
            <br />
            <li><a href="/about">About</a></li>
            <br />
            <li><a href="/contact">Contact</a></li>
            <br />
          </ul>
        </div>
        <div className="footer-help">
          <ul>
          <p>Help</p>
          <br />
            <li><a href="/payment-options">Payment Options</a></li>
            <br />
            <li><a href="/returns">Returns</a></li>
            <br />
            <li><a href="/privacy-policies">Privacy Policies</a></li>
            <br />
          </ul>
        </div>
        <div className="footer-newsletter">
        <p>NewsLetter</p>
        <br />
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <p>© 2024 Micheal Kings. All rights reserved</p>
    </footer>
    )

        
};

