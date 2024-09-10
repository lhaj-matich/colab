import Image from "next/image";

import { pricingPackages } from "@/lib/constants";
import { twMerge } from "tailwind-merge";

import CheckIcon from "@/assets/check_icon.svg";
import CheckIconWhite from "@/assets/check_icon_white.svg";

interface CardCheckItemProps {
  content: string;
  inverted: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  inverted: boolean;
}

const CardCheckItem = ({ content, inverted }: CardCheckItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={twMerge(
          "flex justify-center items-center h-5 w-5 bg-[#D9D9D9]/50 rounded-full",
          inverted && "bg-[#318BF8]"
        )}
      >
        {!inverted ? (
          <Image src={CheckIcon} alt="Check icon" />
        ) : (
          <Image src={CheckIconWhite} alt="Check icon" />
        )}
      </div>
      <span
        className={twMerge(
          "text-black/50 font-medium tracking-tight",
          inverted && "text-white"
        )}
      >
        {content}
      </span>
    </div>
  );
};

const PricingCard = ({
  name,
  description,
  price,
  features,
  inverted,
}: PricingCardProps) => {
  return (
    <div
      className={twMerge(
        "py-5 px-8 h-[475px] flex flex-col gap-5 justify-end rounded-2xl max-w-[300px]",
        inverted && "bg-primary text-white"
      )}
    >
      <div className="h-[400px] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-1">
            <h3 className="text-4xl font-bold">${price}</h3>
            <span
              className={twMerge(
                "text-lg font-medium text-black/50",
                inverted && "text-white"
              )}
            >
              /month
            </span>
          </div>
          <h2 className="text-3xl font-medium">{name}</h2>
          <p
            className={twMerge(
              "text-[15px] font-medium text-black/50",
              inverted && "text-white"
            )}
          >
            {description}
          </p>
          <div className="flex flex-col gap-2">
            {features.map((feature, i) => (
              <CardCheckItem key={i} content={feature} inverted={inverted} />
            ))}
          </div>
        </div>
        <button
          className={twMerge(
            "tracking-tight font-medium px-12 py-2 border-[1px] border-black/20 rounded-full",
            inverted && "bg-white text-black border-none"
          )}
        >
          Choose a plan
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center section-container mx-auto">
        <h3 className="section-tag">Pricing Plan</h3>
        <h2 className="section-heading mt-4">Choose Your Plan</h2>
        <p className="section-description mt-4">
          Explore our tailored packages designed to meet your digital marketing
          and website needs, from essential tools to advanced strategies.
        </p>
      </div>
      <div className="relative mt-16">
        <div className="w-full p-3 flex justify-around items-end relative z-10">
          {pricingPackages.map((priceItem, i) => {
            return (
              <PricingCard
                key={i}
                name={priceItem.name}
                description={priceItem.description}
                price={priceItem.price}
                features={priceItem.features}
                inverted={priceItem.inverted}
              />
            );
          })}
        </div>
        <div className="w-full h-[467px] border-[1px] border-black/50 rounded-3xl absolute top-[40px] z-0"></div>
      </div>
    </section>
  );
};

export default Pricing;
