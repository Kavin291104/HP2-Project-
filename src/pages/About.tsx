import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Heart, Mail, Phone } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Book lover with 15+ years in publishing",
      icon: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Head of Curation",
      description: "Expert in finding the perfect book for every reader",
      icon: "👨‍🎓"
    },
    {
      name: "Emily Davis",
      role: "Customer Experience",
      description: "Ensuring every customer has an amazing experience",
      icon: "👩‍💻"
    }
  ];

  const stats = [
    { number: "50k+", label: "Happy Customers" },
    { number: "10k+", label: "Books Available" },
    { number: "4.8★", label: "Average Rating" },
    { number: "5", label: "Years Serving Readers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connecting Readers with Great Books
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Books, we believe that every person deserves access to stories that inspire, 
              educate, and entertain. Founded in 2019, we've grown from a small online bookstore 
              to a trusted destination for book lovers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To make reading accessible, affordable, and enjoyable for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center book-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Quality Selection</h3>
                  <p className="text-muted-foreground text-sm">
                    Carefully curated collection of the best books across all genres
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center book-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Personal Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Personalized recommendations and exceptional customer support
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center book-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Best Prices</h3>
                  <p className="text-muted-foreground text-sm">
                    Competitive pricing with frequent discounts and free shipping
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-muted-foreground">
              Our impact on the reading community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              The People Behind Books
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of book enthusiasts works tirelessly to bring you 
              the best reading experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center book-card animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{member.icon}</div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                We'd love to hear from you! Whether you need book recommendations 
                or have questions about our service, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-BOOKS-01
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}