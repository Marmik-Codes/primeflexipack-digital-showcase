import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProducts from '@/assets/hero-products.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium <span className="text-primary">Poly Pouches</span> for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Manufacture high-quality packaging solutions ranging from 5g to 5kg. 
              Durable, reliable, and affordable poly pouches for FMCG, food & beverages, 
              retail, agriculture, and industrial sectors.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Wide Range: 5g to 5kg',
                'Premium Quality Materials',
                'Custom Sizing Available',
                'Bulk Order Discounts'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary shadow-elegant">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                View Products
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="fade-in">
            <div className="relative">
              <img
                src={heroProducts}
                alt="Premium poly pouches and packaging solutions"
                className="w-full h-auto rounded-2xl shadow-card hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;