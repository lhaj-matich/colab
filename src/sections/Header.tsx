import Image from "next/image";
import Logo from '@/assets/colab_logo.svg';

const Header = () => {
  return (
    <header className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <nav className="flex gap-7 items-center">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Projects</a>
          <a href="#" className="link">Servcies</a>
          <a href="#" className="link">Blog</a>
          <a href="#" className="link">About</a>
          <a href="#" className="link">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button className="btn">Sign up</button>
          <button className="btn btn-primary">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
