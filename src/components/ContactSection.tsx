import {
  Github,
  Linkedin,
  Mail,
  Phone,
  SendHorizonal,
  Twitter,
} from "lucide-react";
import { fadeInScroll } from "../lib/variants";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { cn } from "../lib/utils";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error("Your Name is required.");
    if (!formData.email.trim()) return toast.error("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return toast.error("Please enter valid email address");
    if (!formData.message.trim()) return toast.error("Message is required.");

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = validateForm();
    if (success !== true) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      variants={fadeInScroll}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      id="contact"
      className="py-24 px-4"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          {/* details  */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-12">
              Contact Information
            </h3>
            <div className="space-y-8">
              {/* contact info  */}
              <div className="flex flex-col  gap-5">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full border bg-primary/10">
                    <Mail className=" text-primary size-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-semibold">Email:</h4>
                    <a
                      href="mailto:makwanachirag427@gmail.com"
                      className="font-semibold text-primary"
                    >
                      makwanachirag427@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 rounded-full border bg-primary/10">
                    <Phone className=" text-primary size-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-semibold">Phone:</h4>
                    <a href="tel:+919726702724" className="text-foreground">
                      +919726702724
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 rounded-full border bg-primary/10">
                    <Phone className=" text-primary size-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-semibold">Location:</h4>
                    <p className="text-foreground">Anand, Gujarat, India</p>
                  </div>
                </div>
              </div>
              {/* socials  */}
              <div className="flex justify-center flex-col">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex justify-center gap-4 transition-all duration-300">
                  <a
                    href="https://www.linkedin.com/in/chirag-makwana832000/"
                    target="_blank"
                  >
                    <div className="p-3 rounded-full border border-border bg-primary-foreground/90 hover:bg-primary-foreground">
                      <Linkedin className=" fill-blue-700 text-blue-700  texsize-6" />
                    </div>
                  </a>
                  <a href="https://x.com/chirag832000" target="_blank">
                    <div className="p-3 rounded-full border bg-primary-foreground/90 hover:bg-primary-foreground">
                      <Twitter className=" text-blue-700 size-6" />
                    </div>
                  </a>
                  <a href="https://github.com/makwanachirag427" target="_blank">
                    <div className="p-3 rounded-full  border  border-border bg-primary-foreground/90 hover:bg-primary-foreground">
                      <Github className="text-black  size-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* form  */}
          <SpotlightCard
            className="custom-spotlight-card cursor-pointer rounded-lg bg-card/50 p-4 sm:p-8 w-full shadow-none "
            spotlightColor="rgba(127, 108, 224, 0.1)"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="name"
                  className="block text-md font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-border  focus:outline-hidden foucs:ring-2  focus:ring-primary placeholder:text-foreground/70"
                  placeholder="John Doe..."
                />
              </div>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="block text-md font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-border  focus:outline-hidden foucs:ring-2  focus:ring-primary  placeholder:text-foreground/70"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="message"
                  className="block text-md font-medium mb-1"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-border bg-transparent focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none placeholder:text-foreground/70"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(59,130,246,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className={cn(
                  "px-4 py-2 border border-border rounded-full w-full mx-auto flex items-center justify-center gap-2 text-primary font-medium",
                  "hover:bg-primary/20 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <motion.span
                  animate={isSubmitting ? { x: [0, 5, 0] } : { x: 0 }}
                  transition={{
                    repeat: isSubmitting ? Infinity : 0,
                    duration: 0.6,
                  }}
                >
                  <SendHorizonal size={16} />
                </motion.span>
              </motion.button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactSection;
