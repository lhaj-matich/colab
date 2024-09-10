import ContactImage from "@/assets/contact_us_illustration.svg";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center">
        <div>
          <div className="section-container">
            <h3 className="section-tag">Contact Us</h3>
            <h2 className="section-heading mt-4">Ready to get started ?</h2>
            <p className="section-description mt-4">
              Reach out to us, and our team will get back to you promptly with
              the support you need.
            </p>
            <button className="btn btn-primary mt-8">Get In Touch</button>
          </div>
        </div>
        <div>
          <Image src={ContactImage} width={900} alt="Contact image" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
