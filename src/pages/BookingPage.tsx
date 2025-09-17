import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, User, Mail, Phone, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { travelPackages } from "@/data/packages";
import { useToast } from "@/hooks/use-toast";

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const packageData = travelPackages.find((pkg) => pkg.id === id);

  const [formData, setFormData] = useState<any>({
    travelers: 1,
    departureDate: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-sky">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Package Not Found</h2>
            <Button onClick={() => navigate("/packages")}>Browse Packages</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateTotal = () => {
    return packageData.price * formData.travelers;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    toast({
      title: "Booking Confirmed 🎉",
      description: `Your booking for ${packageData.title} with ${formData.travelers} traveler(s) has been confirmed!`,
      className: "bg-green-600 text-white border-0",
    });

    setTimeout(() => {
      navigate("/packages");
    }, 2000);
  };

  const isFormValid = () => {
    if (!formData.departureDate || formData.travelers < 1) return false;

    // Check all travelers' info
    for (let i = 0; i < formData.travelers; i++) {
      if (
        !formData[`customerName${i}`] ||
        !formData[`email${i}`] ||
        !formData[`phone${i}`]
      ) return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card-travel">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Trip</CardTitle>
                <p className="text-muted-foreground">
                  Complete the form below to book your travel package
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Travelers Dynamic Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    {Array.from({ length: formData.travelers }, (_, index) => (
                      <div key={index} className="border p-4 rounded-lg space-y-4 bg-gray-50">
                        <h4 className="font-medium">Traveler {index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Full Name */}
                          <div className="space-y-2">
                            <Label htmlFor={`name-${index}`}>Full Name *</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id={`name-${index}`}
                                placeholder="Enter your full name"
                                value={formData[`customerName${index}`] || ""}
                                onChange={(e) =>
                                  handleInputChange(`customerName${index}`, e.target.value)
                                }
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <Label htmlFor={`email-${index}`}>Email Address *</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id={`email-${index}`}
                                type="email"
                                placeholder="Enter your email"
                                value={formData[`email${index}`] || ""}
                                onChange={(e) =>
                                  handleInputChange(`email${index}`, e.target.value)
                                }
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor={`phone-${index}`}>Phone Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id={`phone-${index}`}
                              type="tel"
                              placeholder="Enter your phone number"
                              value={formData[`phone${index}`] || ""}
                              onChange={(e) =>
                                handleInputChange(`phone${index}`, e.target.value)
                              }
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Trip Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Trip Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="departure">Departure Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <select
                            id="departure"
                            value={formData.departureDate}
                            onChange={(e) => handleInputChange("departureDate", e.target.value)}
                            className="pl-10 w-full border rounded-md h-10"
                            required
                          >
                            <option value="">Select a date</option>
                            <option value="2025-10-10">10/10/2025</option>
                            <option value="2025-11-20">20/11/2025</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers *</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="travelers"
                            type="number"
                            min="1"
                            max={packageData.maxCapacity}
                            value={formData.travelers}
                            onChange={(e) =>
                              handleInputChange("travelers", parseInt(e.target.value))
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Special Requests */}
                  <div className="space-y-4">
                    <Label htmlFor="requests">Special Requests</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="requests"
                        placeholder="Dietary restrictions, accessibility needs, preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        className="pl-10 min-h-24"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-ocean hover:opacity-90 transition-opacity"
                    disabled={!isFormValid() || isSubmitting}
                  >
                    {isSubmitting ? "Processing Booking..." : "Confirm Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-travel">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <img
                    src={packageData.image}
                    alt={packageData.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold">{packageData.title}</h4>
                  <p className="text-sm text-muted-foreground">{packageData.location}</p>
                  <Badge className="mt-2">{packageData.duration}</Badge>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Package Price</span>
                    <span>${packageData.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers</span>
                    <span>× {formData.travelers}</span>
                  </div>
                  {packageData.originalPrice && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>
                        -$
                        {(
                          (packageData.originalPrice - packageData.price) *
                          formData.travelers
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free cancellation up to 48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Best price guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
