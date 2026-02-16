import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./sub-components/Footer";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo_white from "../assets/images/logo-white.png";

function Privacy() {
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
      <div className="min-h-screen bg-background">
        <main className="relative isolate overflow-hidden bg-[hsl(228_25%_6%)] text-[hsl(210_40%_98%)]">
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

            {/* Privacy Policy */}
            <div className="pt-10 sm:pt-15 md:pt-28 pb-20 sm:pb-20 md:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-full">
                  <h1 className="dm-sans-semi-bold mb-10 text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
                    Privacy Policy
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This is the privacy notice of Aeden Labs Pty Ltd ACN 695 171 405. In this document, “we”, “our”, or “us” refers to Aeden Labs Pty Ltd.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We are company number 695 171 405 registered in Australia. Our registered office is at C/- KL Accountants Pty Ltd, 470 St Kilda Road, Melbourne VIC 3004.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Introduction
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This privacy notice aims to inform you about how we collect and handle any information that we collect from you, or that you provide to us. It covers both information that could identify you (“personal information”) and information that could not.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We are extremely concerned to protect your privacy and confidentiality. We understand that all users of our web site are quite rightly concerned to know that their data will not be used for any purpose unintended by them, and will not accidentally fall into the hands of a third party. Our policy is both specific and strict. It complies with Australian law. If you think our policy falls short of your expectations or that we are failing to abide by our policy, <span className="font-bold">do please tell us.</span>
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We regret that if there are one or more points below with which you are not happy, your only recourse is to leave our web site immediately.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Except as set out below, we do not share, or sell, or disclose to a third party, any personally identifiable information collected at this site.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Here is a list of the information we collect from you, either through our web site or because you give it to us in some other way, and why it is necessary to collect it:
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Business and personal information
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This includes basic identification and contact information, such as your name and contact details and also includes all information given to us in the course of your business and ours, such as information you give us in your capacity as our client. We undertake to preserve the confidentiality of the information and of the terms of our relationship. It is not used for any other purpose. We expect you to reciprocate this policy.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This information is used:
                  </p>
                  <ul className="list-disc pl-10 mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    <li>to provide you with the services which you request;</li>
                    <li>for verifying your identity for security purposes;</li>
                    <li>for marketing our services and products;</li>
                    <li>information which does not identify any individual may be used in a general way by us or third parties, to provide class information, for example relating to demographics or usage of a particular page or service.</li>
                  </ul>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We keep information, which forms part of our business record for a minimum of seven years. That is because we may need it in some way to support a claim or defence in court. That is also the period within which our tax collecting authorities may demand to know it.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Your domain name and e-mail address
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This information is recognised by our servers and the pages that you visit are recorded. We shall not under any circumstances, divulge your e-mail address to any person who is not an employee or contractor of ours and who does not need to know, either generally or specifically. This information is used:
                  </p>
                  <ul className="list-disc pl-10 mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    <li>to correspond with you or deal with you as you expect;</li>
                    <li>in a collective way not referable to any particular individual, for the purpose of quality control and improvement of our website;</li>
                    <li>to send you news about the services to which you have signed up;</li>
                    <li>to tell you about other of our services or services of sister websites.</li>
                  </ul>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Information you post on our website
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Information you send to us by posting to a forum or blog or in your advertisement, is stored on our servers. We do not specifically use that information except to allow it to be read, but you will see in our terms and conditions that we reserve a right to use it in any way we decide.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Website usage information
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We may use software embedded in our website (such as JavaScript) to collect information about pages you view and how you have reached them, what you do when you visit a page, the length of time you remain on the page, and how we perform in providing content to you. We do not presently associate such information with an identifiable person.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Financial information relating to your credit cards
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This information is never taken by us either through our website or otherwise. At the point of payment, you are transferred to a secure page on the website of PayPal / Square / Stripe or some other reputable payment service provider. That page may be dressed in our “livery”, but it is not controlled by us. Our staff and contractors never have access to it.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Financial information about your direct debit
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    When you have agreed to set up a direct debit arrangement, the information you have given to us is passed to our bank, for processing according to our instructions. We may keep a copy.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Credit reference
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    To assist in combating fraud, we share information with credit reference agencies, so far as it relates to clients or customers who instruct their credit card issuer to cancel payment to us without having first provided an acceptable reason to us and given us the opportunity to refund their money.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Information we obtain from third parties
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Although we do not disclose your personal information to any third party (except as set out in this notice), we do receive data which is indirectly made up from your personal information, from software services such as Google Analytics and others. No such information is identifiable to you.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Content you provide to us with a view to be used by third party
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If you provide information to us with a view to it being read, copied, downloaded, or used by other people, we accept no responsibility for what that third party may do with it. It is up to you to satisfy yourself about the privacy level of every person who might see your information. If it is available to the World, neither we nor you have no control whatever as to how it is used.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Calling our help line
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    When you call our helpline, we collect Calling Line Identification (CLI) information. We use this information to help improve the efficiency and effectiveness of our helpline.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Sending a message to our support system
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    When you send a message, we collect the data you have given to us in that message in order to obtain confirmation that you are entitled to receive the information and to provide to you the information you need. We record your request and our reply in order to increase the efficiency of our business / organisation. We do not keep any personally identifiable information associated with your message, such as your name or email address.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Complaining
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    When we receive a complaint, we record all the information you have given to us. We use that information to resolve your complaint. If your complaint reasonably requires us to contact some other person, we may decide to give to that other person some of the information contained in your complaint. We do this as infrequently as possible, but it is a matter for our sole discretion as to whether we do give information, and if we do, what that information is.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We may also compile statistics showing information obtained from this source to assess the level of service we provide, but not in a way that could identify you or any other person.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Job application and employment
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If you send us information in connection with a job application, we may keep it for up to three years in case we decide to contact you at a later date.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If we employ you, we collect information about you and your work from time to time throughout the period of your employment. This information will be used only for purposes directly relevant to your employment. After your employment has ended, we will keep your file for six years before destroying or deleting it.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Use of site by children
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We do not market to children, nor do we sell products or services for purchase by children. If you are under 18, you may use our website only with consent from a parent or guardian.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Disclosure to Government and their agencies
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We are subject to the law like everyone else. We may be required to give information to legal authorities if they so request or if they have the proper authorisation such as a search warrant or court order.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Compliance with the law
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    This privacy policy has been compiled so as to comply with the law of every jurisdiction in which we aim to do business. If you think it fails to satisfy the law of your country, we would like to hear from you, but ultimately it is your choice as to whether you wish to use our website.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Review or update personally identifiable information
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    At any time you may review or update the personally identifiable information that we hold about you, by contacting us at the address below. To better safeguard your information, we will also take reasonable steps to verify your identity before granting access or making corrections to your information.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Data may be processed outside Australia
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Our website is hosted in Australia. We may also use outsourced services in countries outside Australia from time to time in other aspects of our business.  Accordingly data obtained within Australia may be processed outside Australia and data obtained in any other country may be processed within or outside that country.
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Complaints procedure
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If you have a complaint about how we have collected or handled your personal information, please contact us. We will endeavour in the first instance to deal with your complaint and take action to resolve the matter.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If your complaint cannot be resolved at the first instance, we will ask you to lodge a formal complaint in writing, explaining the circumstances of the matter that you are complaining about, how you believe your privacy has been interfered with and how you believe your complaint should be resolved.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    We will acknowledge receipt of your formal complaint and indicate the timeframe that you can expect a response. We will endeavour to resolve the complaint as quickly as possible, but if the matter is complex and our investigation may take longer, we will let you know when we expect to provide our response.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If you are unhappy with our response, you may refer your complaint to the Office of the Australian Information Commissioner.
                  </p>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-semi-bold leading-relaxed">
                    How You Can Contact Us
                  </p>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Emailing <a
                        href="mailto:info@aedenlabs.io"
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(90deg, rgba(51, 214, 255, 0.95), rgba(108, 123, 255, 0.95), rgba(255, 77, 216, 0.95)",
                        }}
                      >
                        info@aedenlabs.io
                      </a>
                  </p>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Sending a letter to us at:
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-semi-bold leading-relaxed">
                    Attn: Privacy Officer
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Aeden Labs Pty Ltd
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    C/- KL Accountants Pty Ltd
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    470 St Kilda Road
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Melbourne VIC 3004
                  </p>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-semi-bold leading-relaxed">
                    OAIC Contact Details:
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Officer of the Australian Information Commissioner (OAIC)
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    Email: <a
                        href="mailto:enquiries@oaic.gov.au"
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(90deg, rgba(51, 214, 255, 0.95), rgba(108, 123, 255, 0.95), rgba(255, 77, 216, 0.95)",
                        }}
                      >
                        enquiries@oaic.gov.au
                      </a>
                  </p>

                  <h1 className="dm-sans-semi-bold mt-10 mb-5 text-lg sm:text-xl md:text-2xl leading-[0.95] text-balance">
                    Change in Privacy Policy
                  </h1>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    As we plan to ensure our privacy policy remains current, this policy is subject to change. Please return periodically to review our privacy policy.
                  </p>

                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/72 dm-sans-regular leading-relaxed">
                    If you have any question regarding the privacy policy, please contact us through the contact page.
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

export default Privacy;