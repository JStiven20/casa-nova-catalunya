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
  Globe
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
          {
            icon: Smartphone,
            title: "Domótica",
            description: "Automatización del hogar y control remoto inteligente"
          }
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4 font-raleway">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-steel-blue mx-auto mb-4" />
                  <CardTitle className="text-xl text-dark-charcoal font-raleway">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center font-inter">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4 font-raleway">
              {currentContent.about.title}
            </h2>
            <p className="text-xl text-gray-600 mb-16 font-inter">
              {currentContent.about.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-olive-green flex-shrink-0" />
                  <span className="text-lg text-dark-charcoal font-inter">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4 font-raleway">
              {currentContent.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic font-inter">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-dark-charcoal font-raleway">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-inter">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4 font-raleway">
                {currentContent.contact.title}
              </h2>
              <p className="text-xl text-gray-600 font-inter">
                {currentContent.contact.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark-charcoal font-raleway">
                    {currentContent.contact.form.submit}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="font-raleway">{currentContent.contact.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-raleway">{currentContent.contact.form.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-raleway">{currentContent.contact.form.phone}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city" className="font-raleway">{currentContent.contact.form.city}</Label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steel-blue font-inter"
                      >
                        <option value="">Selecciona tu ciudad</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="girona">Girona</option>
                        <option value="tarragona">Tarragona</option>
                        <option value="lleida">Lleida</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="service" className="font-raleway">{currentContent.contact.form.service}</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steel-blue font-inter"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="reforma-integral">Reforma Integral</option>
                        <option value="placas-solares">Placas Solares</option>
                        <option value="eficiencia-energetica">Eficiencia Energética</option>
                        <option value="domotica">Domótica</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-raleway">{currentContent.contact.form.message}</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steel-blue font-inter"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-vibrant-orange hover:bg-orange-600 text-white py-3 rounded-full font-raleway font-semibold"
                    >
                      {currentContent.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4 font-raleway">
                    {currentContent.footer.contact}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-steel-blue" />
                      <span className="text-gray-600 font-inter">+34 XXX XXX XXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-steel-blue" />
                      <span className="text-gray-600 font-inter">info@novacasa.cat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-steel-blue" />
                      <span className="text-gray-600 font-inter">Cataluña, España</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4 font-raleway">
                    {currentContent.footer.follow}
                  </h3>
                  <SocialMediaLinks size="lg" />
                </div>

                <div className="bg-steel-blue/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-dark-charcoal mb-2 font-raleway">
                    ¿Necesitas asesoramiento inmediato?
                  </h4>
                  <p className="text-gray-600 mb-4 font-inter">
                    Nuestro equipo está disponible para resolver tus dudas por WhatsApp.
                  </p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 font-raleway">
                    Respuesta en menos de 1 hora
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-raleway">Novacasa</h3>
              <p className="text-gray-300 mb-6 font-inter">
                {currentContent.footer.description}
              </p>
              <SocialMediaLinks />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-raleway">Servicios</h4>
              <ul className="space-y-2 text-gray-300 font-inter">
                <li>Reformas Integrales</li>
                <li>Placas Solares</li>
                <li>Eficiencia Energética</li>
                <li>Domótica</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-raleway">Zonas de Actuación</h4>
              <ul className="space-y-2 text-gray-300 font-inter">
                <li>Barcelona</li>
                <li>Girona</li>
                <li>Tarragona</li>
                <li>Lleida</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
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
