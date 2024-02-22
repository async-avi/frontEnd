import "./index.css";
import arrow from "../assets/arrow-left.svg";
import google from "../assets/google.svg";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        style={{ width: "80%", height: "80%" }}
        className=" grid grid-cols-2 shadow-2xl"
      >
        <div className="flex flex-col p-6 bg-white">
          <div className="w-full flex justify-between">
            <img src={arrow} alt="arrow" width={30} />
            <h2 className="text-gray-400 text-lg font-bold">Register</h2>
          </div>
          <div className="h-full p-20">
            <div>
              <h1 className="font-bold text-2xl">Login</h1>
              <p className="mt-4 mb-10">
                Welcome! Please fill username and password to Sign In in your
                account
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="rounded w-full h-10 my-4 bg-gray-200 placeholder:bold placeholder:text-slate-600 px-4"
                />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="rounded w-full h-10 bg-gray-200 px-4 placeholder:bold placeholder:text-slate-600"
                />
                <div className="flex w-full justify-end my-4">
                  <p className="font-bold text-gray-400">
                    Forgot your Password?
                  </p>
                </div>
                <div className="w-full flex flex-col items-center justify-between h-20">
                  <button className="bg-button text-white w-full rounded-xl text-lg font-semibold h-10">
                    Login Now
                  </button>
                  <div className="w-72 border-b-2 border-gray-400 bg-red-50"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="banda">
          <div className="h-full w-full flex flex-col justify-end items-center py-28 text-white ">
            <div>
              <h1 className="text-3xl font-bold">Start your journey now</h1>
              <span>
                Check out premium quality images from top photographers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
