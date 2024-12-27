import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
<<<<<<< HEAD
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(true);
=======
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {};

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative ">
          <img className="max-w-sm rounded " src={image} alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading....</p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 my-10 rounded-full  ">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color "
            placeholder="Describe what you want to generate"
            type="text"
          />
          <button
            className="bg-zinc-900 px-10 py-3 sm:px-16 rounded-full"
            type="submit"
          >
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full ">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 px-8 py-3 rounded-full text-black cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
