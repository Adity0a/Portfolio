import React from "react";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: "/mongodb.jpg", name: "MongoDB", videoLink: "https://zoom-psi-nine.vercel.app/", sourceLink: "https://github.com/Adity0a/zoom.git" },
    { id: 2, logo: "/express.png", name: "Express", videoLink: "https://youtu.be/G8uL0lFFoN0", sourceLink: "https://github.com/expressjs" },
    { id: 3, logo: "/reactjs.png", name: "ReactJS", videoLink: "https://care-booker-360-y8cr.vercel.app/", sourceLink: "https://github.com/Adity0a/care-booker-360.git" },
    { id: 4, logo: "/node.png", name: "NodeJS", videoLink: "https://youtu.be/fBNz5xF-Kx4", sourceLink: "https://github.com/nodejs" },
    { id: 5, logo: "/python.webp", name: "Python", videoLink: "https://youtu.be/rfscVS0vtbw", sourceLink: "https://github.com/python" },
    { id: 6, logo: "/java.png", name: "Java", videoLink: "https://youtu.be/eIrMbAQSU34", sourceLink: "https://github.com/openjdk" },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
        {cardItem.map(({ id, logo, name, videoLink, sourceLink }) => (
          <div key={id} className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition duration-300 flex flex-col items-center">
            <img src={logo} className="w-[100px] h-[100px] object-cover" alt={name} />
            <h2 className="font-bold text-xl mt-2">{name}</h2>
            <p className="text-gray-600 text-center"></p>
            <div className="mt-4 flex space-x-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                <a href={videoLink} target="_blank" rel="noopener noreferrer">Video</a>
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                <a href={sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
