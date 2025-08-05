import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Award, Clock, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Home = () => {
  const stats = [
    { number: "8", label: "Projects Completed", icon: Building2 },
    { number: "4", label: "Expert Engineers", icon: Users },
    { number: "7", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const services = [
    {
      title: "Building Construction",
      description: "Commercial and residential construction with modern techniques and sustainable practices.",
      features: ["Sustainable Design", "Quality Materials", "Timely Delivery"]
    },
    {
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects including roads, bridges, and utility systems.",
      features: ["Heavy Engineering", "Public Works", "Transportation"]
    },
    {
      title: "Project Management",
      description: "End-to-end project management ensuring quality, timeline, and budget adherence.",
      features: ["Timeline Management", "Budget Control", "Quality Assurance"]
    },
    {
      title: "Architectural Consulting",
      description: "Expert architectural consultation for innovative and functional design solutions.",
      features: ["Design Innovation", "Structural Analysis", "Regulatory Compliance"]
    }
  ];

  const testimonials = [
    {
      quote: "KF CIVIL PRO Builders delivered our office complex ahead of schedule and under budget. Their attention to detail is unmatched.",
      author: "Sarah Johnson",
      title: "CEO, TechCorp Solutions",
      rating: 5
    },
    {
      quote: "The infrastructure project was complex, but their team handled every challenge with professionalism and expertise.",
      author: "Michael Chen",
      title: "Director, City Planning Department",
      rating: 5
    },
    {
      quote: "Outstanding architectural consulting services. They transformed our vision into a functional reality.",
      author: "Emily Rodriguez",
      title: "Principal, Rodriguez Architecture",
      rating: 5
    }
  ];

  const featuredProjects = [
    {
      title: "Metro Business Center",
      location: "Downtown District",
      type: "Commercial Building",
      completion: "2024",
      description: "50-story mixed-use development with sustainable design features."
    },
    {
      title: "Grand Avenue Bridge",
      location: "Riverside City",
      type: "Infrastructure",
      completion: "2023",
      description: "Major transportation infrastructure connecting two city districts."
    },
    {
      title: "Riverside Residential Complex",
      location: "Westside",
      type: "Residential",
      completion: "2024",
      description: "Luxury residential complex with 200 units and modern amenities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              25+ Years of Engineering Excellence
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Tomorrow's
              <span className="text-accent block">Infrastructure</span>
              Today
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional civil engineering and construction services delivering innovative solutions 
              for complex infrastructure challenges with uncompromising quality and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-accent hover:shadow-strong text-lg px-8 py-3" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we deliver exceptional results across all aspects of civil engineering and construction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our most innovative and impactful construction and engineering projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-medium transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-primary/50" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary">{project.completion}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.type}</span>
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Success</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with KF CIVIL PRO Builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's discuss your next project. Our team of expert engineers and project managers 
              are ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-dark hover:shadow-strong text-lg px-8 py-3" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;