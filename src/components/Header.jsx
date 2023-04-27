import React, { useState } from "react";
import { FaBell, FaCartPlus } from "react-icons/fa";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import Navitem from "./Navitem";


const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Service", path: "/service" },
  ];
  return (
    <>
      <nav className="bg-neutral-100">
        <div className="flex items-center justify-between px-3">
          {/* left container */}
          <div onClick={() => setOpen(!open)} className="flex gap-4 items-center ">
            <div className="">
                <span>
                    {
                        open === true ? <XMarkIcon className="h-6 w-6 text-purple-500"/> : <p href="">
                        <img
                          className="h-5 md:ml-8"
                          src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                          alt=""
                        />
                      </p>
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:gap-5 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Navitem key={route.id} route={route}></Navitem> )
                }
            </ul>
          </div>
          {/* right container */}
          <div className="flex items-center gap-5">
            <div>
              <FaCartPlus />
            </div>
            <div>
              <FaBell />
            </div>
            <div>
              <img
                className="h-6 w-6 rounded-full"
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
