import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Construction, 
  ClipboardList, 
  Compass, 
  CheckCircle, 
  ArrowRight,
  Truck,
  HardHat,
  Wrench,
  Calculator
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "building",
      icon: Building2,
      title: "Building Construction",
      description: "Complete construction solutions for commercial, residential, and institutional projects.",
      longDescription: "Our building construction services encompass every aspect of the construction process, from initial planning and design to final completion and handover. We specialize in sustainable construction practices, utilizing the latest technologies and materials to deliver energy-efficient, durable structures.",
      features: [
        "Commercial Office Buildings",
        "Residential Complexes",
        "Educational Facilities",
        "Healthcare Infrastructure",
        "Industrial Facilities",
        "Mixed-Use Developments"
      ],
      processes: [
        "Site Analysis & Planning",
        "Design Development",
        "Permit Acquisition",
        "Construction Management",
        "Quality Control",
        "Project Handover"
      ]
    },
    {
      id: "infrastructure",
      icon: Construction,
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects including transportation systems, utilities, and public works.",
      longDescription: "We design and build critical infrastructure that forms the backbone of modern communities. From highways and bridges to water treatment facilities and power distribution systems, our infrastructure projects are built to last and serve communities for generations.",
      features: [
        "Highway & Road Construction",
        "Bridge Engineering",
        "Water & Wastewater Systems",
        "Power Distribution Networks",
        "Airport Infrastructure",
        "Public Transportation"
      ],
      processes: [
        "Feasibility Studies",
        "Environmental Impact Assessment",
        "Engineering Design",
        "Regulatory Approval",
        "Construction Execution",
        "System Integration"
      ]
    },
    {
      id: "management",
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end project management ensuring quality, timeline, and budget adherence.",
      longDescription: "Our certified project management professionals ensure your project is delivered on time, within budget, and to the highest quality standards. We use advanced project management methodologies and digital tools to maintain complete transparency and control throughout the project lifecycle.",
      features: [
        "Project Planning & Scheduling",
        "Budget Management",
        "Risk Assessment & Mitigation",
        "Quality Assurance",
        "Stakeholder Communication",
        "Progress Reporting"
      ],
      processes: [
        "Project Initiation",
        "Planning & Design",
        "Resource Allocation",
        "Execution Monitoring",
        "Quality Control",
        "Project Closure"
      ]
    },
    {
      id: "consulting",
      icon: Compass,
      title: "Architectural Consulting",
      description: "Expert architectural consultation for innovative and functional design solutions.",
      longDescription: "Our architectural consulting services blend creative design with practical engineering solutions. We work closely with clients to understand their vision and translate it into functional, aesthetically pleasing, and sustainable architectural designs that meet all regulatory requirements.",
      features: [
        "Conceptual Design",
        "Technical Documentation",
        "Building Code Compliance",
        "Sustainability Consulting",
        "3D Modeling & Visualization",
        "Construction Administration"
      ],
      processes: [
        "Client Consultation",
        "Site Analysis",
        "Design Development",
        "Technical Drawings",
        "Permit Documentation",
        "Construction Support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: HardHat,
      title: "Safety Consulting",
      description: "Comprehensive safety programs and risk management for construction sites."
    },
    {
      icon: Truck,
      title: "Equipment Services",
      description: "Heavy machinery rental and operation services for large-scale projects."
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and facility management for completed projects."
    },
    {
      icon: Calculator,
      title: "Cost Estimation",
      description: "Accurate project cost analysis and budget planning services."
    }
  ];

  const industries = [
    "Commercial Real Estate",
    "Government & Public Sector",
    "Healthcare",
    "Education",
    "Industrial Manufacturing",
    "Transportation",
    "Utilities",
    "Residential Development"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Engineering
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, we provide end-to-end civil engineering and construction 
              services that deliver exceptional results for projects of any scale and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-accent font-medium">{service.description}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Key Services</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Our Process</h4>
                        <ul className="space-y-2">
                          {service.processes.map((process, processIndex) => (
                            <li key={processIndex} className="flex items-center text-sm">
                              <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                                {processIndex + 1}
                              </div>
                              {process}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="bg-gradient-primary hover:shadow-medium" asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="border-0 shadow-medium overflow-hidden">
                      <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <service.icon className="h-32 w-32 text-primary/30" />
                      </div>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">98%</div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Additional Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Supporting Your Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond our core services, we offer specialized solutions to support every aspect of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions for diverse sector needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center group">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Methodology</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Proven Project Delivery Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and successful project outcomes every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <CardTitle>Discovery & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We begin with thorough project analysis, stakeholder consultations, and detailed planning to ensure success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-foreground">2</span>
                  </div>
                  <CardTitle>Design & Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our expert team develops comprehensive designs and engineering solutions tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Construction & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We execute the project with precision, maintaining quality standards and timelines throughout construction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how our comprehensive engineering services can bring your vision to life. 
              Our team is ready to provide expert consultation and detailed project planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-dark hover:shadow-strong text-lg px-8 py-3" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;