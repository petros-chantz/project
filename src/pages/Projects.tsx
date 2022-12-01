import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Copyright } from "../components/Copyright";
import { Exit } from "../components/Exit";
import { ProjectData } from "../data/ProjectData";

export const Projects = () => {
  return (
    <motion.section
      className="flex flex-col p-5 md:p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        duration: 1.5,
      }}
    >
      <Exit />
      <section className="flex flex-col pt-20 pb-20 md:pb-32">
        <div className="flex flex-col gap-5 md:pl-20">
          <h2 className="self-center md:self-start">Public Work</h2>
          <div className="flex flex-row justify-between gap-5">
            <p>
              A variety of multidisciplinary projects
              <span className="block">
                related to <span className="font-normal">user experience</span>,{" "}
                <span className="font-normal">data</span> &{" "}
                <span className="font-normal">technology</span>.
              </span>
            </p>
            <p>12 projects | +6 years</p>
          </div>
        </div>
        <div className="flex flex-col self-center gap-20 pt-24 lg:w-2/3">
          {ProjectData.sort((a, b) => b.year - a.year).map((project, index) => (
            <a
              href={`/${project.path}`}
              key={index}
              className="flex flex-col justify-center gap-5 lg:w-3/5 group even:self-start odd:self-end"
            >
              <div className="flex flex-row justify-start">
                <h3 className="text-2xl font-medium lg:text-3xl md:font-normal desktop:text-4xl">
                  {project.title}
                </h3>
              </div>
              <motion.div
                className="w-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "linear", stiffness: 250, damping: 2 }}
              >
                <img
                  src={project.thumbnail}
                  alt={`work-${project.company}`}
                  className="z-0 object-cover object-center w-full hover:opacity-100 opacity-60"
                />
              </motion.div>
              <div className="flex flex-col gap-2 md:justify-between md:flex-row">
                <p className="text-lg font-light text-slate-500">
                  {project.time}
                </p>
                <p className="text-lg font-light md:text-xl"></p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <div className="flex self-end justify-center pb-20">
        <Link
          to={"/restricted"}
          className="flex flex-row justify-center gap-2 group"
        >
          <h1 className="text-5xl font-medium md:text-7xl group-hover:underline group-hover:text-[#EE793B]">
            Restricted Work
          </h1>
          <ArrowRightIcon className="md:w-20 md:h-20 w-10 h-10 self-center group-hover:text-[#EE793B] transition group-hover:translate-x-3" />
        </Link>
      </div>
      <Copyright />
    </motion.section>
  );
};

export default Projects;
