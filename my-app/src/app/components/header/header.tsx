import logo from "../../../../public/assets/images/logo/LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <div>
          <Image 
            src={logo}
            className="logo"
            width={150}
            height={30}
            alt="Logo" />
      </div>
    <nav className="navMenu">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

    </nav>
        
    </header>
  );
}
