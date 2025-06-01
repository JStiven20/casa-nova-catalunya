
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight, Home, Sun, Leaf, Settings } from "lucide-react";

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
        gallery: "Galería",
        contact: "Contacto",
        blog: "Blog"
      },
      hero: {
        title: "Transforma tu hogar con",
        subtitle: "Reformas y Energía Solar en Cataluña",
        description: "Especialistas en reformas integrales y soluciones de energía solar sostenible. Más de 10 años transformando hogares en Barcelona, Girona, Tarragona y Lleida.",
        cta1: "Solicita tu presupuesto gratis",
        cta2: "Ver nuestros proyectos"
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones integrales para tu hogar",
        renovation: {
          title: "Reformas Integrales",
          description: "Cocinas, baños, suelos, pintura y diseño interior con los mejores materiales."
        },
        solar: {
          title: "Instalación Solar",
          description: "Paneles solares residenciales y comerciales para autoconsumo energético."
        },
        efficiency: {
          title: "Eficiencia Energética", 
          description: "Aislamiento, ventanas eficientes y sistemas de climatización inteligente."
        },
        automation: {
          title: "Domótica",
          description: "Automatización del hogar y monitorización energética avanzada."
        }
      },
      about: {
        title: "Sobre Novacasa",
        subtitle: "Comprometidos con la sostenibilidad",
        description: "Somos una empresa catalana especializada en reformas integrales y energía solar. Nuestro compromiso es transformar tu hogar con soluciones sostenibles y diseño moderno.",
        values: ["Sostenibilidad", "Calidad", "Innovación", "Confianza"]
      },
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        reviews: [
          {
            name: "María González",
            location: "Barcelona",
            text: "Excelente trabajo en la reforma de nuestra cocina. Muy profesionales y puntuales.",
            rating: 5
          },
          {
            name: "Jordi Puig", 
            location: "Girona",
            text: "La instalación solar superó nuestras expectativas. Ya notamos el ahorro en la factura.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona", 
            text: "Reforma integral perfecta. Cumplieron todos los plazos y el presupuesto acordado.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Contacta con nosotros",
        subtitle: "Te ayudamos a hacer realidad tu proyecto",
        form: {
          name: "Nombre completo",
          email: "Correo electrónico", 
          phone: "Teléfono",
          city: "Ciudad",
          service: "Servicio solicitado",
          message: "Mensaje",
          submit: "Enviar consulta"
        },
        services: ["Reforma integral", "Instalación solar", "Eficiencia energética", "Domótica"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Otra"]
      }
    },
    ca: {
      nav: {
        services: "Serveis",
        about: "Nosaltres",
        gallery: "Galeria", 
        contact: "Contacte",
        blog: "Blog"
      },
      hero: {
        title: "Transforma la teva llar amb",
        subtitle: "Reformes i Energia Solar a Catalunya",
        description: "Especialistes en reformes integrals i solucions d'energia solar sostenible. Més de 10 anys transformant llars a Barcelona, Girona, Tarragona i Lleida.",
        cta1: "Sol·licita el teu pressupost gratis",
        cta2: "Veure els nostres projectes"
      },
      services: {
        title: "Els nostres Serveis",
        subtitle: "Solucions integrals per a la teva llar",
        renovation: {
          title: "Reformes Integrals",
          description: "Cuines, banys, terres, pintura i disseny interior amb els millors materials."
        },
        solar: {
          title: "Instal·lació Solar",
          description: "Panells solars residencials i comercials per a autoconsum energètic."
        },
        efficiency: {
          title: "Eficiència Energètica",
          description: "Aïllament, finestres eficients i sistemes de climatització intel·ligent."
        },
        automation: {
          title: "Domòtica",
          description: "Automatització de la llar i monitoratge energètic avançat."
        }
      },
      about: {
        title: "Sobre Novacasa",
        subtitle: "Compromesos amb la sostenibilitat",
        description: "Som una empresa catalana especialitzada en reformes integrals i energia solar. El nostre compromís és transformar la teva llar amb solucions sostenibles i disseny modern.",
        values: ["Sostenibilitat", "Qualitat", "Innovació", "Confiança"]
      },
      testimonials: {
        title: "El que diuen els nostres clients",
        reviews: [
          {
            name: "Maria González",
            location: "Barcelona", 
            text: "Excel·lent treball en la reforma de la nostra cuina. Molt professionals i puntuals.",
            rating: 5
          },
          {
            name: "Jordi Puig",
            location: "Girona",
            text: "La instal·lació solar va superar les nostres expectatives. Ja notem l'estalvi a la factura.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona",
            text: "Reforma integral perfecta. Van complir tots els terminis i el pressupost acordat.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Contacta amb nosaltres",
        subtitle: "T'ajudem a fer realitat el teu projecte",
        form: {
          name: "Nom complet",
          email: "Correu electrònic",
          phone: "Telèfon", 
          city: "Ciutat",
          service: "Servei sol·licitat",
          message: "Missatge",
          submit: "Enviar consulta"
        },
        services: ["Reforma integral", "Instal·lació solar", "Eficiència energètica", "Domòtica"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Altra"]
      }
    },
    en: {
      nav: {
        services: "Services",
        about: "About",
        gallery: "Gallery",
        contact: "Contact", 
        blog: "Blog"
      },
      hero: {
        title: "Transform your home with",
        subtitle: "Renovations and Solar Energy in Catalonia",
        description: "Specialists in comprehensive renovations and sustainable solar energy solutions. Over 10 years transforming homes in Barcelona, Girona, Tarragona and Lleida.",
        cta1: "Request your free quote",
        cta2: "View our projects"
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for your home",
        renovation: {
          title: "Complete Renovations",
          description: "Kitchens, bathrooms, flooring, painting and interior design with the best materials."
        },
        solar: {
          title: "Solar Installation",
          description: "Residential and commercial solar panels for energy self-consumption."
        },
        efficiency: {
          title: "Energy Efficiency",
          description: "Insulation, efficient windows and smart climate control systems."
        },
        automation: {
          title: "Home Automation",
          description: "Home automation and advanced energy monitoring."
        }
      },
      about: {
        title: "About Novacasa",
        subtitle: "Committed to sustainability",
        description: "We are a Catalan company specialized in comprehensive renovations and solar energy. Our commitment is to transform your home with sustainable solutions and modern design.",
        values: ["Sustainability", "Quality", "Innovation", "Trust"]
      },
      testimonials: {
        title: "What our clients say",
        reviews: [
          {
            name: "María González",
            location: "Barcelona",
            text: "Excellent work on our kitchen renovation. Very professional and punctual.",
            rating: 5
          },
          {
            name: "Jordi Puig",
            location: "Girona", 
            text: "The solar installation exceeded our expectations. We already notice the savings on our bill.",
            rating: 5
          },
          {
            name: "Anna Martí",
            location: "Tarragona",
            text: "Perfect comprehensive renovation. They met all deadlines and the agreed budget.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Contact us",
        subtitle: "We help you make your project a reality",
        form: {
          name: "Full name",
          email: "Email",
          phone: "Phone",
          city: "City", 
          service: "Requested service",
          message: "Message",
          submit: "Send inquiry"
        },
        services: ["Complete renovation", "Solar installation", "Energy efficiency", "Home automation"],
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Other"]
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would integrate with Supabase when connected
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto.",
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
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-steel-blue font-playfair">Novacasa</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-dark-charcoal hover:text-steel-blue transition-colors">
                  {currentContent.nav.services}
                </a>
                <a href="#about" className="text-dark-charcoal hover:text-steel-blue transition-colors">
                  {currentContent.nav.about}
                </a>
                <a href="#testimonials" className="text-dark-charcoal hover:text-steel-blue transition-colors">
                  {currentContent.nav.gallery}
                </a>
                <a href="#contact" className="text-dark-charcoal hover:text-steel-blue transition-colors">
                  {currentContent.nav.contact}
                </a>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 text-sm rounded ${language === 'es' ? 'bg-steel-blue text-white' : 'text-dark-charcoal'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('ca')}
                className={`px-2 py-1 text-sm rounded ${language === 'ca' ? 'bg-steel-blue text-white' : 'text-dark-charcoal'}`}
              >
                CA
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-steel-blue text-white' : 'text-dark-charcoal'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-steel-blue to-steel-blue/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
              {currentContent.hero.title}
              <span className="block text-vibrant-orange">{currentContent.hero.subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-vibrant-orange hover:bg-vibrant-orange/90 text-white px-8 py-4 text-lg font-semibold"
              >
                {currentContent.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-steel-blue px-8 py-4 text-lg"
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
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-steel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.renovation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {currentContent.services.renovation.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.solar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {currentContent.services.solar.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.efficiency.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {currentContent.services.efficiency.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-warm-wood rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-steel-blue text-xl font-semibold">
                  {currentContent.services.automation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
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
              <div className="grid grid-cols-2 gap-4">
                {currentContent.about.values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-olive-green" />
                    <span className="text-dark-charcoal font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-steel-blue to-vibrant-orange rounded-lg p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">+10 años</h4>
                <p className="text-lg mb-4">de experiencia en Cataluña</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Proyectos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm">Satisfacción</div>
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
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-vibrant-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
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
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-steel-blue">
                  {currentContent.contact.form.submit}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">{currentContent.contact.form.name}</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{currentContent.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{currentContent.contact.form.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">{currentContent.contact.form.city}</Label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steel-blue"
                      >
                        <option value="">Selecciona ciudad</option>
                        {currentContent.contact.cities.map((city, index) => (
                          <option key={index} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">{currentContent.contact.form.service}</Label>
                    <select
                      id="service"
                      value={formData.serviceRequested}
                      onChange={(e) => setFormData({...formData, serviceRequested: e.target.value})}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steel-blue"
                    >
                      <option value="">Selecciona servicio</option>
                      {currentContent.contact.services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">{currentContent.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-vibrant-orange hover:bg-vibrant-orange/90 text-white py-3 text-lg font-semibold"
                  >
                    {currentContent.contact.form.submit}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="animate-scale-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-steel-blue">Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal">Teléfono</div>
                      <div className="text-gray-600">+34 XXX XXX XXX</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal">Email</div>
                      <div className="text-gray-600">info@novacasa.cat</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-olive-green rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-charcoal">Zona de servicio</div>
                      <div className="text-gray-600">Barcelona, Girona, Tarragona, Lleida</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-steel-blue to-vibrant-orange p-6 rounded-lg text-white">
                    <h4 className="text-xl font-bold mb-2">¿Necesitas asesoramiento?</h4>
                    <p className="mb-4">Nuestros expertos te ayudan a elegir la mejor solución para tu hogar.</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-steel-blue">
                      Solicitar consulta gratuita
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-playfair text-vibrant-orange mb-4">Novacasa</h3>
              <p className="text-gray-300 mb-4">
                Transformando hogares en Cataluña con soluciones sostenibles y diseño moderno.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Reformas integrales</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Instalación solar</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Eficiencia energética</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Domótica</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Zonas de servicio</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Barcelona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Girona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Tarragona</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Lleida</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <div>+34 XXX XXX XXX</div>
                <div>info@novacasa.cat</div>
                <div>Cataluña, España</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Novacasa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
