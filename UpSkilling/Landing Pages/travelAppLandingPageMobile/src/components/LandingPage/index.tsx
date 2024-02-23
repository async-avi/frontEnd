import "./index.css";
export default function LandingPage() {
  return (
    <main className="w-screen h-screen relative">
      <div className="bg-black absolute opacity-25 h-full w-full"></div>
      <div className="h-full w-full flex flex-col absolute">
        <div className="basis-1/2 px-8 py-4">
          <h1 className="text-6xl text-white font-bold">Explore.</h1>
          <h1 className="text-5xl text-black font-bold my-2">Travel.</h1>
          <h1 className="text-5xl text-black font-bold">Inspire.</h1>
          <div className="text-white my-10 italic text-2xl">
            <p>Life is all about journey</p>
            <p>Find yours</p>
          </div>
        </div>
        <div className="text-white basis-1/2">
          <div className="h-full w-full flex justify-center items-end py-32 px-8">
            <button className="text-2xl bg-blue-900 w-full rounded-2xl min-h-[50%] sm:min-h-[30%] flex justify-center items-center">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="22"
                fill="white"
                className="bi bi-arrow-right ml-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
