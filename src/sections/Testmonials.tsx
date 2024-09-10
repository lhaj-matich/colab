import TestmonialList from "@/app/components/TestmonialList";


const Testmonials = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center section-container mx-auto">
        <h3 className="section-tag">Clients Testmonial</h3>
        <h2 className="section-heading mt-4">What our clients say about us?</h2>
      </div>
      <div className="flex py-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-x-clip">
        <div className="flex gap-4">
          <TestmonialList />
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
