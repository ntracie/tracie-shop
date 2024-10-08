import { Star } from "lucide-react";
import React from "react";
const cardArr = [
  {
    price: "$56.93",
    description: "Columbia Men,s Bahama Vent PFG Boat Shoe",
    image:
      "https://img.freepik.com/premium-psd/black-white-sneaker-that-is-made-by-company_670382-344747.jpg?ga=GA1.1.1138650661.1707985763&semt=ais_hybrid",
  },
  {
    price: "$86.93",
    description: "Columbia Men,s  VANZ",
    image:
      "https://img.freepik.com/premium-photo/breathable-rubber-shoes-footwearai-genarator_1299778-5091.jpg?ga=GA1.1.600774081.1726061200&semt=ais_hybrid",
  },
  {
    price: "$96.93",
    description: "Vanva Canvas",
    image:
      "https://img.freepik.com/premium-photo/lovely-skechers-isolated-white-background_787273-20152.jpg?semt=ais_hybrid",
  },
  {
    price: "$106.9",
    description: "Black Canvas",
    image:
      "https://img.freepik.com/premium-psd/black-white-sneaker-that-is-made-by-company_670382-344747.jpg?ga=GA1.1.1138650661.1707985763&semt=ais_hybrid",
  },
];
export default function page() {
  return (
    <div className='container w-[100%] min-h-[100vh] p-4 flex items-center justify-center flex-col'>
      <h1 className='text-amber-900 font-bold text-[2rem] mb-5'>SHOES FOR MEN</h1>
      <div className='inner-container bg-white w-[100%] min-h-[60vh] flex lg:flex-row md:flex-row flex-col items-center justify-center gap-4'>
        {cardArr.map((card, i) => {
          return (
            <div
              key={i}
              className='card  flex justify-center items-center flex-col bg-slate-200  p-4'
            >
              <div className=' w-[100%] h-[10%]  flex justify-center items-center'>
                <img src={card.image} className='w-[100%] h-[100%]' alt='' />
              </div>
              <div className='details w-[100%]  h-[30%]'>
                <p className='text-yellow-500'>{card.price}</p>
                <p>{card.description}</p>
                <p>
                  <span className=' flex'>
                    <Star />
                    <Star />
                    <Star />
                  </span>
                  <span>15 Reviews</span>
                </p>
                {/* <p>****15 Reviews</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
