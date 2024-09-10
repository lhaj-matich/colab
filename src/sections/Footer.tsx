import Image from "next/image";

import DarkLogo from "@/assets/logo_dark.svg";
import FacebookLogo from "@/assets/facebook_logo.svg";
import LinkdinLogo from "@/assets/linkdin_logo.svg";
import PintrestLogo from "@/assets/pinterest_logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto pt-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <Image src={DarkLogo} alt="Footer logo" />
          <p>
            Empowering your digital success with innovative marketing strategies
            and custom websites. Connect with us for more information. Let’s
            build your online future together.
          </p>
          <div className="flex gap-4">
            <Image src={FacebookLogo} alt="Facebook logo" />
            <Image src={LinkdinLogo} alt="Linkdin logo" />
            <Image src={PintrestLogo} alt="Pintrest logo" />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold mb-4">Links</h3>
            <Link className="link font-medium" href="#">
              About
            </Link>
            <Link className="link font-medium" href="#">
              Services
            </Link>
            <Link className="link font-medium" href="#">
              Blog
            </Link>
            <Link className="link font-medium" href="#">
              About
            </Link>
            <Link className="link font-medium" href="#">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold mb-4">Socials</h3>
            <Link className="link font-medium" href="#">
              Linkdin
            </Link>
            <Link className="link font-medium" href="#">
              Discord
            </Link>
            <Link className="link font-medium" href="#">
              Whatsapp
            </Link>
            <Link className="link font-medium" href="#">
              Facebook
            </Link>
            <Link className="link font-medium" href="#">
              Github
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 mt-8"></hr>
      <div className="py-4 text-center">
        <span className="font-semibold">&copy; 2024 Colab. All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
