import React from "react";

function Cards({ item }) {
  // console.log(item);

  return (
    <>
      <div className="mt-4 my-3 p-3 dark:bg-slate-900 dark:text-white dark:outline">
        <div className="card bg-base-100 
          rounded-md w-[px] shadow-xl mx-auto md:mx-0 hover:scale-105 duration-300 ">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-white dark:bg-slate-900 dark:text-white text-black">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">free</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
