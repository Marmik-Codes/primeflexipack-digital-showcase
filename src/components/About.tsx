import { Award, Users, Factory, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Factory, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '99%', label: 'Quality Rate' },
    { icon: Truck, number: '24/7', label: 'Support' }
  ];

  const features = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage of production to ensure premium packaging solutions.'
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive pricing without compromising on quality. Bulk order discounts available for large quantities.'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored packaging solutions designed to meet your specific product requirements and brand needs.'
    },
    {
      title: 'Fast Delivery',
      description: 'Efficient production and logistics to ensure timely delivery of your packaging orders.'
    }
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Prime Flexi Pack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium packaging solutions. We specialize in manufacturing 
            high-quality poly pouches that meet the diverse needs of various industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover-scale bg-card border-border">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full gradient-primary">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Delivering Excellence in Packaging Solutions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located in Ahmedabad, Prime Flexi Pack has been serving businesses across multiple 
              industries with premium poly pouch solutions. Our manufacturing facility is equipped 
              with state-of-the-art machinery and follows strict quality standards.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We understand that packaging is crucial for product protection, branding, and customer 
              satisfaction. That's why we focus on delivering durable, reliable, and cost-effective 
              solutions that meet your specific requirements.
            </p>
            
            {/* Address */}
            <div className="bg-card p-6 rounded-lg border border-border shadow-card">
              <h4 className="font-semibold text-card-foreground mb-2">Our Location</h4>
              <p className="text-muted-foreground">
                55, Jay Industrial Park, Nr. SP Ring Road,<br />
                Nana Chiloda, Ahmedabad - 382330
              </p>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;