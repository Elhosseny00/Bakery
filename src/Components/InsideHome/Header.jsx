import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        headerRef.current.style.boxShadow =
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px";
      }else{
        headerRef.current.style.boxShadow = ""
      }
    });
  }, []);
  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full transition-all duration-200 z-[1000] bg-brownColor">
      <div className="container h-[80px] flex items-center justify-between gap-[50px]">
        <div className="logo">
          <p className="text-whiteColor font-semibold text-[22px] sm:text-[25px] md:text-[28px]  lg:text-[30px] ">
            مخبز و حلويات
          </p>
        </div>
        <div className="cart relative">
          <img
            className="w-[50px] h-[50px] object-contain"
            src={require("../../Images/cart-icon.png")}
            alt="cart-icon"
          />
          <span className="w-[30px] h-[30px] bg-whiteColor text-sm font-normal rounded-full element-center text-blackColor   absolute top-[6px] right-[-6px]">
            0
          </span>
        </div>
      </div>
    </header>
  );
}
