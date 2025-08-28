import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-5 w-full border-t  border-border bg-card">
      <div className="flex flex-wrap items-center justify-between">
        <p className="flex flex-col sm:flex-row items-center font-semibold gap-1 text-sm text-foreground">
          <span>
            &copy;{new Date().getFullYear()} Chirag Makwana. All rights reserved.
          </span>
          <span>Built with MERN + TypeScript</span>
        </p>
        <a
          href="#hero"
          className="p-1.5 sm:p-2 rounded-full border bg-primary/20 hover:bg-primary/30 transition-all duration-300"
        >
          <ArrowUp className="size-5 sm:size-6 text-primary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
