import { Link } from "react-router-dom";
import { Star, Clock, MapPin, Users } from "lucide-react";
import { TravelPackage } from "@/types/travel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  package: TravelPackage;
}

const PackageCard = ({ package: pkg }: PackageCardProps) => {
  const discountPercentage = pkg.originalPrice 
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden bg-white border-0 shadow-card-travel hover:shadow-travel transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
            {discountPercentage}% OFF
          </Badge>
        )}
        
        <Badge className={`absolute top-3 right-3 ${
          pkg.availability === 'available' ? 'bg-green-500' :
          pkg.availability === 'limited' ? 'bg-accent' : 'bg-destructive'
        }`}>
          {pkg.availability === 'available' ? 'Available' :
           pkg.availability === 'limited' ? 'Limited' : 'Sold Out'}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{pkg.location}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-accent text-accent mr-1" />
            <span className="text-sm font-medium">{pkg.rating}</span>
            <span className="text-sm text-muted-foreground ml-1">
              ({pkg.reviewCount})
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {pkg.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Max {pkg.maxCapacity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">
              ${pkg.price.toLocaleString()}
            </span>
            {pkg.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${pkg.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <Link
            to={`/package/${pkg.id}`}
            className="bg-gradient-ocean text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;