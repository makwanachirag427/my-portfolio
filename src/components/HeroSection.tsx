import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "../lib/variants";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center w-full"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I'm <span className="text-primary">Chirag</span> Makwana
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            A self-taught Web Developer passionate about building scalable,
            modern web applications. I love turning ideas into impactful digital
            solutions and I’m ready to contribute my skills to help
            organizations grow.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-0  left-1/2   transform -translate-1/2"
      >
        <ChevronDown className="size-8 text-primary" />
      </motion.div>
    </section>
  );
};
export default HeroSection;
