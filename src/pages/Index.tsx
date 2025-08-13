import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedBooks } from "@/components/home/featured-books";
import { CategoriesSection } from "@/components/home/categories-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedBooks />
        <CategoriesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
