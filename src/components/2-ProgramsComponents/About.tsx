import React from 'react';
import { Image } from '@nextui-org/image';
import FadeIn from '../fadein-wrapper';
import { FaPlus } from 'react-icons/fa6';

const About = () => {
  return (
    <section className="lg:py-40 py-10 lg:px-20 px-3">
      <main className="flex flex-wrap-reverse items-center justify-between w-full">
        <div className="lg:w-1/2 w-full relative z-10 py-52 lg:pb-0 pb-52 h-full">
          <FadeIn duration={100}>
            <div className="absolute top-1/2 lg:left-1/2 left-[40%] lg:w-full w-[80%] -translate-x-1/2 -translate-y-1/2 border-white border-1">
              <Image
                src={`/The Philae Temple.jpeg`}
                alt="aboutimg"
                width={350}
                height={400}
                className="img"
              />
            </div>
          </FadeIn>
          <FadeIn duration={200}>
            <div className="absolute top-24 lg:left-[80%] left-[60%] lg:w-full w-[70%] -translate-x-1/2 -translate-y-1/2">
              <Image
                src={`/15.png`}
                alt="aboutimg"
                width={280}
                height={280}
                className="img border-white border-2"
              />
            </div>
          </FadeIn>
          <FadeIn duration={300}>
            <div className="absolute -top-16 lg:left-[100%] left-[75%] lg:w-full w-[50%] -translate-x-1/2 -translate-y-1/2 z-20 ">
              <Image
                src={`/14.png`}
                alt="aboutimg"
                width={200}
                height={200}
                className="img border-white border-2"
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:w-1/2 lg:pb-0 pb-10 w-full h-full">
          <FadeIn duration={100}>
            <div className="flex items-center gap-x-2">
              <h3 className="text-primary font-bold flex text-xl items-center gap-x-1">
                About
              </h3>
              <div className="h-[2px] pl-10 w-3 bg-primary" />
            </div>
          </FadeIn>
          <FadeIn duration={100}>
            <div className="space-y-5">
              <h1 className="lg:text-5xl text-4xl capitalize lg:leading-[3.5rem] font-medium">
                {' '}
                <span className="font-bold">we recommend</span> <br />
                beautiful destinations <br /> evey month{' '}
              </h1>
              <p className="text-black/60 max-w-md pr-5">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                saepe exercitationem tempora distinctio.
              </p>
              <div className="flex lg:flex-nowrap flex-wrap items-center gap-x-3 gap-y-5">
                <div className="w-52 py-3 flex-grow text-center rounded-3xl bg-[#f6f9f8]">
                  <h2 className="lg:text-3xl text-4xl flex items-center font-semibold justify-center">
                    2000
                    <span className="text-base">
                      <FaPlus />
                    </span>
                  </h2>
                  <h3 className="lg:text-lg text-2xl text-black/70">
                    {' '}
                    Our Explorers
                  </h3>
                </div>
                <div className="w-52 py-3 flex-grow text-center rounded-3xl bg-[#f6f9f8]">
                  <h2 className="lg:text-3xl text-4xl flex items-center font-semibold justify-center">
                    100
                    <span className="text-base">
                      <FaPlus />
                    </span>
                  </h2>
                  <h3 className="lg:text-lg text-2xl text-black/70">
                    Destinations
                  </h3>
                </div>
                <div className="w-52 py-3 flex-grow text-center rounded-3xl bg-[#f6f9f8]">
                  <h2 className="lg:text-3xl text-4xl flex items-center font-semibold justify-center">
                    20
                    <span className="text-base">
                      <FaPlus />
                    </span>
                  </h2>
                  <h3 className="lg:text-lg text-2xl text-black/70">
                    Years Experience
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </section>
  );
};

export default About;
