import styled from "styled-components";
import tw from "styled-components";

import HeroImg from "./assets/images/hero.png";

function App() {
  return (
    <div className="bg-hero">
      <div
        id="hero"
        className="flex container justify-around mx-auto md:flex-row items-center bg-black "
      >
        <div className="flex flex-col w-1/2 max-1/2">
          <div className="w-4/6 flex flex-col justify-start items-start">
            <p className="overline text-white">NEW PRODUCT</p>
            <h1 className="my-4 text-5xl text-white font-bold leading-tight">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className=" bg-white text-gray-800 font-bold  my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-1/2 max-1/2 overflow-y-hidden">
          <img className="mx-auto w-full" src={HeroImg} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default App;
