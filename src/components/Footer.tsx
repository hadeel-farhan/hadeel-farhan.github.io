import { Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg text-foreground">Hadeel Farhan</div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/hadeel-farhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hadeelf2001@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/Complete_HadeelF_Portfolio.pdf"
              download
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Download Portfolio"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Hadeel Farhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
