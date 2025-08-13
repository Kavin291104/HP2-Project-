import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Star, ShoppingCart, Heart, Filter, Grid, List, Search } from "lucide-react";

// Mock book data
const mockBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 2456,
    category: "Fiction",
    format: "Hardcover",
    coverColor: "bg-indigo-500",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 22.99,
    rating: 4.9,
    reviews: 8932,
    category: "Self-Help",
    format: "Paperback",
    coverColor: "bg-green-500",
    badge: "Popular"
  },
  {
    id: 3,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 19.99,
    rating: 4.7,
    reviews: 5432,
    category: "Fiction",
    format: "eBook",
    coverColor: "bg-pink-500"
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    price: 26.99,
    rating: 4.6,
    reviews: 3421,
    category: "Biography",
    format: "Hardcover",
    coverColor: "bg-orange-500",
    badge: "New"
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 21.99,
    rating: 4.8,
    reviews: 1876,
    category: "Finance",
    format: "Paperback",
    coverColor: "bg-blue-500"
  },
  {
    id: 6,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 23.99,
    rating: 4.5,
    reviews: 6789,
    category: "Fiction",
    format: "Paperback",
    coverColor: "bg-emerald-500"
  }
];

const categories = ["All", "Fiction", "Non-Fiction", "Self-Help", "Biography", "Finance", "Technology"];
const formats = ["All", "Hardcover", "Paperback", "eBook"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Rating", "Newest"];

export default function Books() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-12 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Book Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover thousands of books across all genres and formats
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">Filters</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="search"
                      placeholder="Search books..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Format Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">Format</label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {formats.map((format) => (
                        <SelectItem key={format} value={format}>
                          {format}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Clear Filters */}
                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Showing {mockBooks.length} books
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        Sort by {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Books Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {mockBooks.map((book, index) => (
                <Card
                  key={book.id}
                  className={`book-card cursor-pointer ${
                    viewMode === "list" ? "flex-row" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className={`p-0 ${viewMode === "list" ? "flex" : ""}`}>
                    {/* Book Cover */}
                    <div className={`relative ${
                      viewMode === "list" 
                        ? "w-24 h-32 flex-shrink-0" 
                        : "aspect-[3/4]"
                    } bg-gradient-to-br from-muted to-muted/50 ${
                      viewMode === "grid" ? "rounded-t-lg" : "rounded-l-lg"
                    } overflow-hidden`}>
                      <div className={`w-full h-full ${book.coverColor} flex items-center justify-center relative`}>
                        <div className="text-white text-center p-2">
                          <div className={`${viewMode === "list" ? "text-xs" : "text-base"} font-bold mb-1 line-clamp-2`}>
                            {book.title}
                          </div>
                          <div className={`${viewMode === "list" ? "text-xs" : "text-sm"} opacity-90`}>
                            {book.author}
                          </div>
                        </div>
                        
                        {book.badge && (
                          <Badge className="absolute top-1 left-1 text-xs bg-primary text-primary-foreground">
                            {book.badge}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className={`${viewMode === "list" ? "flex justify-between h-full" : ""}`}>
                        <div className={viewMode === "list" ? "flex-1" : ""}>
                          {/* Category and Format */}
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {book.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {book.format}
                            </span>
                          </div>

                          {/* Title and Author */}
                          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                            {book.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            by {book.author}
                          </p>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(book.rating)
                                      ? 'text-primary fill-current'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {book.rating} ({book.reviews.toLocaleString()})
                            </span>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className={`${viewMode === "list" ? "text-right" : ""}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-bold text-foreground">
                              ${book.price}
                            </span>
                            {book.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${book.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <div className={`flex gap-2 ${viewMode === "list" ? "justify-end" : ""}`}>
                            <Button size="sm" className="flex-1">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                              <Heart className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Books
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}