import React from "react";
import menu from "./menu.json";

function Card() {
  return (
    <div>
    {menu.map((item) => (
      <div key={item.id}>
        <div className="mb-[6px]">
          <h2 className="text-white inline-block font-roboto font-medium text-[32px] leading-[28px] tracking-normal align-middle">
            {item.name}
          </h2>
          <h2 className="text-white inline-block font-roboto font-normal text-[32px] leading-[100%] tracking-normal align-middle">
            .........................................................................
          </h2>
          <h2 className="text-white inline-block font-roboto font-semibold text-[32px] leading-[28px] tracking-normal align-middle">
            ${item.price}
          </h2>
        </div>
        <p className="text-white mb-[28px] font-roboto font-normal text-[22px] leading-[1.2] tracking-normal align-middle">
          {item.description}
        </p>
      </div>
    ))}
  </div>
  );
}

export default Card;
