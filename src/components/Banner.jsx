import "../components/others/banner.css";
const Banner = () => {
  return (
    <div className="banner-bg-img ">
      <div className="bg-opacity-70 w-full h-full bg-black">
        <div className="flex flex-col items-center md:pt-48 pt-24 lg:pt-56">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white">
            Welcome to the <span className="text-[#ea580c]">Forum</span>
          </h1>
          <p className="lg:text-2xl md:text-xl text-base mt-5 text-[#f1f5f9]">
            The most popular forum on the internet!
          </p>
          <div className="mt-16 flex items-center">
            <div className="border rounded-s-md">
              <input
                className="pl-5 py-4 md:pr-28 lg:pr-48 w-full text-left"
                type="search"
                name=""
                id=""
                placeholder="Search for Topic"
              />
            </div>
            <button className="text-white font-semibold text-xl rounded-e-md px-4 py-4 bg-[#ea580c] hover:bg-slate-700">
              Search
            </button>
          </div>
          <div className="mt-5 flex lg:flex-row md:flex-row flex-col items-center gap-4">
            <h3 className="text-xl  font-semibold text-[#cbd5e1] ">
              Popular topics:
            </h3>
            <h3 className="text-xl  font-semibold text-[#cbd5e1] underline underline-offset-2">Helpdest</h3>
            <h3 className="text-xl  font-semibold text-[#cbd5e1] underline underline-offset-2">
              Introduction
            </h3>
            <h3 className="text-xl font-semibold text-[#cbd5e1] underline underline-offset-2">Payment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
