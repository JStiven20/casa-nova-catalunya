
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
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
  Target,
  Hammer,
  PaintBucket,
  TreePine
} from "lucide-react";
import solarInstallationImg from "@/assets/solar-installation.jpg";
import drywallInstallationImg from "@/assets/drywall-installation.jpg";
import parquetInstallationImg from "@/assets/parquet-installation.jpg";
import homeRenovationImg from "@/assets/home-renovation.jpg";
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
  const { toast } = useToast();

  const content = {
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios", 
        about: "Nosotros",
        contact: "Contacto"
      },
      hero: {
        title: "Especialistas en Reformas Integrales,",
        subtitle: "Carpintería y Energía Solar",
        description: "Transformamos tu hogar con reformas completas, muebles de madera a medida, instalación de placas solares y carpintería especializada. Más de 10 años de experiencia en Cataluña con garantía total.",
        cta: "Solicita tu presupuesto gratuito"
      },
      services: {
        title: "Nuestros Servicios Especializados",
        subtitle: "Soluciones profesionales para tu hogar y negocio",
        items: [
          {
            icon: Zap,
            title: "Instalación y Mantenimiento de Placas Solares",
            description: "Instalación profesional de paneles solares fotovoltaicos. Mantenimiento preventivo y correctivo. Ahorra hasta 70% en tu factura eléctrica con autoconsumo."
          },
          {
            icon: Home,
            title: "Instalación de Pladur (Drywall)",
            description: "Tabiques, techos y trasdosados con pladur. Material ligero, aislante térmico y acústico. Instalación rápida y acabados perfectos."
          },
          {
            icon: TreePine,
            title: "Muebles de Madera a Medida",
            description: "Diseño y fabricación de muebles personalizados en madera de alta calidad. Armarios, cocinas, estanterías y mobiliario único que refleja tu estilo personal."
          },
          {
            icon: Hammer,
            title: "Carpintería Interior y Exterior",
            description: "Trabajos especializados en madera para interiores y exteriores. Puertas, ventanas, revestimientos, tarimas y elementos decorativos con acabados premium."
          },
          {
            icon: PaintBucket,
            title: "Reformas Integrales y Pintura",
            description: "Reformas completas de apartamentos, casas y locales comerciales. Pintura interior y exterior, albañilería, fontanería y electricidad."
          },
          {
            icon: Target,
            title: "Proyectos de Diseño Personalizado",
            description: "Transformación completa de espacios combinando diseño moderno con artesanía tradicional. Cada proyecto adaptado a tus necesidades y presupuesto."
          }
        ]
      },
      about: {
        title: "¿Por qué elegir Nouespai para tu reforma?",
        subtitle: "Más de 10 años especializados en reformas, energía solar y carpintería en Cataluña",
        features: [
          "Instaladores certificados de placas solares",
          "Carpinteros especializados en muebles a medida",
          "Maestros en trabajos de madera y diseño personalizado",
          "Especialistas en pladur con acabados perfectos",
          "Equipo completo para reformas integrales",
          "Materiales de madera de máxima calidad y sostenibles",
          "Presupuestos detallados sin sorpresas",
          "Garantía de calidad en todos nuestros trabajos",
          "Financiación personalizada disponible",
          "Servicio post-venta y mantenimiento"
        ]
      },
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            service: "Placas Solares",
            text: "Instalaron 12 paneles solares en mi casa. El ahorro en la factura eléctrica ha sido increíble, ya recuperé la inversión."
          },
          {
            name: "Josep Martínez", 
            city: "Sabadell",
            service: "Muebles a Medida",
            text: "Diseñaron y fabricaron toda la cocina en madera. La calidad es excepcional y el diseño personalizado superó nuestras expectativas."
          },
          {
            name: "Anna López",
            city: "Tarragona",
            service: "Carpintería Interior", 
            text: "Instalaron armarios empotrados y revestimientos de madera. Trabajo artesanal de primera calidad, muy profesionales."
          },
          {
            name: "David Romero",
            city: "Girona", 
            service: "Reforma Integral",
            text: "Hicieron la reforma completa de mi apartamento incluyendo carpintería y pladur. Acabados perfectos y diseño espectacular."
          }
        ]
      },
      contact: {
        title: "¿Necesitas una reforma o instalación solar?",
        subtitle: "Solicita tu presupuesto gratuito sin compromiso",
        form: {
          name: "Nombre completo",
          email: "Email",
          phone: "Teléfono",
          city: "Ciudad",
          service: "Servicio solicitado",
          message: "Detalles del proyecto",
          submit: "Solicitar presupuesto gratuito"
        }
      },
      footer: {
        description: "Especialistas en reformas integrales, carpintería de madera a medida, instalación de placas solares y diseño personalizado en toda Cataluña. Calidad garantizada.",
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
        title: "Especialistes en Reformes Integrals i",
        subtitle: "Instal·lació d'Energia Solar",
        description: "Transformem la teva llar amb reformes completes, instal·lació de plaques solars, pladur, parquet i pintura. Més de 10 anys d'experiència a Catalunya amb garantia total.",
        cta: "Sol·licita el teu pressupost gratuït"
      },
      services: {
        title: "Els Nostres Serveis Especialitzats",
        subtitle: "Solucions professionals per a la teva llar i negoci",
        items: [
          {
            icon: Zap,
            title: "Instal·lació i Manteniment de Plaques Solars",
            description: "Instal·lació professional de panells solars fotovoltaics. Manteniment preventiu i correctiu. Estalvia fins al 70% en la factura elèctrica."
          },
          {
            icon: Home,
            title: "Instal·lació de Pladur (Drywall)",
            description: "Envans, sostres i trasdossats amb pladur. Material lleuger, aïllant tèrmic i acústic. Instal·lació ràpida i acabats perfectes."
          },
          {
            icon: TreePine,
            title: "Instal·lació, Poliment i Vernís de Parquet",
            description: "Instal·lació de parquet flotant i massís. Poliment i vernís professional. Restauració de sòls de fusta amb acabats d'alta qualitat."
          },
          {
            icon: PaintBucket,
            title: "Reformes Integrals i Pintura",
            description: "Reformes completes d'apartaments, cases i locals comercials. Pintura interior i exterior, paleta, fontaneria i electricitat."
          }
        ]
      },
      about: {
        title: "Per què triar Nouespai per a la teva reforma?",
        subtitle: "Més de 10 anys especialitzats en reformes i energia solar a Catalunya",
        features: [
          "Instal·ladors certificats de plaques solars",
          "Especialistes en pladur amb acabats perfectes",
          "Mestres en instal·lació i restauració de parquet",
          "Equip complet per a reformes integrals",
          "Pressupostos detallats sense sorpreses",
          "Garantia de 5 anys en instal·lacions solars",
          "Finançament personalitzat disponible",
          "Servei post-venda i manteniment"
        ]
      },
      testimonials: {
        title: "El que diuen els nostres clients",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            service: "Plaques Solars",
            text: "Van instal·lar 12 panells solars a casa meva. L'estalvi en la factura elèctrica ha estat increïble, ja vaig recuperar la inversió."
          },
          {
            name: "Josep Martínez",
            city: "Girona",
            service: "Pladur i Pintura", 
            text: "Van fer tota l'envanseria de pladur de la meva oficina. Treball impecable, ràpid i amb excel·lents acabats."
          },
          {
            name: "Anna López",
            city: "Tarragona",
            service: "Parquet",
            text: "Van restaurar el parquet de tota casa meva. Va quedar com nou, el poliment i vernís perfecte. Molt professionals."
          }
        ]
      },
      contact: {
        title: "Necessites una reforma o instal·lació solar?",
        subtitle: "Sol·licita el teu pressupost gratuït sense compromís",
        form: {
          name: "Nom complet",
          email: "Email",
          phone: "Telèfon", 
          city: "Ciutat",
          service: "Servei sol·licitat",
          message: "Detalls del projecte",
          submit: "Sol·licitar pressupost gratuït"
        }
      },
      footer: {
        description: "Especialistes en reformes integrals, instal·lació de plaques solars, pladur, parquet i pintura a tota Catalunya. Qualitat garantida.",
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
        title: "Specialists in Complete Renovations and",
        subtitle: "Solar Energy Installation",
        description: "We transform your home with complete renovations, solar panel installation, drywall, parquet and painting. Over 10 years of experience in Catalonia with full warranty.",
        cta: "Request your free quote"
      },
      services: {
        title: "Our Specialized Services",
        subtitle: "Professional solutions for your home and business",
        items: [
          {
            icon: Zap,
            title: "Solar Panel Installation and Maintenance", 
            description: "Professional installation of photovoltaic solar panels. Preventive and corrective maintenance. Save up to 70% on your electricity bill with self-consumption."
          },
          {
            icon: Home,
            title: "Drywall (Pladur) Installation",
            description: "Partition walls, ceilings and cladding with drywall. Lightweight material, thermal and acoustic insulation. Fast installation and perfect finishes."
          },
          {
            icon: TreePine,
            title: "Parquet Installation, Sanding and Varnishing",
            description: "Installation of floating and solid parquet. Professional sanding and varnishing. Wooden floor restoration with high quality finishes."
          },
          {
            icon: PaintBucket,
            title: "Complete Renovations and Painting",
            description: "Complete renovations of apartments, houses and commercial premises. Interior and exterior painting, masonry, plumbing and electrical work."
          }
        ]
      },
      about: {
        title: "Why choose Nouespai for your renovation?",
        subtitle: "Over 10 years specialized in renovations and solar energy in Catalonia",
        features: [
          "Certified solar panel installers",
          "Drywall specialists with perfect finishes", 
          "Masters in parquet installation and restoration",
          "Complete team for integral renovations",
          "Detailed budgets without surprises",
          "5-year warranty on solar installations",
          "Personalized financing available",
          "After-sales service and maintenance"
        ]
      },
      testimonials: {
        title: "What our clients say",
        items: [
          {
            name: "Maria García",
            city: "Barcelona",
            service: "Solar Panels",
            text: "They installed 12 solar panels in my house. The savings on the electricity bill have been incredible, I already recovered the investment."
          },
          {
            name: "Josep Martínez",
            city: "Girona",
            service: "Drywall and Painting",
            text: "They did all the drywall partitioning in my office. Impeccable work, fast and with excellent finishes."
          },
          {
            name: "Anna López", 
            city: "Tarragona",
            service: "Parquet",
            text: "They restored the parquet throughout my house. It looked like new, the sanding and varnishing perfect. Very professional."
          }
        ]
      },
      contact: {
        title: "Need a renovation or solar installation?",
        subtitle: "Request your free quote without commitment",
        form: {
          name: "Full name",
          email: "Email",
          phone: "Phone",
          city: "City", 
          service: "Requested service",
          message: "Project details",
          submit: "Request free quote"
        }
      },
      footer: {
        description: "Specialists in complete renovations, solar panel installation, drywall, parquet and painting throughout Catalonia. Guaranteed quality.",
        contact: "Contact",
        follow: "Follow us"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto para tu proyecto.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        service: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
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
            <Badge variant="secondary" className="mb-4 bg-accent-blue/10 text-accent-blue border-0">
              Servicios Profesionales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6 font-inter">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-medium-gray font-inter max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentContent.services.items.map((service, index) => {
              const serviceImages = [solarInstallationImg, drywallInstallationImg, parquetInstallationImg, homeRenovationImg];
              return (
                <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group animate-slide-up overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
              );
            })}
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

              <div className="grid md:grid-cols-1 gap-4">
                {currentContent.about.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-accent-green" />
                    </div>
                    <span className="text-dark-navy font-inter font-medium text-sm">{feature}</span>
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
                  <div className="text-3xl font-bold text-accent-purple mb-2">800+</div>
                  <div className="text-medium-gray">Proyectos completados</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
                  <div className="text-medium-gray">Clientes satisfechos</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">5</div>
                  <div className="text-medium-gray">Años de garantía</div>
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
                      <Badge variant="secondary" className="mt-1 text-xs bg-accent-blue/10 text-accent-blue border-0">
                        {testimonial.service}
                      </Badge>
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
                      <option value="">Selecciona un servicio</option>
                      <option value="placas-solares">Instalación de Placas Solares</option>
                      <option value="pladur">Instalación de Pladur</option>
                      <option value="muebles-madera">Muebles de Madera a Medida</option>
                      <option value="carpinteria">Carpintería Interior y Exterior</option>
                      <option value="reforma-integral">Reforma Integral</option>
                      <option value="diseno-personalizado">Proyectos de Diseño Personalizado</option>
                      <option value="pintura">Pintura</option>
                      <option value="mantenimiento">Mantenimiento</option>
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
                      placeholder="Describe tu proyecto: metros cuadrados, tipo de trabajo, fechas estimadas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-4 rounded-xl font-inter font-semibold text-lg group disabled:opacity-50"
                  >
                    {contactMutation.isPending ? "Enviando..." : currentContent.contact.form.submit}
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
                    <span className="text-dark-navy font-inter font-medium">info@nouespai.cat</span>
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
                  Nuestro equipo especializado está disponible para resolver tus dudas sobre placas solares, pladur, parquet y reformas.
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
              <h3 className="text-3xl font-bold text-white mb-4 font-inter">Nouespai</h3>
              <p className="text-gray-300 mb-6 font-inter leading-relaxed max-w-md">
                {currentContent.footer.description}
              </p>
              <SocialMediaLinks />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-inter">Servicios</h4>
              <ul className="space-y-3 text-gray-300 font-inter">
                <li className="hover:text-white transition-colors cursor-pointer">Placas Solares</li>
                <li className="hover:text-white transition-colors cursor-pointer">Muebles de Madera a Medida</li>
                <li className="hover:text-white transition-colors cursor-pointer">Carpintería Interior y Exterior</li>
                <li className="hover:text-white transition-colors cursor-pointer">Instalación Pladur</li>
                <li className="hover:text-white transition-colors cursor-pointer">Reformas Integrales</li>
                <li className="hover:text-white transition-colors cursor-pointer">Diseño Personalizado</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-inter">Zonas de Servicio</h4>
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
              © 2024 Nouespai. Todos los derechos reservados. Especialistas en reformas, placas solares, pladur y parquet en Cataluña.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
