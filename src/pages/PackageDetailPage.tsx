import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Clock, MapPin, Users, Calendar, Check, X, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { travelPackages } from "@/data/packages";
import { useToast } from "@/hooks/use-toast";

const PackageDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const packageData = travelPackages.find(pkg => pkg.id === id);

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-sky">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Package Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the travel package you're looking for.
            </p>
            <Link to="/packages">
              <Button>Browse All Packages</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: isWishlisted 
        ? "Package removed from your wishlist" 
        : "Package added to your wishlist"
    });
  };

  const handleBooking = () => {
    navigate(`/booking/${packageData.id}`);
  };

  const discountPercentage = packageData.originalPrice 
    ? Math.round(((packageData.originalPrice - packageData.price) / packageData.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-8 shadow-travel">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Floating Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{packageData.title}</h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{packageData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-accent text-accent mr-1" />
                    <span>{packageData.rating} ({packageData.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleWishlist}
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Package</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {packageData.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">{packageData.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Max Group</p>
                          <p className="font-medium">{packageData.maxCapacity} people</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Availability</p>
                          <Badge className={
                            packageData.availability === 'available' ? 'bg-green-500' :
                            packageData.availability === 'limited' ? 'bg-accent' : 'bg-destructive'
                          }>
                            {packageData.availability}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {packageData.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="itinerary">
                <Card>
                  <CardHeader>
                    <CardTitle>Day by Day Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {packageData.itinerary.map((day) => (
                        <div key={day.day} className="border-l-2 border-primary pl-6 relative">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                          <div>
                            <h4 className="font-semibold text-lg mb-1">
                              Day {day.day}: {day.title}
                            </h4>
                            <p className="text-muted-foreground mb-3">{day.description}</p>
                            <div className="space-y-1">
                              {day.activities.map((activity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Check className="h-3 w-3 text-primary" />
                                  <span className="text-sm">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="included">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-600">
                        <Check className="h-5 w-5" />
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {packageData.included.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <X className="h-5 w-5" />
                        Not Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {packageData.excluded.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-travel">
              <CardHeader>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    ${packageData.price.toLocaleString()}
                  </span>
                  {packageData.originalPrice && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">
                        ${packageData.originalPrice.toLocaleString()}
                      </span>
                      {discountPercentage > 0 && (
                        <Badge className="bg-secondary text-secondary-foreground">
                          {discountPercentage}% OFF
                        </Badge>
                      )}
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">per person</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Availability:</span> {packageData.currentBookings}/{packageData.maxCapacity} booked
                  </p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(packageData.currentBookings / packageData.maxCapacity) * 100}%` }}
                    />
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-ocean hover:opacity-90 transition-opacity" 
                  size="lg"
                  onClick={handleBooking}
                  disabled={packageData.availability === 'soldout'}
                >
                  {packageData.availability === 'soldout' ? 'Sold Out' : 'Book Now'}
                </Button>
                
                <Button variant="outline" className="w-full">
                  Contact Agent
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  ✓ Free cancellation up to 48 hours
                  <br />
                  ✓ Best price guarantee
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;