import { AiFillStar } from "react-icons/ai";
import React from "react";
import Image from "next/image";

function ProductComponent() {
  const AllInfo = [
    {
      src: "/images/productionImage (x).jpg",
      title: "Web development",
      description:
        "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$60",
      stars: 3,
      id: 1,
    },
    {
      src: "/images/productionImage (x).jpg",
      title: "graphic designer",
      description:
      "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$50",
      stars: 4,
      id: 2,
    },
    {
      src: "/images/productionImage (x).jpg",
      title: "digital marketing",
      description:
      "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$80",
      stars: 5,
      id: 3,
    },
    {
      src: "/images/productionImage (x).jpg",
      title: "software dev",
      description:
      "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$37",
      stars: 2,
      id: 4,
    },
    {
      src: "/images/productionImage (x).jpg",
      title: "it consulting",
      description:
      "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$54",
      stars: 4,
      id: 5,
    },
    {
      src: "/images/productionImage (x).jpg",
      title: "app development",
      description:
      "The result of our company branding process is a comprehensive brand guideline that can be used on design a marketing website.",

      price: "$74",
      stars: 3,
      id: 6,
    },
  ];

  const Stars = ({ stars }) => {
    const renderStars = () => {
      const starComponents = [];
      for (let i = 0; i < 5; i++) {
        if (i < stars) {
          starComponents.push(
            <AiFillStar className="text-yellow-300" size={30} />
          );
        } else {
          starComponents.push(
            <AiFillStar className="text-gray-300" size={30} />
          );
        }
      }
      return starComponents;
    };

    return (
      <div className="flex flex-row items-center justify-center">
        {renderStars()}
      </div>
    );
  };

  return (
    <div className="max-xl:mt-8 max-xl:pt-4 lg:mt-5 w-[80%]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 mx-auto  gap-3 mb-10">
      {AllInfo.map((info, i) => (
        <div className=" " key={info.id}>
          <div className="border-2 xl:w-[90%] mx-auto space-y-4 shadow-lg rounded hover:border-blue-400">
            <div className="rounded ">
              <Image
                src={`/images/productionImage (${i + 1}).jpg`}
                height={700}
                width={700}
                alt="production image"
                className="h-60 rounded mx-auto "
              />
            </div>
            <p className="text-center roboto-bold tracking-widest uppercase">
              {info.title}
            </p>
            <p className="text-center tracking-tighter text-gray-600 text-wrap p-1">
              {info.description}
            </p>
            <p className="text-center text-gray-400 text-2xl">{info.price}</p>

            <Stars stars={info.stars} />

            <button className="text-center text-white bg-blue-600 w-full  py-3  hover:bg-blue-500 hover:ring-2 rounded-b">
              ADD TO CARD
            </button>
          </div>
         
        </div>
      ))}
    </div>
  );


}
export default ProductComponent;
