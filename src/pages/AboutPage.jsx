import React from "react";
import Navbar from "../components/Navbar";
import AboutGridHero from "../components/AboutGridHero";
import imgos from "../assets/organizationalstructure.png";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="section px-5 md:px-0 w-full py-12">
        <div className="flex flex-col justify-center items-start md:items-center gap-8">
          <h2 className="font-montserrat text-3xl md:text-5xl text-black-2 font-semibold md:text-center">
            About Company
          </h2>

          <p className="font-montserrat text-base font-normal text-black-3 md:text-right xl:text-center xl:w-1/2">
            Intech Computers, founded by Andi Irfan Fauzan, has built a
            reputation as a leading laptop service provider for local and
            international investors. By focusing on quality without compromising
            accessibility, we ensure that each of our projects delivers
            satisfactory results. We believe in providing the best laptop
            solutions, according to our customers' daily and business needs.
          </p>
        </div>
      </div>

      <AboutGridHero />

      <div className="section px-5 md:px-0 w-full pt-12 pb-16 ">
        <div className="flex flex-col justify-center items-start md:items-center gap-8">
          <h2 className="font-montserrat text-3xl md:text-5xl text-black-2 font-semibold text-left md:text-center">
            Vision
          </h2>

          <p className="font-montserrat text-base font-normal text-black-3 md:text-right xl:text-center xl:w-1/2">
            Provide customers with a pleasant and safe shopping experience.
            Offers a wide range of high-quality laptops of various makes and
            models. Prioritizing product quality by conducting thorough
            inspection and maintenance of every laptop we sell. Providing
            friendly, responsive and professional customer service, offering
            tailored advice tailored to customer needs. Providing competitive
            and fair pricing, adding value to customers with every laptop
            purchase. Maintaining integrity and transparency in every
            transaction, prioritizing customer satisfaction and building
            long-term relationships with them.
          </p>
        </div>
      </div>

      <div className="section px-5 md:px-0 w-full py-12">
        <div className="flex flex-col justify-center items-start md:items-center gap-8">
          <h2 className="font-montserrat text-3xl md:text-5xl text-black-2 font-semibold md:text-right xl:text-center">
            Mission
          </h2>

          <p className="font-montserrat text-base font-normal text-black-3 md:text-right xl:text-center xl:w-1/2">
            To be a leading store that is trusted and widely recognized in
            selling laptops, providing a variety of products to customers a
            selection of high-quality laptops at affordable prices”
          </p>
        </div>
      </div>

      <AboutGridHero isReverse />

      <div className="section px-5 md:px-0 w-full py-12">
        <div className="flex flex-col justify-center items-start md:items-center gap-8">
          <h2 className="font-montserrat text-3xl md:text-5xl text-black-2 font-semibold md:text-right xl:text-center">
            Organizational Structure
          </h2>
          <div className="flex justify-center">
            <img
              className="w-full md:h-[50.75rem] object-cover"
              src={imgos}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
