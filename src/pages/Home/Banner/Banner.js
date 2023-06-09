import glide from "@glidejs/glide";
import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const slider = new glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 4000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div>
      <div className="relative w-full glide-03">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap  [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex  w-full overflow-hidden p-0">
            <li>
              <div
                className="hero h-[70vh]"
                style={{
                  backgroundImage: `url("https://images.pexels.com/photos/196656/pexels-photo-196656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                }}
              >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div>
                    <h1 className="mb-5 text-5xl font-bold max-w-3xl">
                      Experience the Best Deals Used Mobile and Tablets
                    </h1>
                    <p className="mb-5 max-w-xl mx-auto">
                      We believe everyone should have access to the latest
                      technology to stay connected. That's why we strive to
                      provide the highest-quality used mobile phones and tablets
                      at the best prices.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="hero h-[70vh]"
                style={{
                  backgroundImage: `url("https://images.pexels.com/photos/1693628/pexels-photo-1693628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                }}
              >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div>
                    <h1 className="mb-5 text-5xl font-bold max-w-3xl">
                      Shop with Us and Get the Tech You Deserve
                    </h1>
                    <p className="mb-5 max-w-xl mx-auto">
                      Our friendly and knowledgeable customer service team is
                      always available to provide assistance and answer any
                      questions you may have at any time. So, let us be your
                      one-stop shop for all your mobile needs
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-white bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-white bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
