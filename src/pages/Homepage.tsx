import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Prime Flexi Pack. All rights reserved. | Premium Packaging Solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;