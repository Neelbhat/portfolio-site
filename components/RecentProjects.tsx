"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import type { IconType } from "react-icons";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const techIconMap: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  threejs: SiThreedotjs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  firebase: SiFirebase,
  supabase: SiSupabase,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
};

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link.replace("https://", "")}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((iconKey, index) => {
                    const TechIcon = techIconMap[iconKey];
                    return (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        {TechIcon && (
                          <TechIcon className="text-white/80 lg:w-4 lg:h-4 w-3 h-3" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <Link
                  className="flex justify-center items-center gap-4"
                  href={item.link}
                   target="_blank"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Project
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                  {"githubLink" in item && item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-2 text-white/70 hover:text-white transition"
                      aria-label="View source on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
