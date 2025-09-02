import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart, Menu, User } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Fashion", "Home & Garden", "Electronics", "Books", 
    "Art & Collectibles", "Jewelry", "Furniture"
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-foreground">VintageVault</span>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for vintage treasures..."
                className="pl-10 pr-4 h-10 bg-background/50"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="hero" className="hidden md:flex">
              Sell Item
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories - hidden on mobile unless menu is open */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4`}>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Button 
                key={category}
                variant="ghost" 
                size="sm"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile search */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search vintage items..."
              className="pl-10 pr-4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;