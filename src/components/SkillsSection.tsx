import { useState } from "react";
import { cn } from "../lib/utils";
import { categories, skills } from "../lib/constants";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { motion } from "motion/react";
import { fadeInScroll } from "../lib/variants";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || activeCategory === skill.category
  );

  return (
    <motion.section
      variants={fadeInScroll}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-24 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors border duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card cursor-pointer bg-card/50"
              spotlightColor="rgba(127, 108, 224, 0.2)"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default SkillsSection;
