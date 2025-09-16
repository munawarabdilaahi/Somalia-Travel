import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Users, ArrowRight, Star, Award, Shield, HeartHandshake, Sparkles, Globe, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PackageCard from "@/components/PackageCard";
import { travelPackages, getFeaturedPackages } from "@/data/packages";
import tropicalImage from "@/assets/tropical-paradise.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("");
  const [date, setDate] = useState("");
  
  const featuredPackages = getFeaturedPackages();

  return (
    <div className="min-h-screen bg-gradient-hero animate-gradient">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${tropicalImage})` 
        }}
      >
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-secondary/20 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center text-white z-10 relative">
          <div className="max-w-4xl mx-auto">
            {/* Premium Badge */}
            <Badge variant="outline" className="glass-effect text-white border-white/30 mb-6 px-6 py-2 text-sm font-medium animate-fade-in-up">
              <Sparkles className="h-4 w-4 mr-2" />
              Premium Travel Experiences Since 2010
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up text-glow">
              Discover Your Next
              <span className="block bg-gradient-sunset bg-clip-text text-transparent animate-scale-in-bounce">
                Adventure
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto animate-fade-in-up leading-relaxed">
              Explore extraordinary destinations with our premium travel packages. 
              Create memories that last a lifetime with personalized luxury experiences.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-slide-in-right">
              <div className="flex items-center gap-2 text-white/80">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Fully Protected</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <HeartHandshake className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>

            {/* Enhanced Search Card */}
            <Card className="max-w-5xl mx-auto card-luxury pulse-glow animate-scale-in-bounce">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    <Input
                      placeholder="Where to?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10 h-14 border-2 border-transparent hover:border-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="pl-10 h-14 border-2 border-transparent hover:border-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    <Input
                      placeholder="Travelers"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="pl-10 h-14 border-2 border-transparent hover:border-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <Button className="btn-premium h-14 text-lg font-semibold">
                    <Search className="h-5 w-5 mr-2" />
                    Search Dreams
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-white to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              Why Choose Somalia Travel
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-premium bg-clip-text text-transparent">
              Your Adventure Awaits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We craft extraordinary travel experiences with unmatched attention to detail, 
              ensuring every moment of your journey exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Compass className="h-8 w-8" />,
                title: "Expert Curation",
                description: "Handpicked destinations and experiences by travel experts with decades of experience.",
                color: "text-primary"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Complete Protection", 
                description: "Comprehensive travel insurance and 24/7 support throughout your journey.",
                color: "text-accent"
              },
              {
                icon: <HeartHandshake className="h-8 w-8" />,
                title: "Personalized Service",
                description: "Tailored itineraries designed specifically for your preferences and dreams.",
                color: "text-secondary"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-luxury group hover:shadow-premium transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 px-4 bg-gradient-sky">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Featured Destinations
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Extraordinary Journeys
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked experiences that showcase the world's most incredible destinations, 
              curated for the discerning traveler seeking authentic luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredPackages.map((pkg, index) => (
              <div key={pkg.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <PackageCard package={pkg} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/packages">
              <Button size="lg" className="btn-premium px-10 py-4 text-lg font-semibold">
                Explore All Adventures
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white text-black py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="glass-effect text-black border-white/30 mb-4 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Trusted Worldwide
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Travel Excellence by Numbers
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have chosen WanderLux for their dream vacations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Dream Destinations", icon: <Globe className="h-8 w-8 mx-auto mb-4 text-accent" /> },
              { number: "10k+", label: "Happy Travelers", icon: <HeartHandshake className="h-8 w-8 mx-auto mb-4 text-accent" /> },
              { number: "4.9", label: "Average Rating", icon: <Star className="h-8 w-8 mx-auto mb-4 text-accent fill-current" /> },
              { number: "24/7", label: "Expert Support", icon: <Shield className="h-8 w-8 mx-auto mb-4 text-accent" /> }
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-300">
                {stat.icon}
                <h3 className="text-4xl md:text-5xl font-bold mb-3 text-glow group-hover:text-accent transition-colors">
                  {stat.number}
                </h3>
                <p className="text-black/70 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-glow">
        <div className="container mx-auto">
          <Card className="card-luxury max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
                  Never Miss an Adventure
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be the first to discover new destinations, exclusive offers, and insider travel tips from our experts.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address"
                  className="h-12 text-center md:text-left"
                />
                <Button className="btn-premium h-12 px-8">
                  Subscribe Now
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Join 25,000+ travelers • No spam, unsubscribe anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
