import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true); //useStste is null because the user is not login yet
  const navigate = useNavigate(); //Navigate from one page to other this is react-router-dom hook

  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? ( //Agar userlogin ha tu ye  wala div display hoga
          <div>
            <button>
                <img className="w-5" src={assets.credit_star} alt="" />
                <p>Credit Left : 50</p>
            </button>
            <p>Hi, Wajahat</p>
            <div className="relative group" >
                <img className="w-10 drop-shadow" src={assets.profile_icon} alt="" />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 " >
                    <ul>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
          </div>
        ) : (
          // agar user login nai ha tu ye wala div display  hoga The OnClick in p tag will navigate you to BuyCredit Page when you click on Pricing 
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p> 
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login 
            </button> 
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
