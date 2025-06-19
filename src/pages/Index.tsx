import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: "Zap",
      title: "AI Integration",
      description:
        "Seamless integration of AI into your existing systems and workflows",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: "Bot",
      title: "Intelligent Automation",
      description:
        "Smart automation solutions that learn and adapt to your business",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Brain",
      title: "Custom AI Solutions",
      description:
        "Bespoke AI systems tailored to solve your unique challenges",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const stats = [
    { number: "150+", label: "AI Solutions Deployed" },
    { number: "97%", label: "Client Success Rate" },
    { number: "45%", label: "Average Efficiency Gain" },
    { number: "24/7", label: "AI Support Systems" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600">
                AI Solutions Active
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Intelligence
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Amplified
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              We embed artificial intelligence into software, websites, and
              digital products— transforming how businesses operate and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg rounded-full h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your AI Journey
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-slate-700 hover:text-slate-900 px-8 py-4 text-lg rounded-full h-auto"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  View Solutions
                  <Icon name="ExternalLink" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Build
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              AI-powered solutions that integrate seamlessly into your existing
              ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        name={service.icon}
                        size={28}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Built for the
                <br />
                <span className="text-violet-600">Future</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our AI solutions are designed to evolve with your business,
                providing intelligent automation that gets smarter over time.
              </p>
              <div className="space-y-4">
                {[
                  "Machine Learning Integration",
                  "Real-time Analytics",
                  "Scalable Architecture",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-3 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full"></div>
                  <div className="h-3 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full"></div>
                  <div className="h-3 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                  <div className="h-8 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your business operations and
            drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full h-auto shadow-xl"
              asChild
            >
              <Link to="/contacts">Get Started Today</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg rounded-full h-auto"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
