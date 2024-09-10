import Image from "next/image";
import CogIcon from "@/assets/cog_logo.svg";
import officeImage from "@/assets/office_image.png";
import { processes } from "@/lib/constants";

interface ProcessCardProps {
  icon: any;
  title: string;
  content: string;
}

const ProcessCard = ({ icon, title, content }: ProcessCardProps) => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex justify-center items-center h-[70px] w-[70px] bg-primary rounded-full">
        <Image src={icon} alt={`${title} icon`} height={33} />
      </div>
      <div className="flex flex-col gap-3 max-w-[260px]">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-black/50">{content}</p>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="flex justify-between items-center">
        <div>
          <div className="max-w-[530px]">
            <h3 className="section-tag">Why You Choose Us?</h3>
            <h2 className="section-heading mt-4">
              Specialist in finding advising clients on financial challenges
            </h2>
            <p className="section-description mt-4">
              Join a growing list of satisfied clients who trust us to elevate
              their brands. Our proven track record and dedication to
              excellence.
            </p>
          </div>
          <div className="py-8 flex flex-col gap-5">
            {processes.map((process, i) => {
              return (
                <ProcessCard
                  title={process.title}
                  content={process.content}
                  icon={process.icon}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="h-[610px] w-[420px] bg-primary rounded-2xl absolute z-0 left-10 -top-4 rotate-6"></div>
          <Image
            src={officeImage}
            alt="Office image"
            className="relative z-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
