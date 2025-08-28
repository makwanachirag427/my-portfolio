import { Code, Layers, Rocket } from "lucide-react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { motion } from "motion/react";
import { fadeInScroll } from "../lib/variants";

const AboutSection = () => {
  return (
    <motion.section
      variants={fadeInScroll}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      id="about"
      className="py-24 px-4"
    >
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl">
              Passionate Self-Taught Web Developer
            </h3>
            <p>
              A self-taught developer dedicated to creating responsive,
              accessible, and high-performance web applications using modern
              technologies.
            </p>

            <p>
              Driven by curiosity and problem-solving, I’ve built projects that
              strengthened my skills in JavaScript, TypeScript, REST APIs, and
              databases. I enjoy exploring new technologies and writing clean,
              maintainable code that delivers real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Chirag-Resume-2025.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* card 1 */}
            <SpotlightCard
              className="custom-spotlight-card cursor-pointer"
              spotlightColor="rgba(127, 108, 224, 0.2)"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </SpotlightCard>
            {/* card 2 */}
            <SpotlightCard
              className="custom-spotlight-card cursor-pointer"
              spotlightColor="rgba(127, 108, 224, 0.2)"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 border rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Deliver Complete Solutions
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting front-end, back-end, and APIs to create seamless,
                    high-performance web experiences.
                  </p>
                </div>
              </div>
            </SpotlightCard>
            {/* card 3 */}
            <SpotlightCard
              className="custom-spotlight-card cursor-pointer"
              spotlightColor="rgba(127, 108, 224, 0.2)"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Performance & Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Ensuring fast, efficient, and accessible web experiences
                    through clean code and best practices.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutSection;
