
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
import SocialMediaLinks from "@/components/SocialMediaLinks";

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  content: any;
}

const Header = ({ language, setLanguage, content }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-dark-navy font-inter">
                Novacasa
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-10">
                <a 
                  href="#home" 
                  className="text-sm font-medium text-medium-gray hover:text-dark-navy transition-colors duration-200"
                >
                  {content.nav.home}
                </a>
                <a 
                  href="#services" 
                  className="text-sm font-medium text-medium-gray hover:text-dark-navy transition-colors duration-200"
                >
                  {content.nav.services}
                </a>
                <a 
                  href="#about" 
                  className="text-sm font-medium text-medium-gray hover:text-dark-navy transition-colors duration-200"
                >
                  {content.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="text-sm font-medium text-medium-gray hover:text-dark-navy transition-colors duration-200"
                >
                  {content.nav.contact}
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              {/* Social Media Links - Desktop Only */}
              <div className="hidden lg:block">
                <SocialMediaLinks size="sm" className="space-x-3" />
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="es">ES</option>
                  <option value="ca">CA</option>
                  <option value="en">EN</option>
                </select>
                <Globe className="h-4 w-4 text-medium-gray" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-dark-navy hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
              <div className="space-y-4">
                <a 
                  href="#home" 
                  className="block text-base font-medium text-dark-navy hover:text-accent-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.home}
                </a>
                <a 
                  href="#services" 
                  className="block text-base font-medium text-dark-navy hover:text-accent-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.services}
                </a>
                <a 
                  href="#about" 
                  className="block text-base font-medium text-dark-navy hover:text-accent-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="block text-base font-medium text-dark-navy hover:text-accent-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.contact}
                </a>
              </div>
              
              {/* Mobile Social Media */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-medium-gray mb-3 uppercase tracking-wide">
                  Síguenos
                </p>
                <SocialMediaLinks size="md" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-36 pb-20 bg-gradient-to-br from-light-gray via-white to-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium">
                  ✨ Transformamos hogares en Cataluña
                </div>
                <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-dark-navy font-inter leading-tight">
                  {content.hero.title}
                  <span className="block bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent mt-7">
                    {content.hero.subtitle}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-medium-gray font-inter leading-relaxed max-w-3xl mx-auto">
                  {content.hero.description}
                </p>
              </div>
              
              <div className="pt-9">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-accent-blue/25 group"
                  >
                    {content.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
