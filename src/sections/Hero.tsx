import PlayIcon from "@/assets/play_button.svg";
import HeroImage from "@/assets/hero_image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex py-6 items-center">
        <div className="flex flex-col gap-10 max-w-[400px]">
          <div>
            <h3 className="section-tag">
              A Trusted Digital Agency
            </h3>
            <h1 className="text-[48px] font-semibold leading-[60px] tracking-tight mt-4">
              We're A Creative Digital Agency.
            </h1>
            <p className="text-black/40 mt-4">
              At colab, we turn creative ideas into stunning digital expericens
              that drive results.
            </p>
          </div>
          <div className="flex gap-1">
            <button className="btn btn-primary">Get Started</button>
            <button className="flex items-center gap-2 btn">
              <Image src={PlayIcon} alt="Play icon" />
              <span>How it works</span>
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
