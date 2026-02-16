import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./sub-components/Footer";
import HeroGradient from "./ui/HeroGradient";
import { Card } from "./ui/Card";
import { AiFillDashboard } from "react-icons/ai";
import { FaChartPie, FaDatabase, FaUserFriends } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import aws_logo from "../assets/images/home/aws-logo.png";
import gcp_logo from "../assets/images/home/gcp-logo.png";
import git_logo from "../assets/images/home/git-logo.png";
import power_bi_logo from "../assets/images/home/power-bi-logo.png";
import mysql_logo from "../assets/images/home/mysql-logo.png";
import c_logo from "../assets/images/home/c-logo.png";
import python_logo from "../assets/images/home/python-logo.png";
import java_logo from "../assets/images/home/java-logo.png";
import javascript_logo from "../assets/images/home/javascript-logo.png";
import nodejs_logo from "../assets/images/home/nodejs-logo.png";
import vuejs_logo from "../assets/images/home/vuejs-logo.png";
import reactjs_logo from "../assets/images/home/reactjs-logo.png";
import html5_logo from "../assets/images/home/html5-logo.png";
import css3_logo from "../assets/images/home/css3-logo.png";
import logo_white from "../assets/images/logo-white.png";
import logo_icon from "../assets/images/logo-icon.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const features = [
    {
      id: 1,
      icon: IoMdAnalytics,
      title: "1",
      desc: "Define clear metrics to measure from reliable data sources: e.g, sales, gross margin, costs, MRR, activation rate, retention, etc.",
    },
    {
      id: 2,
      icon: FaDatabase,
      title: "2",
      desc: "Create a centralised data warehouse from data scattered across your various tools and systems, to be a reliable source of truth.",
    },
    {
      id: 3,
      icon: FaChartPie,
      title: "3",
      desc: "Evolve your reporting to a centralised dashboard that tells your business story - what's happening and why on important KPIs like sales growth, customer lifetime value, improving retention, staff turnover, etc. This dashboard can display results at the executive level to operational level for sales, marketing, product, operations, finance and HR teams.",
    },
    {
      id: 4,
      icon: AiFillDashboard,
      title: "4",
      desc: "Make your dashboards actionable, scalable, flexible and quickly responsive to the changing environment.",
    },
    {
      id: 5,
      icon: FaUserFriends,
      title: "5",
      desc: "Advise on regular data reviews to keep from passively glossing over dashboards, to ensure that a deep, actionable understanding of data will influence sound business decisions.",
    },
    {
      id: 6,
      icon: HiComputerDesktop,
      title: "6",
      desc: "Develop software applications for any needs your business may have. Then integrate these with your existing systems and customised to internal and external stakeholder needs.",
    },
  ];

  const logos = [
    { id: 1, src: aws_logo },
    { id: 2, src: gcp_logo },
    { id: 3, src: git_logo },
    { id: 4, src: power_bi_logo },
    { id: 5, src: mysql_logo },
    { id: 6, src: c_logo },
    { id: 7, src: python_logo },
    { id: 8, src: java_logo },
    { id: 9, src: javascript_logo },
    { id: 10, src: nodejs_logo },
    { id: 11, src: vuejs_logo },
    { id: 12, src: reactjs_logo },
    { id: 13, src: html5_logo },
    { id: 14, src: css3_logo }
  ];

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, location]);

  return (
    <div>
      <div className="min-h-screen bg-background">
        <header className="relative isolate overflow-hidden bg-[hsl(228_25%_6%)] text-[hsl(210_40%_98%)]">
          {/* Background Gradient */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_82%_12%,rgba(51,214,255,0.08),transparent_55%)]" />
          </div>
          <HeroGradient />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Navbar */}
            <div className="flex items-center justify-between py-6 dm-sans-semi-bold">
              <Link to="/">
                <img src={logo_white} width="200" alt="Aeden Labs" />
              </Link>

              {/* Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="cursor-pointer relative group px-2 py-1 font-medium">
                    View Demo
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#366cc8] transition-all group-hover:w-full" />
                  </button>
                </a>

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
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer text-left w-full"
                    >
                      View Demo
                    </button>
                  </a>

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

            {/* Hero */}
            <div className="pt-20 sm:pt-24 md:pt-28 pb-64 sm:pb-72 md:pb-80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-7">
                  <h1 className="dm-sans-semi-bold mt-6 text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
                    Make Data-Driven Decisions Like
                    <span
                      className="block"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(51,214,255,0.95), rgba(108,123,255,0.95), rgba(255,77,216,0.95), rgba(255,180,58,0.95))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        filter: "drop-shadow(0 18px 60px rgba(0,0,0,0.5))",
                      }}
                    >
                      World-Class Companies
                    </span>
                  </h1>

                  <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                    Is your business overwhelmed with too many apps and systems not synchronising effectively?
                  </p>
                  <p className="mt-1 max-w-xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                    Is valuable time wasted in manual processing?
                  </p>
                  <p className="mt-1 max-w-xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                    Does it make you then question the reliability of the data and slow down your decision-making?
                  </p>
                  <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                    We solve these problems for you with bespoke data
                    integration and analytics into a centralised reporting
                    dashboard - "one app to rule them all", customised for your
                    business.
                  </p>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer mt-6 px-5 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white dm-sans-semi-bold hover:bg-white/30 transition-all duration-300 shadow-md flex items-center gap-2">
                      <span>View our demo</span>
                      <GoArrowUpRight className="inline-block" />
                    </button>
                  </a>
                </div>

                <div className="lg:col-span-5">
                  <Card
                    className="
                      relative overflow-hidden rounded-3xl border border-white/10
                      bg-white/[0.04] backdrop-blur-xl
                      shadow-[0_40px_140px_rgba(0,0,0,0.55)]
                      p-6 sm:p-7 grain-overlay
                    "
                  >
                    <div className="absolute inset-0 opacity-75">
                      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(108,123,255,0.35),transparent_60%)] blur-2xl" />
                      <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,216,0.24),transparent_62%)] blur-2xl" />
                    </div>

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs tracking-[0.22em] uppercase text-white/60 dm-sans-extra-light">
                            AEDEN LABS
                          </p>
                          <p className="mt-2 text-lg dm-sans-semi-bold leading-tight">
                            Make data your advantage.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/7 ring-1 ring-white/10 p-1">
                          <img src={logo_icon} width="40" />
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 dm-sans-regular">
                        Demo coming soon.
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="relative">
          {/* How We Help You */}
          <section className="bg-[#f9fafc]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
              <p className="max-w-8xl mx-auto text-center text-lg sm:text-base md:text-xl text-#0c0d12 dm-sans-regular leading-relaxed text-balance">
                We provide consulting, software architecture, and bespoke
                customer-facing and internal applications, to enhance reporting
                in real time for more impactful decision-making. We use stunning
                visual dashboards for data storytelling so you can make faster,
                smarter data-driven decisions.
              </p>

              <div className="mt-30 text-center">
                <h1 className="text-3xl sm:text-5xl md:text-5xl text-[#0c0d12] dm-sans-semi-bold">
                  How We Help You
                </h1>
              </div>

              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {features.map((f, index) => (
                  <Card
                    key={f.id || index}
                    className="
                      relative overflow-hidden rounded-3xl border border-[#0c0d12]/10
                      bg-white/[0.04] backdrop-blur-xl
                      shadow-[0_40px_140px_rgba(0,0,0,0.55)]
                      p-6 sm:p-7 grain-overlay
                    "
                  >
                    <div className="absolute inset-0 opacity-75">
                      <div className="absolute -bottom-90 -right-55 h-150 w-150 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(108,123,255,0.35),transparent_40%)] blur-3xl grain-overlay" />
                      {/* <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(108,123,255,0.35),transparent_62%)] blur-2xl" /> */}
                    </div>
                    <div
                      className="
                        h-11 w-11 rounded-2xl grid place-items-center
                        bg-[linear-gradient(135deg,#f9fafc,#f1f3f8)]
                        ring-1 ring-border
                        group-hover:ring-primary/25
                        transition-all duration-300
                      "
                    >
                      <f.icon className="h-5 w-5 text-foreground/80" />
                    </div>
                    <h3 className="mt-5 text-2xl dm-sans-semi-bold text-[#0c0d12]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-lg dm-sans-regular text-[#0c0d12]/70 leading-relaxed">
                      {f.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden bg-[hsl(228_25%_6%)] text-[hsl(210_40%_98%)]">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_18%_10%,rgba(51,214,255,0.08),transparent_60%)] blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_82%_12%,rgba(51,214,255,0.08),transparent_55%)] blur-2xl" />
            </div>

            <div id="about" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="pt-20 sm:pt-24 md:pt-18 pb-44 sm:pb-26 md:pb-34">
                {/* About Us */}
                <div className="justify-items-center">
                  <div className="text-center">
                    <h1 className="dm-sans-semi-bold mt-6 text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
                      About Us
                    </h1>

                    <p className="mt-6 max-w-5xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                      We are software engineers specialising in data analytics
                      and data integration. Our engineers have experience developing products and apps
                      for a range of industries from agriculture, transport, and
                      mining, and have consulted for mid-level to large
                      enterprises, including listed companies.
                    </p>

                    <p className="mt-6 max-w-5xl text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed text-balance">
                      Contact us at <a
                        href="mailto:info@aedenlabs.io"
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(90deg, rgba(51, 214, 255, 0.95), rgba(108, 123, 255, 0.95), rgba(255, 77, 216, 0.95)",
                        }}
                      >
                        info@aedenlabs.io
                      </a>
                    </p>
                  </div>
                </div>

                {/* Technologies We Use */}
                <div className="justify-items-center">
                  <div className="text-center">
                    <h1 className="dm-sans-semi-bold mt-30 mb-10 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                      Technologies We Use
                    </h1>
                  </div>

                  <article className="wrapper">
                    {[false, true].map((reverse, index) => (
                      <div
                        key={index}
                        className={`marquee ${reverse ? "marquee--reverse" : ""}`}
                      >
                        {[0, 1].map((dup) => (
                          <div key={dup} className="marquee__group">
                            {logos.map((logo) => (
                              <img
                                key={logo.id}
                                src={logo.src}
                                alt={`logo-${logo.id}`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </article>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;