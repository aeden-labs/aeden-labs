import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./sub-components/Footer";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo_white from "../assets/images/logo-white.png";

function NotFound() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-1 relative isolate overflow-hidden bg-[hsl(228_25%_6%)] text-[hsl(210_40%_98%)]">
          {/* Background Gradient */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_82%_12%,rgba(51,214,255,0.08),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Navbar */}
            <div className="flex items-center justify-between py-6 dm-sans-semi-bold">
              <Link to="/">
                <img src={logo_white} width="200" alt="Aeden Labs" />
              </Link>

              {/* Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/#about">
                  <button className="cursor-pointer relative group px-2 py-1 font-medium">
                    About Us
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#366cc8] transition-all group-hover:w-full" />
                  </button>
                </Link>

                <a href="mailto:info@aedenlabs.io">
                  <button className="cursor-pointer px-5 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/30 transition-all duration-300 shadow-md">
                    Contact Us
                  </button>
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50"
              >
                {isOpen ? (
                  <HiOutlineX className="w-7 h-7" />
                ) : (
                  <HiOutlineMenu className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* Mobile Navbar */}
            <div
              className={`md:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6 pointer-events-none"
              }`}
            >
              <div className="relative w-full h-full bg-[hsl(228_25%_6%)] backdrop-blur-xl flex flex-col">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white text-3xl"
                >
                  ✕
                </button>

                {/* Buttons */}
                <div className="flex flex-col justify-center h-full px-8 space-y-8 text-2xl dm-sans-thin text-white">
                  <Link to="/#about">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer text-left w-full"
                    >
                      About Us
                    </button>
                  </Link>

                  <a href="mailto:info@aedenlabs.io">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer text-left w-full"
                    >
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Not Found */}
            <div className="pt-10 sm:pt-15 md:pt-28 pb-20 sm:pb-20 md:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-full">
                  <h1 className="dm-sans-semi-bold mb-10 text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
                    404
                  </h1>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Page Not Found
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
