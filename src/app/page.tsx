import CallToAction from "@/sections/CallToAction";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import IconTicker from "@/sections/IconTicker";
import Pricing from "@/sections/Pricing";
import Process from "@/sections/Process";
import ProductShowCase from "@/sections/ProductShowCase";
import Testmonials from "@/sections/Testmonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <IconTicker />
      <Features />
      <ProductShowCase />
      <Process />
      <Testmonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}
