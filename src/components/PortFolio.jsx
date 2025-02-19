import React from "react";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: "/mongodb.jpg", name: "MongoDB" },
    { id: 2, logo: "/express.png", name: "Express" },
    { id: 3, logo: "/reactjs.png", name: "ReactJS" },
    { id: 4, logo: "/node.png", name: "NodeJS" },
    { id: 5, logo: "/python.webp", name: "Python" },
    { id: 6, logo: "/java.png", name: "Java" },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
        {cardItem.map(({ id, logo, name }) => (
          <div key={id} className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition duration-300 flex flex-col items-center">
            <img src={logo} className="w-[100px] h-[100px] object-cover" alt={name} />
            <h2 className="font-bold text-xl mt-2">{name}</h2>
            <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="mt-4 flex space-x-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Video
                 <ul>
                <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <MongoDB/>
                    </a>
                </li>
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
