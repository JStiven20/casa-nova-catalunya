
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, Home, Sun, Leaf, Settings } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    serviceRequested: '',
    message: ''
  });
  const [language, setLanguage] = useState('es');
  const { toast } = useToast();

  const content = {
    es: {
      nav: {
        services: "Servicios",
        about: "Nosotros", 
        gallery: "Proyectos",
        contact: "Contacto",
        blog: "Blog"
      },
      hero: {
        title: "¿Quieres renovar tu hogar?",
        subtitle: "Empieza hoy tu reforma con nosotros",
        description: "Nos encargamos de todo, desde el diseño hasta el último detalle. Con Novacasa, transformar tu casa es más fácil de lo que imaginas. Más de 10 años ayudando a familias en Barcelona, Girona, Tarragona y Lleida.",
        cta1: "Empieza hoy tu reforma",
        cta2: "Ver nuestros proyectos"
      },
      services: {
        title: "¿En qué te podemos ayudar?",
        subtitle: "Soluciones completas para tu hogar",
        renovation: {
          title: "Reformas Integrales",
          description: "Cocinas, baños, suelos... Dale nueva vida a tu hogar con los mejores materiales y acabados."
        },
        solar: {
          title: "Placas Solares",
          description: "Ahorra en tu factura de luz para siempre. Instalaciones solares que se pagan solas."
        },
        efficiency: {
          title: "Eficiencia Energética", 
          description: "Tu casa más cómoda y eficiente. Aislamiento y ventanas que realmente marcan la diferencia."
        },
        automation: {
          title: "Domótica",
          description: "Controla tu hogar desde el móvil. Iluminación y climatización inteligente."
        }
      },
      about: {
        title: "¿Por qué elegir Novacasa?",
        subtitle: "Porque tu hogar se lo merece",
        description: "Somos una empresa catalana que entiende las necesidades reales de las familias. Nos apasiona crear hogares más bonitos, cómodos y sostenibles. No somos solo una empresa de reformas, somos tus compañeros en el proceso de transformar tu casa.",
        values: ["Transparencia total", "Calidad garantizada", "Innovación sostenible", "Confianza familiar"]
      },
      testimonials: {
        title: "Nuestras familias hablan por nosotros",
        reviews: [
          {
            name: "María González",
            location: "Barcelona",
            text: "Increíbles profesionales. Nuestra cocina quedó exactamente como la habíamos soñado. Todo limpio y a tiempo.",
            rating: 5
          },
          {
            name: "Jordi Puig", 
            location: "Girona",
            text: "Las placas solares han sido la mejor inversión. Ya hemos recuperado casi la mitad del dinero en solo un año.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona", 
            text: "Reforma total de la casa. Cumplieron todo lo prometido y el resultado superó nuestras expectativas.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Hablemos de tu proyecto",
        subtitle: "Te ayudamos a hacer realidad la casa de tus sueños",
        form: {
          name: "Tu nombre",
          email: "Tu email", 
          phone: "Tu teléfono",
          city: "¿Dónde vives?",
          service: "¿Qué necesitas?",
          message: "Cuéntanos tu idea",
          submit: "Quiero mi presupuesto gratis"
        },
        services: ["Reforma integral", "Placas solares", "Eficiencia energética", "Domótica"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Otra ciudad"]
      }
    },
    ca: {
      nav: {
        services: "Serveis",
        about: "Nosaltres",
        gallery: "Projectes", 
        contact: "Contacte",
        blog: "Blog"
      },
      hero: {
        title: "Vols renovar la teva llar?",
        subtitle: "Comença avui la teva reforma amb nosaltres",
        description: "Ens fem càrrec de tot, des del disseny fins a l'últim detall. Amb Novacasa, transformar casa teva és més fàcil del que t'imagines. Més de 10 anys ajudant famílies a Barcelona, Girona, Tarragona i Lleida.",
        cta1: "Comença avui la teva reforma",
        cta2: "Veure els nostres projectes"
      },
      services: {
        title: "En què et podem ajudar?",
        subtitle: "Solucions completes per a la teva llar",
        renovation: {
          title: "Reformes Integrals",
          description: "Cuines, banys, terres... Dona nova vida a la teva llar amb els millors materials i acabats."
        },
        solar: {
          title: "Plaques Solars",
          description: "Estalvia a la factura de llum per sempre. Instal·lacions solars que es paguen soles."
        },
        efficiency: {
          title: "Eficiència Energètica",
          description: "Casa teva més còmoda i eficient. Aïllament i finestres que realment marquen la diferència."
        },
        automation: {
          title: "Domòtica",
          description: "Controla la teva llar des del mòbil. Il·luminació i climatització intel·ligent."
        }
      },
      about: {
        title: "Per què triar Novacasa?",
        subtitle: "Perquè la teva llar s'ho mereix",
        description: "Som una empresa catalana que entén les necessitats reals de les famílies. Ens apassiona crear llars més boniques, còmodes i sostenibles. No som només una empresa de reformes, som els teus companys en el procés de transformar casa teva.",
        values: ["Transparència total", "Qualitat garantida", "Innovació sostenible", "Confiança familiar"]
      },
      testimonials: {
        title: "Les nostres famílies parlen per nosaltres",
        reviews: [
          {
            name: "Maria González",
            location: "Barcelona",
            text: "Increïbles professionals. La nostra cuina va quedar exactament com l'havíem somiat. Tot net i a temps.",
            rating: 5
          },
          {
            name: "Jordi Puig",
            location: "Girona",
            text: "Les plaques solars han estat la millor inversió. Ja hem recuperat gairebé la meitat dels diners en només un any.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona",
            text: "Reforma total de casa. Van complir tot el promès i el resultat va superar les nostres expectatives.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Parlem del teu projecte",
        subtitle: "T'ajudem a fer realitat la casa dels teus somnis",
        form: {
          name: "El teu nom",
          email: "El teu email",
          phone: "El teu telèfon",
          city: "On vius?",
          service: "Què necessites?",
          message: "Explica'ns la teva idea",
          submit: "Vull el meu pressupost gratis"
        },
        services: ["Reforma integral", "Plaques solars", "Eficiència energètica", "Domòtica"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Altra ciutat"]
      }
    },
    en: {
      nav: {
        services: "Services",
        about: "About",
        gallery: "Projects",
        contact: "Contact", 
        blog: "Blog"
      },
      hero: {
        title: "Want to renovate your home?",
        subtitle: "Start your renovation with us today",
        description: "We take care of everything, from design to the last detail. With Novacasa, transforming your home is easier than you imagine. Over 10 years helping families in Barcelona, Girona, Tarragona and Lleida.",
        cta1: "Start your renovation today",
        cta2: "View our projects"
      },
      services: {
        title: "How can we help you?",
        subtitle: "Complete solutions for your home",
        renovation: {
          title: "Complete Renovations",
          description: "Kitchens, bathrooms, floors... Give new life to your home with the best materials and finishes."
        },
        solar: {
          title: "Solar Panels",
          description: "Save on your electricity bill forever. Solar installations that pay for themselves."
        },
        efficiency: {
          title: "Energy Efficiency",
          description: "Your home more comfortable and efficient. Insulation and windows that really make a difference."
        },
        automation: {
          title: "Home Automation",
          description: "Control your home from your phone. Smart lighting and climate control."
        }
      },
      about: {
        title: "Why choose Novacasa?",
        subtitle: "Because your home deserves it",
        description: "We are a Catalan company that understands the real needs of families. We are passionate about creating more beautiful, comfortable and sustainable homes. We're not just a renovation company, we're your partners in transforming your house.",
        values: ["Total transparency", "Guaranteed quality", "Sustainable innovation", "Family trust"]
      },
      testimonials: {
        title: "Our families speak for us",
        reviews: [
          {
            name: "María González",
            location: "Barcelona",
            text: "Incredible professionals. Our kitchen turned out exactly as we had dreamed. Everything clean and on time.",
            rating: 5
          },
          {
            name: "Jordi Puig",
            location: "Girona", 
            text: "Solar panels have been the best investment. We have already recovered almost half the money in just one year.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona",
            text: "Complete home renovation. They fulfilled everything promised and the result exceeded our expectations.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Let's talk about your project",
        subtitle: "We help you make your dream home a reality",
        form: {
          name: "Your name",
          email: "Your email",
          phone: "Your phone",
          city: "Where do you live?", 
          service: "What do you need?",
          message: "Tell us your idea",
          submit: "I want my free quote"
        },
        services: ["Complete renovation", "Solar panels", "Energy efficiency", "Home automation"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Other city"]
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    toast({
      title: "¡Formulario enviado!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      serviceRequested: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-off-white font-inter">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-steel-blue font-playfair">Novacasa</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-dark-charcoal hover:text-steel-blue transition-colors font-medium">
                  {currentContent.nav.services}
                </a>
                <a href="#about" className="text-dark-charcoal hover:text-steel-blue transition-colors font-medium">
                  {currentContent.nav.about}
                </a>
                <a href="#testimonials" className="text-dark-charcoal hover:text-steel-blue transition-colors font-medium">
                  {currentContent.nav.gallery}
                </a>
                <a href="#contact" className="text-dark-charcoal hover:text-steel-blue transition-colors font-medium">
                  {currentContent.nav.contact}
                </a>
              </div>
            </div>

            {/* Language Selector & Social Media */}
            <div className="flex items-center space-x-4">
              <SocialMediaLinks size="sm" className="hidden md:flex" />
              <div className="flex items-center space-x-1 border-l border-gray-200 pl-4">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-all ${language === 'es' ? 'bg-steel-blue text-white' : 'text-dark-charcoal hover:bg-gray-100'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('ca')}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-all ${language === 'ca' ? 'bg-steel-blue text-white' : 'text-dark-charcoal hover:bg-gray-100'}`}
                >
                  CA
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-all ${language === 'en' ? 'bg-steel-blue text-white' : 'text-dark-charcoal hover:bg-gray-100'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-steel-blue via-steel-blue to-steel-blue/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight">
              {currentContent.hero.title}
              <span className="block text-vibrant-orange mt-2">{currentContent.hero.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-vibrant-orange hover:bg-vibrant-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'InitiateCheckout');
                  }
                }}
              >
                {currentContent.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-steel-blue px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
              >
                {currentContent.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-charcoal font-playfair mb-4">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl border-0 shadow-lg group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.renovation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {currentContent.services.renovation.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl border-0 shadow-lg group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-vibrant-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.solar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {currentContent.services.solar.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl border-0 shadow-lg group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-olive-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.efficiency.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {currentContent.services.efficiency.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl border-0 shadow-lg group hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-warm-wood rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.automation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {currentContent.services.automation.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-charcoal font-playfair mb-6">
                {currentContent.about.title}
              </h2>
              <h3 className="text-2xl text-steel-blue mb-6 font-semibold">
                {currentContent.about.subtitle}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentContent.about.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentContent.about.values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-olive-green flex-shrink-0" />
                    <span className="text-dark-charcoal font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-steel-blue to-vibrant-orange rounded-3xl p-8 text-white shadow-2xl">
                <h4 className="text-3xl font-bold mb-4 font-playfair">+10 años</h4>
                <p className="text-lg mb-6 opacity-90">transformando hogares en Cataluña</p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-80">Proyectos</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-charcoal font-playfair mb-4">
              {currentContent.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.testimonials.reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-vibrant-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal">{review.name}</div>
                      <div className="text-sm text-steel-blue flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-charcoal font-playfair mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in rounded-2xl border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-steel-blue font-playfair">
                  {currentContent.contact.form.submit}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-dark-charcoal font-medium">
                        {currentContent.contact.form.name}
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                        className="mt-2 rounded-xl border-gray-200 focus:border-steel-blue focus:ring-steel-blue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-dark-charcoal font-medium">
                        {currentContent.contact.form.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-2 rounded-xl border-gray-200 focus:border-steel-blue focus:ring-steel-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-dark-charcoal font-medium">
                        {currentContent.contact.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="mt-2 rounded-xl border-gray-200 focus:border-steel-blue focus:ring-steel-blue"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-dark-charcoal font-medium">
                        {currentContent.contact.form.city}
                      </Label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                        className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-steel-blue focus:border-steel-blue"
                      >
                        <option value="">Selecciona ciudad</option>
                        {currentContent.contact.cities.map((city, index) => (
                          <option key={index} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-dark-charcoal font-medium">
                      {currentContent.contact.form.service}
                    </Label>
                    <select
                      id="service"
                      value={formData.serviceRequested}
                      onChange={(e) => setFormData({...formData, serviceRequested: e.target.value})}
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-steel-blue focus:border-steel-blue"
                    >
                      <option value="">Selecciona servicio</option>
                      {currentContent.contact.services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-dark-charcoal font-medium">
                      {currentContent.contact.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="mt-2 rounded-xl border-gray-200 focus:border-steel-blue focus:ring-steel-blue"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-vibrant-orange hover:bg-vibrant-orange/90 text-white py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105"
                  >
                    {currentContent.contact.form.submit}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="animate-scale-in">
              <Card className="rounded-2xl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-steel-blue font-playfair">Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-steel-blue rounded-2xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal text-lg">Teléfono</div>
                      <div className="text-gray-600">+34 XXX XXX XXX</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-vibrant-orange rounded-2xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal text-lg">Email</div>
                      <div className="text-gray-600">info@novacasa.cat</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-olive-green rounded-2xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal text-lg">Zona de servicio</div>
                      <div className="text-gray-600">Barcelona, Girona, Tarragona, Lleida</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-steel-blue to-vibrant-orange p-8 rounded-2xl text-white">
                    <h4 className="text-xl font-bold mb-3 font-playfair">¿Necesitas asesoramiento?</h4>
                    <p className="mb-4 opacity-90">Nuestros expertos te ayudan a elegir la mejor solución para tu hogar.</p>
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-steel-blue rounded-xl font-semibold">
                      Solicitar consulta gratuita
                    </Button>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold text-dark-charcoal mb-4">Síguenos en redes sociales</h4>
                    <SocialMediaLinks size="lg" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-playfair text-vibrant-orange mb-4">Novacasa</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformando hogares en Cataluña con soluciones sostenibles y diseño moderno.
              </p>
              <SocialMediaLinks />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Reformas integrales</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Placas solares</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Eficiencia energética</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Domótica</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Zonas de servicio</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Barcelona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Girona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Tarragona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Lleida</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-300">
                <div>+34 XXX XXX XXX</div>
                <div>info@novacasa.cat</div>
                <div>Cataluña, España</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Novacasa. Todos los derechos reservados. | <a href="/privacy" className="hover:text-vibrant-orange transition-colors">Política de Privacidad</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
