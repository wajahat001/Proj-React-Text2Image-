import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create Ai Image
      </h1>
      <p className="text-gray-500 mb-8 ">Turn you image into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xl:w-96 rounded-lg "
          src={assets.sample_img_1}
          alt=""
        />
        <div>
          <h2 className="text-3xl font-medium mb-4 max-w-lg">
            Introducing the AI text to image generator
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos excepturi optio sint eaque ex nobis, accusantium
            nliquam, asperiores libero itaque velit, a esse quas reprehenderit
            consequuntur illum vero temporibus laborum deserunt?
          </p>
          {/* description  */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem
            perferendis tempora assumenda repellat dolore nisi unde eligendi quo
            tenetur animi et esse ea pariatur harum maxime, iste ab praesentium
            ad. Inventore quidem unde reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
