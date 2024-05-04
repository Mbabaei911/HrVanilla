import React from "react";

function PricingComponent() {
  const AllInfo = [
    {
      title: "Startup",
      price: 28,
      description: "The essentials for when you're just getting started.",
      options: [
        "2 projects",
        "Up to 1,000 apps",
        "basic analytics",
        "E-mail support",
      ],
    },
    {
      title: "Business",
      price: 32,
      description:
        "For businesses looking to achieve maximum efficiency and time saving",
      options: [
        "10 projects",
        "Up to 1,000 apps",
        "advanced analytics",
        "24-hour chat support",
        "channel management",
      ],
    },
    {
      title: "Enterprise",
      price: 48,
      description:
        "For businesses looking to achieve maximum competetive and expanding their reach.",
      options: [
        "Unlimited projects",
        "Unlimited apps",
        "advanced analytics",
        "1-hour, support response time",
        "channel management",
        "competitor analysis",
      ],
    },
  ];
  return (
    <div className="">
      <div className="w-[80%]  mx-auto mt-5 ">
        <div>
          <p className="text-4xl roboto-black tracking-tighter py-6">Pricing</p>
        </div>
        <div className=" mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {AllInfo.map((info, i) => {
            return (
              <div
                key={info.title}
                className="p-6 border-2 border-gray-300 rounded-xl space-y-5 h-[700px] w-[90%] relative hover:border-blue-400"
              >
                <div className="  flex flex-col  justify-between h-full">
                  {i === 1 && (
                    <span class="bg-blue-200 text-green-800 text-xs font-bold me-2 px-3 py-1 rounded-full   absolute -top-3">
                      Recommended
                    </span>
                  )}

                  <div className="space-y-3">
                    <p className="roboto-bold  text-xl">{info.title}</p>
                    <div className="flex ">
                      <p className="text-4xl roboto-black">${info.price}</p>
                      <p className="text-md roboto-bold">/month</p>
                    </div>
                    <p className="text-gray-500 ">{info.description}</p>
                    <ul className="space-y-3 pricingUl text-gray-500">
                      {info.options.map((option) => {
                        return <li key={option}>{option} </li>;
                      })}
                    </ul>
                  </div>
                  <div className="">
                    <button
                      className={`w-full  py-2 rounded shadow hover:bg-blue-500 hover:text-white ${
                        i === 1
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-100"
                      }`}
                    >
                      Monthly billing
                    </button>
                  </div>
                </div>
              </div>
            );
          })}          
         </div>
      </div>
    </div>
  );
}

export default PricingComponent;
