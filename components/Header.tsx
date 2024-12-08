import Link from "next/link";

export default function Header() {
    return (
      <header>
      <nav>
        
        <button className="hamburger" >
          ☰
        </button>

    
        <ul className="desktop-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

    
        <div className={`nav-links $`}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="icons">
          <Link href="/account">
            <span role="img" aria-label="User Icon">👤</span>
          </Link>
          <Link href="/">
            <span role="img" aria-label="Search Icon">🔍</span>
          </Link>
          <Link href="/">
            <span role="img" aria-label="Heart Icon">❤️</span>
          </Link>
          <Link href="/cart">
            <span role="img" aria-label="Cart Icon">🛒</span>
          </Link>
        </div>
      </nav>
    </header>
      )
};

