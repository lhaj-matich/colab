import Image from "next/image";
import AdobeLogo from "@/assets/adobe_icon.svg";
import AndreessenLogo from "@/assets/andreessen_logo.svg";
import AmazonLogo from "@/assets/amazon_logo.svg";
import AirbnbLogo from "@/assets/airbnb_logo.svg";

const IconTicker = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-around w-full">
        <Image height={40} src={AdobeLogo} alt="Adobe Logo" />
        <Image height={40} src={AndreessenLogo} alt="Andreessen Logo" />
        <Image height={40} src={AmazonLogo} alt="Amazon Logo" />
        <Image height={40} src={AirbnbLogo} alt="Airbnb Logo" />
      </div>
    </section>
  );
};

export default IconTicker;
