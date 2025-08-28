import { ArrowRight, Github, Globe } from "lucide-react";
import { projects } from "../lib/constants";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { motion } from "motion/react";
import { fadeInScroll } from "../lib/variants";

const ProjectsSection = () => {
  return (
    <motion.section
      variants={fadeInScroll}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5  }}
      viewport={{ once: false, amount: 0.3 }}
      id="projects"
      className="py-24 px-4"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card cursor-pointer bg-card p-2.5 pb-8 max-w-sm mx-auto"
              spotlightColor="rgba(127, 108, 224, 0.1)"
            >
              <div className="h-48 overflow-hidden group rounded-md border">
                <img
                  src={project.image}
                  alt="Project Screenshot"
                  className="group-hover:scale-110 transition-all duration-500 object-cover h-full w-full"
                />
              </div>

              <div className="p-2 flex flex-col items-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-semibold mb-2">{project.title}</p>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex space-x-4 absolute bottom-4">
                  <a href={project.demoUrl} target="_blank">
                    <Globe
                      size={24}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/makwanachirag427"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
export default ProjectsSection;
