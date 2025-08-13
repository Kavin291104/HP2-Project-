import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Star, CheckCircle } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur border-0 shadow-card">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              {/* Badge */}
              <Badge variant="outline" className="mb-6">
                <Gift className="w-4 h-4 mr-2" />
                Exclusive Offers
              </Badge>

              {/* Header */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get 20% Off Your First Order
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our book-loving community and receive exclusive discounts, 
                early access to new releases, and personalized recommendations.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center md:justify-start">
                  <Star className="w-5 h-5 text-primary mr-2" fill="currentColor" />
                  <span className="text-sm text-muted-foreground">Exclusive discounts</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Early access to new books</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Gift className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Personalized recommendations</span>
                </div>
              </div>

              {/* Newsletter Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="btn-hero text-primary-foreground whitespace-nowrap"
                    >
                      Get 20% Off
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              ) : (
                <div className="animate-scale-in max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Welcome to Books!
                  </h3>
                  <p className="text-muted-foreground">
                    Check your email for your 20% discount code and reading recommendations.
                  </p>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="font-bold text-foreground">50k+</div>
                  <div className="text-xs text-muted-foreground">Happy Readers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">4.8★</div>
                  <div className="text-xs text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">10k+</div>
                  <div className="text-xs text-muted-foreground">Books Available</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};