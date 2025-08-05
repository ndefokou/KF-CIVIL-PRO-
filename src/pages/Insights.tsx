import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Construction Technology", "Sustainability", "Project Management", "Industry Trends", "Safety"];

  const featuredArticle = {
    id: 1,
    title: "The Future of Smart Construction: How IoT and AI are Revolutionizing Building Sites",
    excerpt: "Explore how Internet of Things sensors and Artificial Intelligence are transforming construction efficiency, safety monitoring, and project management in modern building sites.",
    author: "Sarah Rodriguez",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Construction Technology",
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "Sustainable Building Materials: A Comprehensive Guide for 2024",
      excerpt: "Discover the latest eco-friendly building materials that are reshaping the construction industry while reducing environmental impact and improving energy efficiency.",
      author: "Michael Thompson",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Digital Project Management: Tools and Strategies for Success",
      excerpt: "Learn how digital transformation is enhancing project management efficiency with cloud-based collaboration tools and real-time monitoring systems.",
      author: "Emily Zhang",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Project Management"
    },
    {
      id: 4,
      title: "Safety First: Advanced Technologies in Construction Site Safety",
      excerpt: "Examine cutting-edge safety technologies including wearable sensors, drone monitoring, and AI-powered risk assessment systems protecting construction workers.",
      author: "James Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Safety"
    },
    {
      id: 5,
      title: "The Rise of Modular Construction: Efficiency Meets Innovation",
      excerpt: "Understanding how modular construction techniques are reducing build times, minimizing waste, and delivering consistent quality across projects.",
      author: "Lisa Garcia",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Construction Technology"
    },
    {
      id: 6,
      title: "Green Building Certifications: LEED, BREEAM, and Beyond",
      excerpt: "A comprehensive comparison of global green building certification programs and their impact on sustainable construction practices.",
      author: "David Chen",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Sustainability"
    },
    {
      id: 7,
      title: "Infrastructure Investment Trends: What to Expect in 2024",
      excerpt: "Analyzing global infrastructure investment patterns and emerging opportunities in transportation, utilities, and smart city development.",
      author: "Sarah Rodriguez",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Industry Trends"
    },
    {
      id: 8,
      title: "BIM Technology: Revolutionizing Design and Construction Collaboration",
      excerpt: "How Building Information Modeling is transforming project collaboration, reducing errors, and improving construction outcomes.",
      author: "Michael Thompson",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Construction Technology"
    },
    {
      id: 9,
      title: "Climate-Resilient Infrastructure: Building for the Future",
      excerpt: "Strategies for designing and constructing infrastructure that can withstand the challenges of climate change and extreme weather events.",
      author: "Emily Zhang",
      date: "2023-12-25",
      readTime: "10 min read",
      category: "Sustainability"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    // { number: "500+", label: "Articles Published", icon: BookOpen },
    // { number: "50K+", label: "Monthly Readers", icon: User },
    // { number: "95%", label: "Reader Satisfaction", icon: TrendingUp },
    // { number: "25+", label: "Industry Experts", icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-6">Industry Insights</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Construction Industry
              <span className="text-primary block">Knowledge Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay ahead of industry trends with expert insights, best practices, and innovative 
              solutions from our team of experienced engineers and construction professionals.
            </p>
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

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-bold text-foreground">Editor's Pick</h2>
            </div>
            
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-primary/30" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-primary hover:shadow-medium w-fit" asChild>
                    <Link to={`/insights/${featuredArticle.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              <p className="text-muted-foreground">
                {filteredArticles.length} articles found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/30" />
                  </div>
                  
                  <CardHeader className="flex-1">
                    <Badge variant="outline" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                          <Link to={`/insights/${article.id}`}>
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter and get the latest construction industry trends, 
              best practices, and expert insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button size="lg" className="bg-accent hover:bg-accent-dark hover:shadow-strong px-8 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Join 50,000+ construction professionals who read our insights weekly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;