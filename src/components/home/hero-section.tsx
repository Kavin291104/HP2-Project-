import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import heroImage from "@/assets/hero-bookstore.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful bookstore interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center rounded-full border bg-card px-3 py-1 text-sm mb-6">
            <Star className="w-4 h-4 mr-2 text-primary" fill="currentColor" />
            Over 10,000 Books Available
          </div>

          {/* Main Heading */}
          <h1 className="animate-slide-up font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Books for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Every Reader
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-slide-up text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover your next favorite book from our curated collection of
            fiction, non-fiction, AI, self-help, and more. Available in digital
            and physical formats.
          </p>

          {/* Stats */}
          <div className="animate-fade-in flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 mr-2 text-primary" />
              <span>Free shipping on orders over $35</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="w-4 h-4 mr-2 text-primary" fill="currentColor" />
              <span>4.8/5 customer rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4">
            <Link to="/books">
              <Button size="lg" variant="hero">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="lg" className="border-2">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
    </section>
  );
};