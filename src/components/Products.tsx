import { Package, Layers, ShoppingBag, FileText, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import productVariety from '@/assets/product-variety.jpg';

const Products = () => {
  const products = [
    {
      icon: Package,
      title: 'Standy Pouches',
      description: 'Self-standing pouches perfect for retail display. Available in various sizes with excellent barrier properties.',
      features: ['Self-standing design', 'Excellent shelf appeal', 'Multiple closure options']
    },
    {
      icon: ShoppingBag,
      title: 'D-Cut Bags',
      description: 'Convenient carry bags with D-shaped handles. Ideal for retail and shopping applications.',
      features: ['Comfortable handles', 'Strong construction', 'Custom printing available']
    },
    {
      icon: FileText,
      title: '3-Side Sealing Pouches',
      description: 'Traditional flat pouches with three sealed sides. Perfect for lightweight products.',
      features: ['Cost-effective solution', 'Quick filling process', 'Wide size range']
    },
    {
      icon: Layers,
      title: 'Center-Seal Pouches',
      description: 'Back-sealed pouches ideal for powder and granular products with excellent seal integrity.',
      features: ['Superior seal strength', 'Powder-friendly design', 'Moisture barrier']
    },
    {
      icon: Zap,
      title: 'Zipper Bags',
      description: 'Resealable pouches with zip-lock closure for freshness and convenience.',
      features: ['Resealable closure', 'Freshness protection', 'Easy open/close']
    },
    {
      icon: Shield,
      title: 'Custom Solutions',
      description: 'Tailored packaging solutions designed specifically for your product requirements.',
      features: ['Bespoke design', 'Custom materials', 'Brand integration']
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive packaging solutions from 5g to 5kg. Each product is manufactured 
            with precision, quality materials, and attention to detail.
          </p>
        </div>

        {/* Product Showcase Image */}
        <div className="mb-16">
          <img
            src={productVariety}
            alt="Various types of poly pouches and packaging solutions"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-card hover-scale"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="shadow-card hover-scale bg-card border-border transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <product.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full hover-scale">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="gradient-primary shadow-elegant">
            Request Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;