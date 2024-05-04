import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full md:h-[600px]">
        <div id="slide1" className="carousel-item relative h-full w-full">
          <img src={img1} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute rounded-xl flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <div className="space-y-2 md:space-y-7 pl-12 md:w-1/2">
              <h2 className="text-white text-lg md:text-2xl lg:text-6xl font-bold w-full">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white text-sm md:text-base full">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-y-3 w-1/2 md:w-full">
                <button className="btn btn-sm md:btn-lg bg-[#FF3811] font-semibold text-white border-none mr-3">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-lg btn-outline outline-white text-white font-semibold">
                  Discover More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide6" className="btn  btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full h-full rounded-xl object-cover  object-left-top" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-6 bottom-4">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
