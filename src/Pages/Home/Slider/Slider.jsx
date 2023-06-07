

import pic1 from "../../../assets/imges/slider/1.jpg";
import pic2 from "../../../assets/imges/slider/2.jpg";
import pic3 from "../../../assets/imges/slider/3.jpg";
import pic4 from "../../../assets/imges/slider/4.jpg";
import pic5 from "../../../assets/imges/slider/5.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full h-[700] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={pic1} className="w-full h-full object-cover rounded shadow-lg border opacity-75 transition duration-500 ease-in-out hover:opacity-100" />
        <div className="absolute  h-full flex items-center  left-0 top-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
            Express Yourself Through Movement
            </h2>
            <p>
            Dance is a captivating art form that transcends boundaries and speaks to the depths of our souls. It is a language that goes beyond words, allowing us to express our emotions, tell stories, and connect with others in a unique and powerful way. Through graceful movements, intricate footwork, and expressive gestures, dancers bring forth a world of emotions, ideas, and narratives that can touch the hearts of those who witness it.
            </p>
            <div>
              <button className="my-btn">Discover More </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={pic2} className="w-full h-full object-cover rounded shadow-lg border opacity-75 transition duration-500 ease-in-out hover:opacity-100" />
        <div className="absolute  h-full flex items-center  left-0 top-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
            Express Yourself Through Movement
            </h2>
            <p>
            Dance is a captivating art form that transcends boundaries and speaks to the depths of our souls. It is a language that goes beyond words, allowing us to express our emotions, tell stories, and connect with others in a unique and powerful way. Through graceful movements, intricate footwork, and expressive gestures, dancers bring forth a world of emotions, ideas, and narratives that can touch the hearts of those who witness it.
            </p>
            <div>
              <button className="my-btn">Discover More </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={pic3} className="w-full h-full object-cover rounded shadow-lg border opacity-75 transition duration-500 ease-in-out hover:opacity-100" />
        <div className="absolute  h-full flex items-center  left-0 top-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
            Express Yourself Through Movement
            </h2>
            <p>
            Dance is a captivating art form that transcends boundaries and speaks to the depths of our souls. It is a language that goes beyond words, allowing us to express our emotions, tell stories, and connect with others in a unique and powerful way. Through graceful movements, intricate footwork, and expressive gestures, dancers bring forth a world of emotions, ideas, and narratives that can touch the hearts of those who witness it.
            </p>
            <div>
              <button className="my-btn">Discover More </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={pic4} className="w-full h-full object-cover rounded shadow-lg border opacity-75 transition duration-500 ease-in-out hover:opacity-100" />
        <div className="absolute  h-full flex items-center  left-0 top-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
            Express Yourself Through Movement
            </h2>
            <p>
            Dance is a captivating art form that transcends boundaries and speaks to the depths of our souls. It is a language that goes beyond words, allowing us to express our emotions, tell stories, and connect with others in a unique and powerful way. Through graceful movements, intricate footwork, and expressive gestures, dancers bring forth a world of emotions, ideas, and narratives that can touch the hearts of those who witness it.
            </p>
            <div>
              <button className="my-btn">Discover More </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={pic5} className="w-full h-full object-cover rounded shadow-lg border opacity-75 transition duration-500 ease-in-out hover:opacity-100" />
        <div className="absolute  h-full flex items-center  left-0 top-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
            Express Yourself Through Movement
            </h2>
            <p>
            Dance is a captivating art form that transcends boundaries and speaks to the depths of our souls. It is a language that goes beyond words, allowing us to express our emotions, tell stories, and connect with others in a unique and powerful way. Through graceful movements, intricate footwork, and expressive gestures, dancers bring forth a world of emotions, ideas, and narratives that can touch the hearts of those who witness it.
            </p>
            <div>
              <button className="my-btn">Discover More </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
