import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
  condition: "Excellent" | "Very Good" | "Good" | "Fair";
  location: string;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  seller, 
  rating, 
  reviews, 
  condition,
  location 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const conditionColors = {
    "Excellent": "text-green-600 bg-green-50",
    "Very Good": "text-blue-600 bg-blue-50",
    "Good": "text-yellow-600 bg-yellow-50",
    "Fair": "text-orange-600 bg-orange-50"
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden bg-gradient-card border-0">
      <div className="relative overflow-hidden">
        {/* Image */}
        <div className="aspect-square bg-muted flex items-center justify-center">
          {!imageLoaded && (
            <div className="w-full h-full bg-muted animate-pulse" />
          )}
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur hover:bg-background"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            className={`h-4 w-4 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`} 
          />
        </Button>

        {/* Condition badge */}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${conditionColors[condition]}`}>
            {condition}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Rating and reviews */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Seller and location */}
        <div className="text-sm text-muted-foreground mb-3">
          <p>Sold by <span className="font-medium">{seller}</span></p>
          <p>{location}</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="hero" className="flex-1" size="sm">
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;