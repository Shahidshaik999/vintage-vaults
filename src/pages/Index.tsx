import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { sampleProducts, categories, type Product } from "@/data/sampleProducts";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (term: string, category: string) => {
    let filtered = sampleProducts;
    
    if (category !== "All Categories") {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (term) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.seller.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover Unique
              <span className="block text-primary bg-gradient-hero bg-clip-text text-transparent">
                Vintage Treasures
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From timeless fashion pieces to rare collectibles, find authentic vintage items 
              with character and history.
            </p>
            
            {/* Hero Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="What vintage treasure are you looking for?"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 h-12 text-lg bg-background/80 backdrop-blur border-primary/20"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Leather Bags", "Vintage Watches", "Antique Books", "Mid-Century"].map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="bg-background/60 backdrop-blur border-primary/20 hover:bg-primary/10"
                  onClick={() => handleSearch(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "All Categories" 
                ? `Featured Items ${searchTerm && `for "${searchTerm}"`}` 
                : `${selectedCategory} ${searchTerm && `for "${searchTerm}"`}`
              }
            </h2>
            <p className="text-muted-foreground">
              {filteredProducts.length} items found
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or browse our categories
              </p>
              <Button variant="hero" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
                setFilteredProducts(sampleProducts);
              }}>
                Browse All Items
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-foreground">VintageVault</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted marketplace for authentic vintage and antique treasures.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Books</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sell</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Start Selling</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Seller Guidelines</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VintageVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;