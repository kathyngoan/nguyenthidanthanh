import CodeBlockThreeAskComponent from "@/components/CodeBlockThreeAskComponent";
import CodeBlockThreeAnsweComponent from "@/components/CodeBlockThreeAnsweComponent";

const MessyReactPage = () => {
  return (
    <div className="container mx-auto p-6">

      <div className="mx-auto">
        <div className="grid sm:grid-cols-2 gap-2 bg-black text-white">
          {/* Left */}
          <div data-aos="fade-in">
            <CodeBlockThreeAskComponent />
          </div>

          {/* Right */}
          <div className="pb-8 text-sm" data-aos="fade-in" data-aos-delay="300" >
                <CodeBlockThreeAnsweComponent />
              </div>
        </div>
      </div>
    </div>
  );
};

export default MessyReactPage;
