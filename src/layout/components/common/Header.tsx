import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import QuarterCircleMenu from "./QuarterCircleMenu";

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
const ScalableHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isXL, setIsXL] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const MIN_WIDTH = 1000;
  const MAX_WIDTH = 1200;
  const SCROLL_LIMIT = 400;

  useEffect(() => {
    // Initialize window width check safely
    const checkIsXL = () => window.innerWidth >= 1280;
    setIsXL(checkIsXL());

    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsXL(checkIsXL());
    const handleResize2 = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize2);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize2);
    };
  }, []);

  const clampedScroll = Math.min(Math.max(scrollY, 0), SCROLL_LIMIT);
  const opacity = clampedScroll / SCROLL_LIMIT;
  const blurAmount = 24 * opacity;
  const logoNameOpacity = Math.max(1 - clampedScroll / 200, 0);
  const menuOpacity =
    windowWidth > 1350
      ? 1
      : windowWidth < 1280
      ? 0
      : (windowWidth - 1280) / (1350 - 1280);

  const widthStyle = isXL
    ? `${
        MAX_WIDTH - ((MAX_WIDTH - MIN_WIDTH) * clampedScroll) / SCROLL_LIMIT
      }px`
    : "100%";

  // Clean up border logic - prevent white flash
  const getBorderStyle = () => {
    if (isXL && opacity > 0.1) {
      return `1px solid rgba(75, 85, 99, ${opacity})`;
    } else {
      return "1px solid transparent";
    }
  };
  //   const getBorderTopStyle = () => {};

  const getBorderBottomStyle = () => {
    if (!isXL && opacity > 0.1) {
      return `1px solid rgba(75, 85, 99, ${opacity})`;
    } else if (isXL && scrollY > 0) {
      return `1px solid rgba(75, 85, 99, ${opacity})`;
    } else {
      return "1px solid transparent";
    }
  };

  return (
    <header
      className={` fixed transition-all duration-300 ease-in-out text-white text-center z-[100] py-2 backdrop-filter ${
        isXL
          ? "left-1/2 transform -translate-x-1/2 rounded-full top-3"
          : "left-0 top-0 right-0"
      } ${opacity > 0 ? "shadow-lg" : ""}`}
      style={{
        width: widthStyle,
        backgroundColor: `rgba(0, 0, 0, ${opacity * 0.7})`,
        borderTop: getBorderStyle(),
        borderLeft: getBorderStyle(),
        borderRight: getBorderStyle(),
        borderBottom: getBorderBottomStyle(),
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
    >
      <div className="flex items-center justify-between h-full w-full px-4 xl:px-2 transition-all duration-400 ">
        <div className=" h-full flex items-center gap-2">
          <img
            className="h-[40px] w-[40px] object-contain cursor-pointer"
            src="/logo/GS3_logo.png"
            alt=""
          />
          <span
            className="font-bold text-2xl transition-opacity duration-300 ease-out font-orbitron text-gray-200 cursor-pointer"
            style={{ opacity: logoNameOpacity }}
          >
            GS3<sup>™</sup>
          </span>
        </div>
        <div className="h-full flex-1 flex justify-center">
          {isXL && (
            <nav
              style={{ opacity: menuOpacity }}
              className="flex space-x-6 bg-transparent text-gray-200 font-orbitron "
            >
              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative pb-1 transition-all duration-200  ${
                      isActive
                        ? "after:w-full drop-shadow-[0_0_8px_#e5e7eb]"
                        : "after:w-0"
                    } after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-white hover:after:w-full hover:drop-shadow-[0_0_8px_#e5e7eb]`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
        <div className="h-full ">
          <QuarterCircleMenu isXL={isXL} />
        </div>
      </div>
      {/* <div className="absolute top-full left-4 text-xs text-gray-300 mt-2">
        Screen: {isXL ? "XL" : "Mobile"} | Scroll: {Math.round(scrollY)} |
        Opacity: {opacity.toFixed(2)}
      </div> */}
    </header>
  );
};

export default ScalableHeader;
