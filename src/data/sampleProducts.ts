import vintageHandbag from "@/assets/vintage-handbag.jpg";
import vintageRadio from "@/assets/vintage-radio.jpg";
import vintageBooks from "@/assets/vintage-books.jpg";
import vintageVase from "@/assets/vintage-vase.jpg";
import vintageWatch from "@/assets/vintage-watch.jpg";

export interface Product {
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
  category: string;
}

export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Vintage Leather Handbag - 1970s Brown Leather with Brass Hardware",
    price: 129,
    originalPrice: 180,
    image: vintageHandbag,
    seller: "VintageEmma",
    rating: 4.8,
    reviews: 24,
    condition: "Excellent",
    location: "Brooklyn, NY",
    category: "Fashion"
  },
  {
    id: "2",
    title: "Art Deco Wooden Radio - 1940s Vintage Electronics in Working Condition",
    price: 245,
    image: vintageRadio,
    seller: "AntiqueCollector",
    rating: 4.9,
    reviews: 18,
    condition: "Very Good",
    location: "Portland, OR",
    category: "Electronics"
  },
  {
    id: "3",
    title: "Classic Literature Collection - 1920s-1950s First Edition Books",
    price: 89,
    originalPrice: 120,
    image: vintageBooks,
    seller: "BookWormVintage",
    rating: 4.7,
    reviews: 31,
    condition: "Good",
    location: "Boston, MA",
    category: "Books"
  },
  {
    id: "4",
    title: "Mid-Century Modern Ceramic Vase - 1960s Designer Piece",
    price: 75,
    image: vintageVase,
    seller: "ModernVintage",
    rating: 4.6,
    reviews: 12,
    condition: "Excellent",
    location: "San Francisco, CA",
    category: "Home & Garden"
  },
  {
    id: "5",
    title: "Antique Gold Pocket Watch - 1930s with Intricate Engravings",
    price: 320,
    originalPrice: 450,
    image: vintageWatch,
    seller: "TimelessTreasures",
    rating: 5.0,
    reviews: 8,
    condition: "Excellent",
    location: "Chicago, IL",
    category: "Jewelry"
  },
  {
    id: "6",
    title: "Vintage Leather Messenger Bag - 1980s Professional Style",
    price: 95,
    image: vintageHandbag,
    seller: "RetroLeather",
    rating: 4.5,
    reviews: 19,
    condition: "Very Good",
    location: "Austin, TX",
    category: "Fashion"
  }
];

export const categories = [
  "All Categories",
  "Fashion",
  "Home & Garden", 
  "Electronics",
  "Books",
  "Art & Collectibles",
  "Jewelry",
  "Furniture"
];