import { BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import logo from "./images/logo2.png";
import logof from "./images/logof.png";
import inside from "./images/inside.jpg"
import outside from "./images/outside.jpg"
import rasm1 from "./images/1.jpg"
import rasm2 from "./images/2.jpg"
import rasm3 from "./images/3.jpg"
import d1 from "./images/d1.jpg"
import d2 from "./images/d2.jpg"
import d3 from "./images/d3.jpg"
import d4 from "./images/d4.jpg"
import d5 from "./images/d5.jpg"
import d6 from "./images/d6.jpg"
import d7 from "./images/d7.jpg"
import m1 from "./images/m1.jpg"
import m2 from "./images/m2.jpg"
import m3 from "./images/m3.jpg"
import m4 from "./images/m4.jpg"
import m5 from "./images/m5.jpg"
import m6 from "./images/m6.jpg"
import m7 from "./images/m7.jpg"
import himg from "./images/himg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



function App() {
  const data = [
    { img: d1, name: "Lua Cheia Wine", price: "30$" },
    { img: d2, name: "Rosemarine Cocktail", price: "11$" },
    { img: d3, name: "Mojito Lime", price: "9$" },
    { img: d4, name: "Leffe Brune", price: "22$" },
    { img: d5, name: "Matcha Cocktail", price: "13$" },
    { img: d6, name: "Cappuccino", price: "8$" },
    { img: d7, name: "Strawberry Juice", price: "10$" },
  ];
  const dishes = [
    { img: m1, name: "Fried potata and soup", description: "Fried potatoes and beet soup", price: "21$" },
    { img: m2, name: "Vegetarian Salad", description: "Avacado, cabbage, beet, greens", price: "18$" },
    { img: m3, name: "Cheese Pasta", description: "Italian pasta, cheese, egg, spices", price: "25$" },
    { img: m4, name: "Beef Lagman", description: "Beef, Uyghur lagman, tomato souce", price: "28$" },
    { img: m5, name: "Steaks and free", description: "Beef, potato free, pepper,", price: "18$" },
    { img: m6, name: "Mutton and mushroom", description: "Mutton, cheese, brown mushroom", price: "14$" },
    { img: m7, name: "Vegetarian meal", description: "Salmon, greens, avacado", price: "42$" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToReservation = () => {
    document.getElementById("reservation")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.pexels.com/download/video/31631562/"
          autoPlay
          loop
          muted
          playsInline />
        <div className="absolute inset-0 bg-black/50"></div>


        <div
          className={`fixed top-0 left-0 w-full flex items-center justify-center py-3 gap-30 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-black/10 shadow-md" : "bg-transparent backdrop-blur-0"}`}
        >
          <div>
            <img className="w-30 cursor-pointer" src={logo} alt="" />
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className={`transition-all duration-300 hover:text-[#886e42] ${darkMode
                  ? "text-white"
                  : scrolled
                    ? "text-black"
                    : "text-gray-300"
                }`}>Home</a>

            <a
              href="#about"
              className={`transition-all duration-300 hover:text-[#886e42] ${darkMode
                  ? "text-white"
                  : scrolled
                    ? "text-black"
                    : "text-gray-300"
                }`}>About</a>

            <a
              href="#menu"
              className={`transition-all duration-300 ${scrolled ? "text-black" : "text-gray-300"
                } hover:text-[#886e42] ${darkMode
                  ? "text-white"
                  : scrolled
                    ? "text-black"
                    : "text-gray-300"
                }`}>Menu</a>

            <a
              href="#hours"
              className={`transition-all duration-300 ${scrolled ? "text-black" : "text-gray-300"
                } hover:text-[#886e42] ${darkMode
                  ? "text-white"
                  : scrolled
                    ? "text-black"
                    : "text-gray-300"
                }`}>Hours</a>
            <a
              href="#reservation"
              className={`transition-all duration-300 ${scrolled ? "text-black" : "text-gray-300"
                } hover:text-[#886e42] ${darkMode
                  ? "text-white"
                  : scrolled
                    ? "text-black"
                    : "text-gray-300"
                }`}>Reservation</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToReservation}
              className="border-2 border-[#886e42] py-2 px-6 rounded-lg text-[#886e42] font-medium hover:bg-white/20 duration-300 cursor-pointer"
            >
              Book a Table
            </button>
            <BsSun
              onClick={toggleDarkMode}
              className={`size-10 border-2 border-[#886e42] p-2 rounded-lg cursor-pointer transition-all duration-300
              ${darkMode ? "text-yellow-300" : "text-[#886e42]"}`}
            />
          </div>
        </div>


        <div className="relative z-10 justify-center text-center text-white pt-30">
          <h1 className="text-5xl text-gray-200 font-medium">
            Welcome to our <br />
            <span className="text-[#886e42]">Restaurant</span> Experience
          </h1>
          <p className="mt-6 text-gray-300">
            Where taste meets elegance. We combine exquisite flavors with a
            luxurious dining experience. <br /> Every dish is crafted with passion
            and the finest ingredients.
          </p>
        </div>

      </div>

      <div id="about" className="about scroll-mt-24">
        <h1 className="text-center text-4xl font-medium pt-20 pb-10">About Our Restaurant</h1>
        <h1 className="text-3xl font-medium pb-7 text-center text-[#886e42]">Atmosphera</h1>
        <div className="flex justify-center items-center gap-20">
          <div>
            <img className="w-120 rounded-xl" src={inside} alt="" />
            <h1 className="text-3xl font-medium text-[#886e42]">Interior</h1>
            <p>An exquisite interior designed to deliver comfort, style, and a truly <br /> elevated dining experience.</p>
          </div>
          <div>
            <img className="w-120 rounded-xl" src={outside} alt="" />
            <h1 className="text-3xl font-medium text-[#886e42]">Exterior</h1>
            <p>A sophisticated exterior that sets the stage for an extraordinary <br /> culinary journey, where elegance and excellence come together.</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-medium pb-7 text-center text-[#886e42] pt-15 pb-7">Inside Our Kitchen Philosophy</h1>
          <div className="flex justify-center items-center gap-12">
            <div>
              <img className="w-75 rounded-lg pb-3" src={rasm2} alt="" />
              <p>Carefully selected fresh ingredients form <br /> the foundation of every exceptional dish.</p>
            </div>
            <div>
              <img className="w-75 rounded-lg pb-3" src={rasm1} alt="" />
              <p>Expert techniques and passion-driven cooking <br /> bring out the true character of each ingredient.</p>
            </div>
            <div>
              <img className="w-75 rounded-lg pb-3" src={rasm3} alt="" />
              <p>Thoughtful presentation transforms every <br /> dish into a refined culinary experience.</p>
            </div>
          </div>
        </div>

      </div>



      <div id="menu" className="menu scroll-mt-24">
        <h1 className="text-center text-4xl font-medium pt-20 pb-10">Menu</h1>
        <h1 className="text-3xl font-medium pb-7 text-center text-[#886e42]">Drinks</h1>
        <div>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-3">
                  <div>
                    <img
                      className="w-55 rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <h1 className="text-xl font-medium text-[#886e42] mt-2">
                      {item.name}
                    </h1>
                    <p>Price: <span className="pl-37">{item.price}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pt-20">
          <h1 className="text-3xl font-medium pb-7 text-center text-[#886e42]">
            Dishes
          </h1>

          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {dishes.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-3">
                  <div>
                    <img
                      className="w-55 rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <h1 className="text-xl font-medium text-[#886e42] mt-2">
                      {item.name}
                    </h1>
                    <h1 className="text-sm text-black">{item.description}</h1>
                    <p>
                      Price: <span className="pl-37">{item.price}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>



      <div id="hours" className="hours scroll-mt-24">
        <h1 className="text-center text-4xl font-medium pt-20">Hours</h1>
        <div>
          <img className="w-full h-80 object-cover mt-5" src={himg} alt="" />
        </div>
        <div className="flex justify-center gap-80 pt-10">
          <div>
            <h1 className="text-2xl font-medium text-[#886e42]">DINING ROOM</h1>
            <p className="text-xl font-medium">Lunch</p>
            <p>Monday - Friday</p>
            <p>11:45am - 2:15pm</p>
            <h1 className="text-xl font-medium">Dinner</h1>
            <p>Monday - Saturday</p>
            <p>5:30pm - 10:45pm</p>
          </div>
          <div>
            <h1 className="text-2xl font-medium text-[#886e42]">BAR LOUNGE</h1>
            <p className="text-xl font-medium">Dinner</p>
            <p>Monday - Thursday</p>
            <p>4:00pm - 10:30pm</p>
            <p>Friday - Saturday</p>
            <p>5:30pm - 11:30pm</p>
          </div>
        </div>
      </div>



      <div id="reservation" className="reservation  scroll-mt-24">
        <h1 className="text-center text-4xl font-medium pt-20 pb-10">Make a Reservation</h1>

        <div className="grid justify-center">
          <div>
            <input className="border py-2 w-60 text-center outline-none" placeholder="Apr 20, 2026" type="text"></input>
          </div>
          <div>
            <select className="border py-2 w-60 text-center outline-none"><option value="2000-02-01T07:30:00">7 : 30 AM</option><option value="2000-02-01T08:00:00">8:00 AM</option><option value="2000-02-01T08:30:00">8:30 AM</option><option value="2000-02-01T09:00:00">9:00 AM</option><option value="2000-02-01T09:30:00">9:30 AM</option><option value="2000-02-01T10:00:00">10:00 AM</option><option value="2000-02-01T10:30:00">10:30 AM</option><option value="2000-02-01T11:00:00">11:00 AM</option><option value="2000-02-01T11:30:00">11:30 AM</option><option value="2000-02-01T12:00:00">12:00 PM</option><option value="2000-02-01T12:30:00">12:30 PM</option><option value="2000-02-01T13:00:00">1:00 PM</option><option value="2000-02-01T13:30:00">1:30 PM</option><option value="2000-02-01T14:00:00">2:00 PM</option><option value="2000-02-01T14:30:00">2:30 PM</option><option value="2000-02-01T15:00:00">3:00 PM</option><option value="2000-02-01T15:30:00">3:30 PM</option><option value="2000-02-01T16:00:00">4:00 PM</option><option value="2000-02-01T16:30:00">4:30 PM</option><option value="2000-02-01T17:00:00">5:00 PM</option><option value="2000-02-01T17:30:00">5:30 PM</option><option value="2000-02-01T18:00:00">6:00 PM</option><option value="2000-02-01T18:30:00">6:30 PM</option><option value="2000-02-01T19:00:00">7:00 PM</option><option value="2000-02-01T19:30:00">7:30 PM</option><option value="2000-02-01T20:00:00">8:00 PM</option><option value="2000-02-01T20:30:00">8:30 PM</option><option value="2000-02-01T21:00:00">9:00 PM</option><option value="2000-02-01T21:30:00">9:30 PM</option><option value="2000-02-01T22:00:00">10:00 PM</option><option value="2000-02-01T22:30:00">10:30 PM</option><option value="2000-02-01T23:00:00">11:00 PM</option><option value="2000-02-01T23:30:00">11:30 PM</option></select>
          </div>
          <div>
            <select className="border py-2 w-60 text-center outline-none"><option value="1">1 person</option><option value="2">2 people</option><option value="3">3 people</option><option value="4">4 people</option><option value="5">5 people</option><option value="6">6 people</option><option value="7">7 people</option><option value="8">8 people</option><option value="9">9 people</option><option value="10">10 people</option><option value="11">11 people</option><option value="12">12 people</option><option value="13">13 people</option><option value="14">14 people</option><option value="15">15 people</option><option value="16">16 people</option><option value="17">17 people</option><option value="18">18 people</option><option value="19">19 people</option><option value="20">20 people</option></select>
          </div>
          <div>
            <button className="py-2 w-60 bg-[#886e42] text-white border border-black cursor-pointer">Book a Table</button>
          </div>
        </div>
      </div>




      <div className="flex gap-100 justify-center bg-[#886e42] w-full h-40 mt-20">
        <div>
          <img className="w-30 cursor-pointer mt-15" src={logof} alt="" />
        </div>

        <div>
          <p className="text-white pt-12">Location: <span className="pl-5 text-sm">Paris, Green Street 123</span></p>
          <p className="text-white">Phone: <span className="pl-9 text-sm">+123 456 789</span></p>
          <p className="text-white">Email: <span className="pl-11 text-sm">verdessa@gmail.com</span></p>
        </div>

      </div>








    </div>
  );
}

export default App;