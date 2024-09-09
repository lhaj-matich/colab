import Image from "next/image";
import ProductImage from "@/assets/product_image.png";

const ProductShowCase = () => {
  return (
    <section className="container mx-auto">
      <div>
        <div className="text-center section-container">
          <h3 className="section-tag">Discover & Explore</h3>
          <h2 className="section-heading mt-4">We Work to Help You Grow</h2>
          <p className="section-description mt-4">
            Uncover new opportunities and delve into innovative solutions.
            Explore our offerings to find the perfect fit for your needs and
            aspirations.
          </p>
        </div>
        <div className="flex justify-center py-24">
          <Image src={ProductImage} alt="Product image" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
