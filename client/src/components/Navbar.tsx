import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 backdrop-blur-md",
        "border-b border-slate-200 dark:border-slate-700",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80"
          : "bg-white dark:bg-slate-900"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Avantika<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-md bg-background hover:bg-muted"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 space-y-3">
            <NavItem href="#about" onClick={closeMobileMenu}>About</NavItem>
            <NavItem href="#skills" onClick={closeMobileMenu}>Skills</NavItem>
            <NavItem href="#projects" onClick={closeMobileMenu}>Projects</NavItem>
            <NavItem href="#experience" onClick={closeMobileMenu}>Experience</NavItem>
            <NavItem href="#contact" onClick={closeMobileMenu}>Contact</NavItem>
          </div>
        )}
      </nav>
    </header>
  );
}
