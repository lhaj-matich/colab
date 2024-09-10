import Image from "next/image";

import RightIconBlack from "@/assets/right_arrow_black.svg";
import RightIconBlue from "@/assets/right_arrow_blue.svg";
import { twMerge } from "tailwind-merge";
import { features } from "@/lib/constants";

interface FeatureCardProps {
  image: any;
  title: string;
  content: string;
  inverted: boolean;
}

const FeatureCard = ({ inverted, image, title, content }: FeatureCardProps) => {
  return (
    <div
      className={twMerge(
        "border-[1px] border-[#999] w-[330px] rounded-2xl p-5",
        inverted && "border-none bg-primary text-white"
      )}
    >
      <div className="text-center flex flex-col items-center gap-4">
        <div
          className={twMerge(
            "bg-primary w-[100px] h-[100px] rounded-full flex justify-center items-center",
            inverted && "bg-white"
          )}
        >
          <Image src={image} alt={`${title} icon`} height={44} />
        </div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-medium leading-[20px]">{content}</p>
      </div>
      <div className="flex w-full justify-center mt-5">
        <button
          className={twMerge(
            "border-[2px] p-1 rounded-full border-black",
            inverted && "border-none bg-white p-[6px]"
          )}
        >
          {inverted ? (
            <Image src={RightIconBlue} alt="Right icon black" height={15} />
          ) : (
            <Image src={RightIconBlack} alt="Right icon black" height={15} />
          )}
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center section-container mx-auto">
        <h3 className="section-tag">Our Services</h3>
        <h2 className="section-heading mt-4">
          Perfect Solution For Your Business
        </h2>
        <p className="section-description mt-4">
          We provide tailored digital solutions, including web design,
          development, and marketing strategies, to drive your brand’s success.
        </p>
      </div>
      <div className="py-20 flex justify-around gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.category}
            content={feature.content}
            image={feature.image}
            inverted={feature.inverted}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
