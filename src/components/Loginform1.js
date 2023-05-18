import { useState } from "react";
import imgcheck from "../images/1.png"
import eyeSlash from "../images/eye-slash.svg"
export default function Loginform1() {
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
        <img src={imgcheck} className="w-full lg:block hidden absolute  top-0 left-0 right-0 bottom-0 h-full" />
        <div className="grid grid-cols-1 !z-50 lg:h-screen  items-center justify-center">
          <div className="flex items-center md:flex-nowrap flex-wrap p-12 justify-between rounded-[5px]-2xl lg:w-[80%] overflow-hidden mx-auto">
            <div
              className="xl:w-[42%] md:w-1/2 w-full">
              <img
                src=''
                className="w-full inline-block  h-full"
                alt="Sample image" />
            </div>
            <div className="xl:w-[38%] md:w-1/2 w-full z-50">
              <div className="flex items-centerlg:mb-20 md:mb-10 mb-5 justify-center">
                <img src={imgcheck} className="w-20 mx-auto" />
              </div>
              <div className=" lg:mb-8 md:mb-5 mb-4 !text-left mx-auto">
                <h1 className="lg-text-5xl text-2xl !text-left text-white font-bold">
                  Hi, Welcome Back!
                </h1>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-3"
                >
                  <div className="lg:mb-4 md:mb-3 mb-2">
                    <label className="block text-white text-sm font-medium mb-[2px]" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="text-white w-full h-14 px-3 rounded-[5px] bg-transparent border border-[#FFFFFF] active:border focus:border "
                      placeholder="@john@emil.com"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="lg:mb-4 md:mb-3 mb-2">
                    <label className="block text-white text-sm font-medium mb-[2px]" htmlFor="password">Password</label>
                    <div className="relative flex items-center ">
                      <input
                        className="text-white w-full h-14 px-3 rounded-[5px] bg-transparent border border-[#FFFFFF] active:border focus:border"
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
                    <div className="inline-flex">
                      <label htmlFor="toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            id="toggle"
                            type="checkbox"
                            className="sr-only form-checkbox w-[13px] h-[13px] text-[#ECAD14] transition duration-150 ease-in-out"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <div className={`block ${checked ? 'bg-[#fff]' : 'bg-white'} w-7 h-[14px] rounded-full`}></div>
                          <div className={`dot absolute ${checked ? 'right-1' : 'left-1'} top-[1px] bg-[#ECAD14] w-3 h-3 rounded-full transition`}></div>
                        </div>
                        <span className="ml-3 text-white font-medium">Keep me signed in</span>
                      </label></div>
                    <button className="text-[#ECAD14] border-b border-[#ECAD14]">
                      Forget password?
                    </button>
                  </div>
                  <button className="bg-[#ECAD14] rounded-[5px] text-white font-semibold h-14 text-center" type="submit">Login</button>
                </form>
                <p className="text-[#ECAD14] lg:mt-6 md:mt-4 mt-2 text-center">Powered By:<b>EL Dorado Labs - FZCO</b></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
