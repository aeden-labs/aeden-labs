import logo_icon from "../../assets/images/logo-icon.png";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer className="border-t border-[#f9fbfc]/50 bg-[hsl(228_25%_6%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo_icon} width="50" alt="Aeden Labs" />
              <div>
                <div className="dm-sans-regular text-[#f7f9f9]">
                  &copy; {new Date().getFullYear()} Aeden Labs Pty Ltd ACN 695 171 405. All rights reserved.
                </div>
                <div className="dm-sans-regular text-[#f7f9f9]/80">
                  Headquartered in Australia. ABN 14 695 171 405.
                </div>
              </div>
            </div>

            <a href="mailto:info@aedenlabs.io">
              <button className="cursor-pointer px-4 py-4 rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/30 transition-all duration-300 shadow-md">
                <MdMail />
              </button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;