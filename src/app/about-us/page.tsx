import React from "react";
import FAQSection from "@/components/AboutUs/FAQSection";
import Map from "@/components/AboutUs/Map";
import StoryPhotoGrid from "@/components/AboutUs/StoryPhotoGrid";

import abtCover from "/public/images/about/AboutCover.png";
import abtUsBG from "/public/images/about/AboutUs_BG.png";

const AboutUs = () => {
  return (
    <>
      <div
        className="min-h-[615px] bg-cover bg-center"
        style={{ backgroundImage: `url(${abtCover.src})` }}
      ></div>

      <section
        className="flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${abtUsBG.src})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="mx-auto max-w-screen-2xl text-center">
          <h1 className="font-ephesis text-[70px] text-[#7A4424]">About Us</h1>
          <p className="mb-4 px-60 py-6 text-[35px] text-[#77442B] dongle-h3-light">
            Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam
            sed internos soluta. Aut impedit ipsam qui voluptatem magni et sunt
            aperiam aut dicta distinctio ut iusto nemo sed aspernatur velit. Ab
            fugiat optio quos...
          </p>
        </div>
      </section>

      <section className="bg-cream flex items-center justify-center">
        <div className="mx-auto max-w-[1400px]">
          <div className="px-40 py-10">
            <h1 className="text-center font-ephesis text-[70px] text-[#77442B]">
              The Pamana Story
            </h1>
            <p className="p-6 text-center text-[35px] text-[#77442B] dongle-h3-light">
              Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam
              sed internos soluta. Aut impedit ipsam qui voluptatem magni et
              sunt aperiam aut dicta distinctio ut iusto nemo sed aspernatur
              velit. Ab fugiat optio quos...
            </p>
            <p className="p-6 text-center text-[35px] text-[#77442B] dongle-h3-light">
              Lorem ipsum dolor sit amet. Qui doloribus corrupti aut quia veniam
              sed internos soluta. Aut impedit ipsam qui voluptatem magni et
              sunt aperiam aut dicta distinctio ut iusto nemo sed aspernatur
              velit.
            </p>
          </div>
          <StoryPhotoGrid />
        </div>
      </section>

      <section className="bg-[#F8EFD0] p-6">
        <FAQSection />
      </section>

      <section className="bg-[#FEFFF3] p-6">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="m-5 text-center font-ephesis text-[70px] text-[#7A4424]">
            How to Get There?
          </h1>
          <Map />
          <div className="flex flex-col items-center justify-center">
            <button className="font-b rounded-xl bg-[#468EA0] px-10 py-2 text-[35px] text-white">
              TAKE ME THERE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
