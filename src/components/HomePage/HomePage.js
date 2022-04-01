import React from "react";
import photo1 from "../../img/photo1.png";
const HomePage = () => {
  return (
    <>
      <section className="pb-10 bg-[#25274d]">
        <div className="relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-[#AAABB8]">
                Let's chat about healthy hair!
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-[#AAABB8] font-bold font-heading">
                Share your expirences{" "}
                <span className="text-[#AAABB8]">By creating a post</span>
              </h2>
              <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
                Create an account
              </p>
              <a
                className="inline-block px-12 py-5 text-lg text-[#AAABB8] font-bold bg-[#2E9CCA] hover:bg-white rounded-full transition duration-200"
                href="/login"
              >
                Enter Site
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              {<img className="w-full" src={photo1} alt={photo1} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
