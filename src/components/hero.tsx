import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import NextImage from "/public/next.png";
import PrimsaImage from "/public/prisma.png";
import TailwindImage from "/public/tailwind.png";
import NestImage from "/public/nest.png";
import MongoImage from "/public/mongo.png";

export function Hero() {
  return (
    <section
      id="about"
      className="bg-primary text-secondary lg:h-dvh container grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-32 pt-[var(--header-height)] lg:mt-0 space-y-12 pb-12"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Ricardo Zerpa</h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-400">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-justify">
          Highly motivated and adaptable Full Stack Developer with over 5 years
          of experience. Passionate about staying ahead of the curve in emerging
          technologies and best practices to deliver innovative and impactful
          solutions. Adept learner with a strong foundation in software
          development principles, eager to tackle challenges.
        </p>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/riczerq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin width={32} height={32} />
          </a>
          <a
            href="https://github.com/Riczer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub width={30.15} height={32} />
          </a>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-4">
          <div className="flex gap-4">
            <h3 className="text-2xl shrink-0 lg:no-underline underline-offset-8 underline">
              Tech Stack
            </h3>
            <span className="text-2xl hidden lg:block">|</span>
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Image
              src={NextImage}
              alt="Next.js"
              className="brightness-0 invert h-[40px] w-auto"
            />
            <Image
              src={PrimsaImage}
              alt="Prisma ORM"
              className="brightness-0 invert h-[40px] w-auto"
            />
            <Image
              src={TailwindImage}
              alt="Tailwind CSS"
              className="brightness-0 invert h-[40px] w-auto"
            />
            <Image
              src={NestImage}
              alt="Nest.js"
              className="brightness-0 invert h-[40px] w-auto"
            />
            <Image
              src={MongoImage}
              alt="MongoDB"
              className="brightness-0 invert h-[40px] w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/programmer.svg"
          width={629.45596}
          height={457.806184}
          alt="Programmer"
        />
      </div>
    </section>
  );
}
