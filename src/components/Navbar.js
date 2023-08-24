import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleClose = () => {
    setToggleMenu("");
  };
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  // const { data: session } = useSession();



  return (
    <div>
      <section className="fixed top-0 left-0 right-0 z-50 2xl:px-[43px] xl:px-6 p-4 lg:px-[18px] px-4 py-2 lg:shadow-none lg:shadow-none shadow-whiteD   shadow-hearderS  bg-blue-100  lg:p-0 lg:relative">
        <nav className=" w-full z-[999] flex items-center container mx-auto justify-between navbar navbar-expand-lg navbar-light lg:h-[80px]">
          <div className="flex items-center justify-between w-full px-0">
            <Link to="/" className="flex" >
              <div className="flex font-bold md:text-[25px] sm:text-[22px] text-[16px] items-center">
                <span className="lg:ml-2 font-bold text-[#000000]">
                  Trading
                </span>
              </div>
            </Link>

            <div className="flex items-center">
         
                <Link to="/login-signup" className="text-black">
                  Login
                </Link>
    
                <div className="flex items-center">
                  <div className="  cursor-pointer nav-item">
                    <div className="relative">
                      <button
                        className="w-12 rounded-full h-12 bg-slate-300 shadow-lg"
                        // onClick={handleDropdownClick}
                      >
                        <span className={`${isOpen ? "" : ""} `}>
                          Logout
                        </span>
                      </button>
                      {isOpen && (
                        <div className="absolute top-10 right-0 z-50 w-48 py-2 bg-white rounded-md shadow-lg">
                          <button
                            className="block px-4 py-2 hover:bg-gray-200"
                            // onClick={handleLogoutClick}
                          >
                            Log Out
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
          
              <div className="inline-block lg:hidden md:inline-block">
                <div className="flex items-center">
                  <button
                    className=" border-0 py-2 px-2.5 pr-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
                    type="button"
                    onClick={() => setMenu(true)}
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      className="w-8 text-[#080808] h-8"
                    />
                  </button>
                </div>
              </div>
              <div
                className={`${menu == true ? "w-[214px] " : "w-0"
                  } bg-transparent lg:bg-transparent fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50 lg:w-auto xl:h-auto lg:h-auto flex xl:justify-end lg:justify-end items-start`}
              >
                <ul
                  className="navbar-nav relative text-center  lg:w-full w-[214px] lg:h-auto h-[100vh] lg:bg-transparent  bg-blue-200   xl:flex lg:flex  md:flex-col flex-col  items-center pl-0 list-style-none xl:h-auto
          "
                >
                  <li className="flex justify-end w-full px-1 pt-1 pb-3 text-right lg:pt-0 lg:pb-0 ">
                    <button
                      className={` ${menu == true
                        ? " custom-navbar-toggler inline-block"
                        : "hidden"
                        } 
              lg:hidden
              border-0
              py-2  px-2.5
              bg-transparent
              focus:outline-none
             focus:ring-0 focus:shadow-none
             focus:no-underline `}
                      type="button"
                      onClick={() => setMenu(false)}
                    >
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="w-9 text-[#060606] h-9"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Navbar;
