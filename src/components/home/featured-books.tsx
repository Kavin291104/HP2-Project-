import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  cover_image_url?: string;
  stock_quantity: number;
  description?: string;
}

export const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const { data, error } = await supabase
          .from('books')
          .select('*')
          .eq('featured', true)
          .limit(4);
        
        if (error) throw error;
        setBooks(data || []);
      } catch (error) {
        console.error('Error fetching featured books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBooks();
  }, []);

  const handleAddToCart = (bookId: string) => {
    addToCart(bookId, 1);
  };

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loading Featured Books...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending Books This Week
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular books our readers are loving right now
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card
              key={book.id}
              className={`book-card cursor-pointer group animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <CardContent className="p-0">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden">
                  {book.cover_image_url ? (
                    <img 
                      src={book.cover_image_url} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-lg font-bold mb-2 line-clamp-2 text-foreground">
                          {book.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {book.author}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Badge */}
                  <Badge 
                    className="absolute top-2 left-2 bg-primary text-primary-foreground"
                  >
                    Featured
                  </Badge>

                  {/* Hover Actions */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                    hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-4">
                  {/* Category and Stock */}
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {book.stock_quantity > 0 ? `${book.stock_quantity} in stock` : 'Out of stock'}
                    </span>
                  </div>

                  {/* Title and Author */}
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    by {book.author}
                  </p>

                  {/* Rating - placeholder since we don't have ratings in DB yet */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < 4 // Default to 4 stars
                              ? 'text-primary fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      4.0 (Reviews)
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">
                        ₹{book.price}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="h-8"
                      onClick={() => handleAddToCart(book.id)}
                      disabled={!user || book.stock_quantity === 0}
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      {book.stock_quantity === 0 ? 'Sold Out' : 'Add'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/books">
            <Button variant="outline" size="lg">
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};