import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Calendar, Users, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Commercial", "Infrastructure", "Residential", "Industrial"];

  const projects = [
    {
      id: 1,
      title: "Metro Business Center",
      location: "Downtown District, NY",
      type: "Commercial",
      category: "Commercial",
      year: "2024",
      duration: "18 months",
      team: "35 professionals",
      description: "A 50-story mixed-use development featuring sustainable design, smart building technology, and LEED Platinum certification. The project includes office spaces, retail, and underground parking.",
      highlights: [
        "LEED Platinum Certification",
        "Smart Building Integration",
        "Sustainable Materials",
        "Energy Efficient Design"
      ],
      stats: {
        floors: "50",
        area: "2.5M sq ft",
        investment: "$850M",
        completion: "Ahead of Schedule"
      }
    },
    {
      id: 2,
      title: "Grand Avenue Bridge",
      location: "Riverside City, CA",
      type: "Infrastructure",
      category: "Infrastructure",
      year: "2023",
      duration: "24 months",
      team: "45 professionals",
      description: "Major transportation infrastructure connecting two city districts with a 1,200-foot cable-stayed bridge designed to withstand seismic activity and extreme weather conditions.",
      highlights: [
        "Seismic Resistant Design",
        "Cable-Stayed Structure",
        "LED Lighting System",
        "Pedestrian & Cyclist Paths"
      ],
      stats: {
        length: "1,200 ft",
        capacity: "80,000 vehicles/day",
        investment: "$420M",
        award: "Engineering Excellence"
      }
    },
    {
      id: 3,
      title: "Riverside Residential Complex",
      location: "Westside, FL",
      type: "Residential",
      category: "Residential",
      year: "2024",
      duration: "12 months",
      team: "25 professionals",
      description: "Luxury residential complex with 200 units featuring modern amenities, green spaces, and smart home technology. Designed for sustainable living with renewable energy systems.",
      highlights: [
        "Smart Home Technology",
        "Renewable Energy Systems",
        "Green Building Materials",
        "Community Amenities"
      ],
      stats: {
        units: "200",
        amenities: "15+",
        investment: "$180M",
        occupancy: "95% Pre-sold"
      }
    },
    {
      id: 4,
      title: "TechHub Manufacturing Facility",
      location: "Industrial Park, TX",
      type: "Industrial",
      category: "Industrial",
      year: "2023",
      duration: "14 months",
      team: "30 professionals",
      description: "State-of-the-art manufacturing facility for technology components featuring automated systems, clean room environments, and advanced ventilation systems.",
      highlights: [
        "Clean Room Environments",
        "Automated Systems",
        "Advanced HVAC",
        "ISO Certified Standards"
      ],
      stats: {
        area: "500,000 sq ft",
        cleanRooms: "12",
        investment: "$320M",
        efficiency: "40% Energy Savings"
      }
    },
    {
      id: 5,
      title: "Coastal Highway Extension",
      location: "Pacific Coast, OR",
      type: "Infrastructure",
      category: "Infrastructure",
      year: "2022",
      duration: "30 months",
      team: "60 professionals",
      description: "Major highway extension project including bridges, tunnels, and environmental protection measures to preserve coastal ecosystems while improving transportation.",
      highlights: [
        "Environmental Protection",
        "Coastal Engineering",
        "Wildlife Corridors",
        "Erosion Control"
      ],
      stats: {
        length: "25 miles",
        bridges: "8",
        investment: "$750M",
        environmental: "Zero Impact"
      }
    },
    {
      id: 6,
      title: "University Science Complex",
      location: "Education District, MA",
      type: "Commercial",
      category: "Commercial",
      year: "2023",
      duration: "20 months",
      team: "40 professionals",
      description: "Advanced research and education facility featuring laboratories, lecture halls, and collaborative spaces designed for cutting-edge scientific research and education.",
      highlights: [
        "Research Laboratories",
        "Collaborative Spaces",
        "Advanced Technology",
        "Sustainable Design"
      ],
      stats: {
        labs: "50+",
        capacity: "5,000 students",
        investment: "$280M",
        rating: "LEED Gold"
      }
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building Excellence
              <span className="text-primary block">Across Industries</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects spanning commercial construction, 
              infrastructure development, and architectural innovation across North America.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">$5B+</div>
              <div className="text-sm text-muted-foreground">Total Project Value</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? "bg-gradient-primary hover:shadow-medium" 
                    : "hover:bg-secondary"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <Building2 className="h-24 w-24 text-primary/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-primary"
                  >
                    {project.type}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 bg-white/90 border-accent text-accent"
                  >
                    {project.year}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Project Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-secondary rounded-lg">
                          <div className="font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Team */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Capabilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose KF CIVIL PRO Builders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. We deliver projects that exceed expectations and stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "On-Time Delivery",
                description: "98% of projects completed on or ahead of schedule",
                icon: Calendar
              },
              {
                title: "Budget Management",
                description: "Average 5% under budget on completed projects",
                icon: Building2
              },
              {
                title: "Quality Standards",
                description: "Zero compromise on safety and quality standards",
                icon: Users
              },
              {
                title: "Innovation",
                description: "Cutting-edge technology and sustainable practices",
                icon: ExternalLink
              }
            ].map((capability, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
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
              Let's Build Your Next Project Together
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Ready to start your construction or infrastructure project? Our team is here to help 
              you from initial planning through successful completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-dark hover:shadow-strong text-lg px-8 py-3" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;