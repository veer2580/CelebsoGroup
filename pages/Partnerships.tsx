import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/partnership1.jpeg";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Briefcase, Megaphone } from "lucide-react";

export default function Partnerships() {
  const partnershipCategories = [
    {
      icon: TrendingUp,
      title: "Investors",
      description:
        "Strategic and financial investors looking for high-growth opportunities across multiple sectors.",
      cta: "Investment Inquiry",
    },
    {
      icon: Users,
      title: "Venture Partners",
      description:
        "Strategic partners interested in co-creating ventures and long-term collaborations.",
      cta: "Venture Partnership",
    },
    {
      icon: Briefcase,
      title: "Sponsors",
      description:
        "Brands and organizations interested in sponsoring our events and initiatives.",
      cta: "Sponsorship Inquiry",
    },
    {
      icon: Megaphone,
      title: "Media Partners",
      description:
        "Media organizations interested in covering our ventures and initiatives.",
      cta: "Media Partnership",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Partnerships"
        subtitle="Collaborate to build icons and scale vision"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Partnership Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partnershipCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group animate-fade-in p-8 border-2 border-slate-200 rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    {category.cta} <ArrowRight size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">
            Why Partner With Celebso Group?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "05",
                title: "Ventures",
                description:
                  "Access to a diverse portfolio across technology, fashion, real estate, and more",
              },
              {
                number: "1M+",
                title: "Reach",
                description:
                  "Combined user base and audience across all platforms and initiatives",
              },
              {
                number: "100%",
                title: "Commitment",
                description: "Dedicated team ensuring partnership success and growth",
              },
            ].map((stat, idx) => (
              <div
                key={stat.title}
                className="animate-fade-in text-center p-8"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <p className="text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {stat.title}
                </h3>
                <p className="text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">
            Partnership Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Inquiry",
                description: "Submit your partnership inquiry through our form",
              },
              {
                step: "02",
                title: "Discussion",
                description: "Connect with our partnerships team for initial consultation",
              },
              {
                step: "03",
                title: "Evaluation",
                description: "Detailed review of mutual fit and objectives",
              },
              {
                step: "04",
                title: "Agreement",
                description:
                  "Finalize terms and begin your partnership journey with Celebso",
              },
            ].map((item, idx) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-semibold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-serif font-bold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Partner?</h2>
          <p className="text-slate-200 mb-8 text-lg">
            Let's discuss how we can create value together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Start the Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
