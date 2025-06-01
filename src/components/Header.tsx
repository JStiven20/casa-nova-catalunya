
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold text-steel-blue font-raleway tracking-tight">
                Novacasa
              </div>
              <div className="text-xs text-gray-500 font-raleway tracking-wide uppercase mt-1">
                Reformas • Solar • Cataluña
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-10">
                <a 
                  href="#home" 
                  className="text-sm font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors duration-200 tracking-wide"
                >
                  {content.nav.home}
                </a>
                <a 
                  href="#services" 
                  className="text-sm font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors duration-200 tracking-wide"
                >
                  {content.nav.services}
                </a>
                <a 
                  href="#about" 
                  className="text-sm font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors duration-200 tracking-wide"
                >
                  {content.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="text-sm font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors duration-200 tracking-wide"
                >
                  {content.nav.contact}
                </a>
              </div>
            </div>

            {/* Right Side - Social Media & Language */}
            <div className="flex items-center space-x-6">
              {/* Social Media Links - Desktop Only */}
              <div className="hidden lg:block">
                <SocialMediaLinks size="sm" className="space-x-2" />
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-gray-200 rounded-lg px-3 py-2 text-xs font-raleway font-semibold focus:outline-none focus:ring-2 focus:ring-steel-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="es">ES</option>
                  <option value="ca">CA</option>
                  <option value="en">EN</option>
                </select>
                <Globe className="h-4 w-4 text-steel-blue" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-dark-charcoal hover:bg-gray-100 transition-colors"
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
            <div className="container mx-auto px-6 py-6 space-y-6">
              <div className="space-y-4">
                <a 
                  href="#home" 
                  className="block text-base font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.home}
                </a>
                <a 
                  href="#services" 
                  className="block text-base font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.services}
                </a>
                <a 
                  href="#about" 
                  className="block text-base font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="block text-base font-raleway font-semibold text-dark-charcoal hover:text-steel-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {content.nav.contact}
                </a>
              </div>
              
              {/* Mobile Social Media */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-raleway font-semibold text-gray-600 mb-3 tracking-wide uppercase">
                  Síguenos
                </p>
                <SocialMediaLinks size="md" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-charcoal font-raleway leading-tight tracking-tight">
                  {content.hero.title}
                  <span className="block text-steel-blue mt-2">{content.hero.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto">
                  {content.hero.description}
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-vibrant-orange hover:bg-orange-600 text-white px-10 py-4 text-lg font-raleway font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {content.hero.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
