import { useState } from "react";
import imgcheck from "../images/1.png"
import eyeSlash from "../images/eye-slash.svg"
import signinImage from "../images/singinImage.png"
import Google from "../images/g.svg"
import github from "../images/git.svg"
import micrioso from "../images/micro.svg"
import { Link } from "react-router-dom";
export default function Siginform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    setIsSubmitted(true);
    setIsLoggedIn(true);
  };
  return (
    <>
      <section className=" object-cover lg:bg-transparent bg-cover bg-no-repeat items-start justify-center relative 2xl:h-screen xl:h-[721px] lg:h-[700px] md:h-[650px] h-auto  ">
        {/* <img src={imgcheck} className="w-full lg:block hidden absolute  top-0 left-0 right-0 bottom-0 h-full" /> */}
        <div className="grid grid-cols-1 !z-50 lg:h-screen  items-center justify-center">
          <div className="flex items-center md:flex-nowrap flex-wrap gap-5 rounded-[5px]-2xl w-full overflow-hidden mx-auto">
            <div
              className="xl:w-[35%] md:w-1/2 flex flex-col items-center justify-center h-screen bg-slate-400 w-full">
              <img
                src={signinImage}
                className="w-full inline-block"
                alt="Sample image" />
            </div>
            <div className="xl:w-[62%] md:w-1/2 w-full z-50">
              <div className="flex items-center justify-between lg:mb-20 md:mb-10 mb-5">
                <div>
                  <h4 className="lg:text-3xl font-bold">Sign in</h4>
                </div>
                <div><Link className='text-lg text-[#DB2777]  font-semibold' to='/login'>Sign in</Link></div>
              </div>
              <p className="text-[#DB2777]">
                We are unable to connect with your account. Please try again
              </p>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex justify-center gap-3 items-center bg-[#DC2626] rounded-full w-full text-white font-semibold h-14 text-center" type="submit">
                  <img className="w-6" alt="icons" src={Google} />
                  Google
                </button>
                <button className="flex justify-center gap-3 items-center bg-[#0284C7] rounded-full w-full text-white font-semibold h-14 text-center" type="submit">
                  <img className="w-6" alt="icons" src={github} />
                  github
                </button>
                <button className="flex justify-center gap-3 items-center bg-[#0891B2] rounded-full w-full text-white font-semibold h-14 text-center" type="submit">
                  <img className="w-6" alt="icons" src={micrioso} />
                  micrioso
                </button>

              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:w-1/2 gap-3"
                >
                  <div className="lg:mb-4 mt-8 md:mb-3 mb-2">

                    <input
                      className="text-white w-full h-14 px-3 rounded-[5px] bg-transparent border border-[#b2b2b2] active:border focus:border "
                      placeholder="Your Nmae"
                      type="text"
                      id="number"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="lg:mb-4 md:mb-3 mb-2">
                    <label className="block text-white text-sm font-medium mb-[2px]" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="text-white w-full h-14 px-3 rounded-[5px] bg-transparent border border-[#b2b2b2] active:border focus:border "
                      placeholder="@john@emil.com"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="lg:mb-4 md:mb-3 mb-2">

                    <div className="relative flex items-center ">
                      <input
                        className="text-white w-full h-14 px-3 rounded-[5px] bg-transparent border border-[#b2b2b2] active:border focus:border"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="8+ characters required"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 mr-5 mt-4 focus:outline-none"
                        onClick={handleTogglePassword}
                      >
                        <img className="w-6 mx-auto" alt="icons" src={showPassword ? (imgcheck) : (eyeSlash)} /> </button></div>
                  </div>
                  <div className="lg:mb-4 md:mb-3 mb-2 flex items-center justify-between">
                    <Link className="text-[#DB2777]">
                      I have read and accept the Privacy Policy & Cooky Policy
                    </Link>

                  </div>
                  <button className="bg-[#DB2777] rounded-full w-[150px] text-white font-semibold h-14 text-center" type="submit">Login</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
