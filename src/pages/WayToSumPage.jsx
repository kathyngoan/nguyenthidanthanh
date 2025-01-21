import CodeBlockOneAskComponent from "@/components/CodeBlockOneAskComponent";
import CodeBlockOneAnsweComponent from "@/components/CodeBlockOneAnsweComponent";

const WayToSumPage = () => {
  return (
    <div className="container mx-auto p-6">

      <div className="mx-auto">
        <div className="grid sm:grid-cols-2 gap-2 bg-black text-white rounded-lg">
          {/* Left */}
          <div className="overflow-hidden" data-aos="fade-in">
            <CodeBlockOneAskComponent />
          </div>

          {/* Right */}
          <div className="flex items-center justify-center" data-aos="fade-in" data-aos-delay="300" >
            <div className="divide-y divide-gray-300/50">
              <div className="pb-8 text-base leading-7">
                <CodeBlockOneAnsweComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WayToSumPage;
