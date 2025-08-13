import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Fiction",
    description: "Immerse yourself in captivating stories",
    bookCount: 1200,
    color: "from-blue-500 to-purple-600",
    icon: "📚"
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Expand your knowledge and understanding",
    bookCount: 890,
    color: "from-green-500 to-teal-600",
    icon: "🧠"
  },
  {
    id: 3,
    name: "Technology & AI",
    description: "Stay ahead with cutting-edge insights",
    bookCount: 456,
    color: "from-orange-500 to-red-600",
    icon: "🤖"
  },
  {
    id: 4,
    name: "Self-Help",
    description: "Transform your life and mindset",
    bookCount: 678,
    color: "from-purple-500 to-pink-600",
    icon: "🌟"
  },
  {
    id: 5,
    name: "Business",
    description: "Master the art of success",
    bookCount: 543,
    color: "from-indigo-500 to-blue-600",
    icon: "💼"
  },
  {
    id: 6,
    name: "Science",
    description: "Explore the wonders of our universe",
    bookCount: 321,
    color: "from-teal-500 to-green-600",
    icon: "🔬"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Browse by Category
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Genre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From thrilling fiction to practical guides, discover books that match your interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className={`book-card cursor-pointer group animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Category Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${category.color} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center text-white z-10">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-heading font-bold text-xl">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border border-white rounded" />
                  </div>
                </div>

                {/* Category Details */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">
                        {category.bookCount.toLocaleString()} books
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link to="/categories">
            <Button size="lg" variant="outline" className="border-2">
              View All Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};