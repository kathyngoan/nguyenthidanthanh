const HomePage = () => {
  const boxes = [
    {
      id: 1,
      title: "Way To Sum",
      link: "/WayToSumPage",
      description: "Problem 1",
    },
    {
      id: 2,
      title: "Fancy Form",
      link: "/FancyPage",
      description: "Problem 2",
    },
    {
      id: 3,
      title: "Messy React",
      link: "/MessyReactPage",
      description: "Problem 3",
    },
  ];

  return (
    <div className="text-white py-10">
      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-5 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-10 text-orange-300" data-aos="fade-in">Welcome to My Test</h1>
          <div className="uppercase" data-aos="fade-in" ><span className="inline-flex w-[100px]"data-aos-delay="300">Full Name : </span>Nguyen Thi Dan Thanh</div>
          <div data-aos="fade-in" data-aos-delay="600" ><span className="inline-flex w-[100px]">Position : </span>Front End Developer</div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {boxes.map((box, index) => (
            <a
              key={box.id}
              href={box.link}
              className={`box p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300`}
              data-aos="fade-in"
              data-aos-delay={index * 300}
            >
              <h2 className="oxanium-font text-xl uppercase font-bold text-yellow-50 mb-2">
                {box.title}
              </h2>
              <p className="text-gray-100">{box.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
