import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart, Award, MapPin, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every project, delivering exceptional quality that exceeds expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Success comes through teamwork, open communication, and strong partnerships with our clients."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our relationships."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to tackle complex engineering challenges."
    }
  ];

  const timeline = [
    {
      year: "1999",
      title: "Company Founded",
      description: "KF CIVIL PRO Builders was established with a vision to transform the construction industry through innovative engineering solutions."
    },
    {
      year: "2005",
      title: "First Major Infrastructure Project",
      description: "Completed our first large-scale infrastructure project, setting the foundation for our reputation in complex engineering."
    },
    {
      year: "2012",
      title: "Sustainable Construction Initiative",
      description: "Launched our green building program, becoming a leader in sustainable construction practices."
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Integrated advanced BIM technology and digital project management across all operations."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Today, we're proud to serve clients nationwide with over 500 completed projects and a team of 50+ experts."
    }
  ];

  const team = [
    {
      name: "David Chen",
      title: "Chief Executive Officer",
      description: "25+ years in civil engineering and construction management. Led major infrastructure projects across North America.",
      location: "New York, NY"
    },
    {
      name: "Sarah Rodriguez",
      title: "Chief Technology Officer",
      description: "Expert in construction technology and digital innovation. Pioneer in BIM implementation and smart construction practices.",
      location: "San Francisco, CA"
    },
    {
      name: "Michael Thompson",
      title: "Head of Engineering",
      description: "Structural engineer with expertise in high-rise construction and complex infrastructure projects.",
      location: "Chicago, IL"
    },
    {
      name: "Emily Zhang",
      title: "Director of Project Management",
      description: "Certified PMP with a track record of delivering large-scale projects on time and under budget.",
      location: "Boston, MA"
    },
    {
      name: "James Wilson",
      title: "Head of Sustainability",
      description: "Environmental engineer focused on sustainable construction practices and green building certification.",
      location: "Portland, OR"
    },
    {
      name: "Lisa Garcia",
      title: "Director of Client Relations",
      description: "Client success specialist ensuring exceptional service delivery and long-term partnerships.",
      location: "Miami, FL"
    }
  ];

  const certifications = [
    "LEED Accredited Professional",
    "Project Management Professional (PMP)",
    "Certified Construction Manager (CCM)",
    "American Institute of Steel Construction",
    "National Society of Professional Engineers",
    "U.S. Green Building Council Member"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6">Our Story</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building Excellence for
              <span className="text-primary block">Over 25 Years</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              KF CIVIL PRO Builders has been at the forefront of civil engineering innovation, 
              delivering exceptional construction and infrastructure solutions with unwavering 
              commitment to quality, safety, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class engineering and construction solutions that build stronger communities 
                  and create lasting value for our clients, while maintaining the highest standards of safety, 
                  quality, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading civil engineering firm recognized for innovation, sustainability, 
                  and excellence in construction, shaping the infrastructure of tomorrow through 
                  cutting-edge technology and expert craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to building long-term partnerships with our clients, fostering 
                  innovation in our industry, and contributing to sustainable development that 
                  benefits both present and future generations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Core Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              25 Years of Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the key milestones that have shaped our company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="text-lg font-bold">{item.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Meet the Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in civil engineering, 
              construction management, and innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-accent">{member.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Certifications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industry Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team maintains the highest industry standards through continuous education and professional certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{cert}</p>
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
              Join Our Growing Team
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for talented engineers, project managers, and construction professionals 
              to join our team. Be part of building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-dark hover:shadow-strong text-lg px-8 py-3" asChild>
                <Link to="/contact">Explore Careers</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;