import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Fiction",
    description: "Immerse yourself in captivating stories and imaginative worlds",
    bookCount: 1247,
    color: "from-blue-500 to-purple-600",
    icon: "📚",
    featured: ["The Midnight Library", "Project Hail Mary", "The Seven Husbands"]
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Expand your knowledge with real-world insights and facts",
    bookCount: 892,
    color: "from-green-500 to-teal-600",
    icon: "🧠",
    featured: ["Sapiens", "Educated", "Becoming"]
  },
  {
    id: 3,
    name: "Technology & AI",
    description: "Stay ahead with cutting-edge technological insights",
    bookCount: 456,
    color: "from-orange-500 to-red-600",
    icon: "🤖",
    featured: ["The Age of AI", "Clean Code", "AI Superpowers"]
  },
  {
    id: 4,
    name: "Self-Help",
    description: "Transform your life with practical guidance and motivation",
    bookCount: 678,
    color: "from-purple-500 to-pink-600",
    icon: "🌟",
    featured: ["Atomic Habits", "The 7 Habits", "Think and Grow Rich"]
  },
  {
    id: 5,
    name: "Business & Finance",
    description: "Master the art of success and financial wisdom",
    bookCount: 543,
    color: "from-indigo-500 to-blue-600",
    icon: "💼",
    featured: ["Rich Dad Poor Dad", "The Psychology of Money", "Good to Great"]
  },
  {
    id: 6,
    name: "Science & Nature",
    description: "Explore the wonders of our universe and natural world",
    bookCount: 321,
    color: "from-teal-500 to-green-600",
    icon: "🔬",
    featured: ["Cosmos", "A Brief History of Time", "The Selfish Gene"]
  },
  {
    id: 7,
    name: "History & Biography",
    description: "Learn from the past and inspiring life stories",
    bookCount: 467,
    color: "from-amber-500 to-orange-600",
    icon: "📜",
    featured: ["Steve Jobs", "The Diary of a Young Girl", "Churchill"]
  },
  {
    id: 8,
    name: "Health & Wellness",
    description: "Improve your physical and mental well-being",
    bookCount: 234,
    color: "from-emerald-500 to-teal-600",
    icon: "🏃‍♀️",
    featured: ["Why We Sleep", "The Blue Zones", "Mindfulness"]
  },
  {
    id: 9,
    name: "Arts & Culture",
    description: "Dive into creativity, art history, and cultural studies",
    bookCount: 312,
    color: "from-pink-500 to-purple-600",
    icon: "🎨",
    featured: ["The Story of Art", "Ways of Seeing", "The Art Book"]
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Browse by Interest
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Categories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect read by exploring our carefully curated categories. 
              From timeless fiction to cutting-edge technology, we have something for every reader.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">
                  {categories.reduce((sum, cat) => sum + cat.bookCount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Books</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">
                  {categories.length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">
                  4.8★
                </div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`book-card cursor-pointer group animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className={`h-40 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                      <div>
                        <div className="text-4xl mb-3">{category.icon}</div>
                        <h3 className="font-heading font-bold text-2xl mb-2">
                          {category.name}
                        </h3>
                        <Badge className="bg-white/20 text-white border-white/30">
                          {category.bookCount.toLocaleString()} books
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded" />
                    <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/10 rounded-full" />
                  </div>

                  {/* Category Details */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Featured Books */}
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 text-sm">Featured Books:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.featured.map((book, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {book}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      variant="outline"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Explore {category.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is always adding new books and categories. 
            Let us know what you'd like to see in our collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Request a Book
            </Button>
            <Button size="lg" variant="outline">
              Browse All Books
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}