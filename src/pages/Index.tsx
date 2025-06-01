import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Zap, 
  Thermometer, 
  Smartphone, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Users,
  Lightbulb,
  Target
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Header from "@/components/Header";

const Index = () => {
  const [language, setLanguage] = useState("es");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: ""
  });

  const content = {
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios", 
        about: "Nosotros",
        contact: "Contacto"
      },
      hero: {
        title: "Transformamos tu hogar con",
        subtitle: "Reformas y Energía Solar",
        description: "Nos encargamos de todo, desde el diseño hasta el último detalle. Con Novacasa, transformar tu casa es más fácil de lo que imaginas.",
        cta: "Empieza hoy tu reforma"
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones completas para tu hogar",
        items: [
          {
            icon: Home,
            title: "Reformas Integrales",
            description: "Cocinas, baños, suelos, pintura y diseño interior completo"
          },
          {
            icon: Zap,
            title: "Instalación Solar",
            description: "Placas solares residenciales y comerciales para autoconsumo"
          },
          {
            icon: Thermometer,
            title: "Eficiencia Energética",
            description: "Aislamiento, ventanas eficientes y climatización inteligente"
          },
        ]
      },
      about: {
        title: "¿Por qué elegir Novacasa?",
        subtitle: "Más de 10 años transformando hogares en Cataluña",
        features: [
          "Gestión integral de proyectos",
          "Equipo de profesionales certificados",
          "Garantía en todos nuestros trabajos",
          "Financiación personalizada disponible"
        ]
      },
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            text: "Increíble trabajo en nuestra cocina. El equipo fue muy profesional y el resultado superó nuestras expectativas."
          },
          {
            name: "Josep Martínez", 
            city: "Girona",
            text: "Las placas solares que instalaron nos han ayudado a ahorrar más del 60% en la factura eléctrica."
          },
          {
            name: "Anna López",
            city: "Tarragona", 
            text: "Reforma completa del baño en tiempo récord. Muy satisfechos con el resultado y la atención."
          }
        ]
      },
      contact: {
        title: "¿Quieres renovar tu hogar?",
        subtitle: "Estamos aquí para ayudarte",
        form: {
          name: "Nombre completo",
          email: "Email",
          phone: "Teléfono",
          city: "Ciudad",
          service: "Servicio solicitado",
          message: "Mensaje",
          submit: "Solicitar presupuesto gratuito"
        }
      },
      footer: {
        description: "Transformamos hogares con reformas sostenibles y energía solar en toda Cataluña.",
        contact: "Contacto",
        follow: "Síguenos"
      }
    },
    ca: {
      nav: {
        home: "Inici",
        services: "Serveis",
        about: "Nosaltres", 
        contact: "Contacte"
      },
      hero: {
        title: "Transformem la teva llar amb",
        subtitle: "Reformes i Energia Solar",
        description: "Ens encarreguem de tot, des del disseny fins a l'últim detall. Amb Novacasa, transformar casa teva és més fàcil del que t'imagines.",
        cta: "Comença avui la teva reforma"
      },
      services: {
        title: "Els Nostres Serveis",
        subtitle: "Solucions completes per a la teva llar",
        items: [
          {
            icon: Home,
            title: "Reformes Integrals",
            description: "Cuines, banys, terres, pintura i disseny interior complet"
          },
          {
            icon: Zap,
            title: "Instal·lació Solar",
            description: "Plaques solars residencials i comercials per autoconsum"
          },
          {
            icon: Thermometer,
            title: "Eficiència Energètica",
            description: "Aïllament, finestres eficients i climatització intel·ligent"
          },
          {
            icon: Smartphone,
            title: "Domòtica",
            description: "Automatització de la llar i control remot intel·ligent"
          }
        ]
      },
      about: {
        title: "Per què triar Novacasa?",
        subtitle: "Més de 10 anys transformant llars a Catalunya",
        features: [
          "Gestió integral de projectes",
          "Equip de professionals certificats",
          "Garantia en tots els nostres treballs",
          "Finançament personalitzat disponible"
        ]
      },
      testimonials: {
        title: "El que diuen els nostres clients",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            text: "Increïble treball a la nostra cuina. L'equip va ser molt professional i el resultat va superar les nostres expectatives."
          },
          {
            name: "Josep Martínez",
            city: "Girona", 
            text: "Les plaques solars que van instal·lar ens han ajudat a estalviar més del 60% en la factura elèctrica."
          },
          {
            name: "Anna López",
            city: "Tarragona",
            text: "Reforma completa del bany en temps rècord. Molt satisfets amb el resultat i l'atenció."
          }
        ]
      },
      contact: {
        title: "Vols renovar la teva llar?",
        subtitle: "Som aquí per ajudar-te",
        form: {
          name: "Nom complet",
          email: "Email",
          phone: "Telèfon", 
          city: "Ciutat",
          service: "Servei sol·licitat",
          message: "Missatge",
          submit: "Sol·licitar pressupost gratuït"
        }
      },
      footer: {
        description: "Transformem llars amb reformes sostenibles i energia solar a tota Catalunya.",
        contact: "Contacte",
        follow: "Segueix-nos"
      }
    },
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "Transform your home with",
        subtitle: "Renovations and Solar Energy",
        description: "We take care of everything, from design to the last detail. With Novacasa, transforming your home is easier than you imagine.",
        cta: "Start your renovation today"
      },
      services: {
        title: "Our Services",
        subtitle: "Complete solutions for your home",
        items: [
          {
            icon: Home,
            title: "Full Renovations",
            description: "Kitchens, bathrooms, flooring, painting and complete interior design"
          },
          {
            icon: Zap,
            title: "Solar Installation", 
            description: "Residential and commercial solar panels for self-consumption"
          },
          {
            icon: Thermometer,
            title: "Energy Efficiency",
            description: "Insulation, efficient windows and smart climate control"
          },
          {
            icon: Smartphone,
            title: "Home Automation",
            description: "Home automation and intelligent remote control"
          }
        ]
      },
      about: {
        title: "Why choose Novacasa?",
        subtitle: "Over 10 years transforming homes in Catalonia",
        features: [
          "Comprehensive project management",
          "Team of certified professionals", 
          "Warranty on all our work",
          "Personalized financing available"
        ]
      },
      testimonials: {
        title: "What our clients say",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            text: "Amazing work on our kitchen. The team was very professional and the result exceeded our expectations."
          },
          {
            name: "Josep Martínez",
            city: "Girona",
            text: "The solar panels they installed have helped us save more than 60% on our electricity bill."
          },
          {
            name: "Anna López", 
            city: "Tarragona",
            text: "Complete bathroom renovation in record time. Very satisfied with the result and attention."
          }
        ]
      },
      contact: {
        title: "Want to renovate your home?",
        subtitle: "We're here to help you",
        form: {
          name: "Full name",
          email: "Email",
          phone: "Phone",
          city: "City", 
          service: "Requested service",
          message: "Message",
          submit: "Request free quote"
        }
      },
      footer: {
        description: "We transform homes with sustainable renovations and solar energy throughout Catalonia.",
        contact: "Contact",
        follow: "Follow us"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} content={currentContent} />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-accent-purple/10 text-accent-purple border-0">
              Servicios Especializados
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 font-inter">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-medium-gray font-inter max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-accent-blue" />
                  </div>
                  <CardTitle className="text-xl text-dark-navy font-inter font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-medium-gray text-center font-inter leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-light-gray to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4 bg-accent-green/10 text-accent-green border-0">
                Nuestra Experiencia
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 font-inter">
                {currentContent.about.title}
              </h2>
              <p className="text-xl text-medium-gray mb-8 font-inter leading-relaxed">
                {currentContent.about.subtitle}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {currentContent.about.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-accent-green" />
                    </div>
                    <span className="text-dark-navy font-inter font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-blue mb-2">10+</div>
                  <div className="text-medium-gray">Años de experiencia</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-purple mb-2">500+</div>
                  <div className="text-medium-gray">Proyectos completados</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
                  <div className="text-medium-gray">Clientes satisfechos</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">24/7</div>
                  <div className="text-medium-gray">Soporte técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-warm-orange/10 text-warm-orange border-0">
              Testimonios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 font-inter">
              {currentContent.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warm-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-medium-gray mb-6 italic font-inter leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-dark-navy font-inter">{testimonial.name}</p>
                      <p className="text-sm text-medium-gray font-inter">{testimonial.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-light-gray to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-accent-blue/10 text-accent-blue border-0">
              Contacto
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 font-inter">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-medium-gray font-inter">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white border-0 shadow-2xl animate-scale-in">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-dark-navy font-inter font-bold">
                  {currentContent.contact.form.submit}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-200 focus:border-accent-blue focus:ring-accent-blue/20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-200 focus:border-accent-blue focus:ring-accent-blue/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.phone}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 border-gray-200 focus:border-accent-blue focus:ring-accent-blue/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.city}</Label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue font-inter"
                      >
                        <option value="">Selecciona tu ciudad</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="girona">Girona</option>
                        <option value="tarragona">Tarragona</option>
                        <option value="lleida">Lleida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.service}</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue font-inter"
                    >
                      <option value="jnjnjnj">Selecciona un servicio</option>
                      <option value="reforma-integral">Reforma Integral</option>
                      <option value="placas-solares">Placas Solares</option>
                      <option value="eficiencia-energetica">Eficiencia Energética</option>
                     {/*<option value="domotica">Domótica</option>*/}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-inter font-medium text-dark-navy">{currentContent.contact.form.message}</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue font-inter"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-4 rounded-xl font-inter font-semibold text-lg group"
                  >
                    {currentContent.contact.form.submit}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-dark-navy mb-6 font-inter">
                  {currentContent.footer.contact}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-accent-blue/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent-blue" />
                    </div>
                    <span className="text-dark-navy font-inter font-medium">+34 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-accent-purple/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent-purple" />
                    </div>
                    <span className="text-dark-navy font-inter font-medium">info@novacasa.cat</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-accent-green/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-green" />
                    </div>
                    <span className="text-dark-navy font-inter font-medium">Cataluña, España</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="font-bold text-dark-navy mb-4 font-inter text-xl">
                  ¿Necesitas asesoramiento inmediato?
                </h4>
                <p className="text-medium-gray mb-6 font-inter leading-relaxed">
                  Nuestro equipo está disponible para resolver tus dudas por WhatsApp.
                </p>
                <Badge className="bg-accent-green/10 text-accent-green border-0 font-inter">
                  ⚡ Respuesta en menos de 1 hora
                </Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-navy mb-4 font-inter">
                  {currentContent.footer.follow}
                </h3>
                <SocialMediaLinks size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4 font-inter">Novacasa</h3>
              <p className="text-gray-300 mb-6 font-inter leading-relaxed max-w-md">
                {currentContent.footer.description}
              </p>
              <SocialMediaLinks />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-inter">Servicios</h4>
              <ul className="space-y-3 text-gray-300 font-inter">
                <li className="hover:text-white transition-colors cursor-pointer">Reformas Integrales</li>
                <li className="hover:text-white transition-colors cursor-pointer">Placas Solares</li>
                <li className="hover:text-white transition-colors cursor-pointer">Eficiencia Energética</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-inter">Zonas</h4>
              <ul className="space-y-3 text-gray-300 font-inter">
                <li className="hover:text-white transition-colors cursor-pointer">Barcelona</li>
                <li className="hover:text-white transition-colors cursor-pointer">Girona</li>
                <li className="hover:text-white transition-colors cursor-pointer">Tarragona</li>
                <li className="hover:text-white transition-colors cursor-pointer">Lleida</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-inter">
              © 2024 Novacasa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
