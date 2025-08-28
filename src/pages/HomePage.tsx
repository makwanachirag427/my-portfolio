import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background  text-foreground overflow-x-hidden">
      {/* Background Effect */}
      <StarBackground />
      {/* Navbar  */}
      <Navbar />
      {/* Main content footer  */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
};
export default HomePage;
