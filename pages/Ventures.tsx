import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/venture.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Ventures() {
  const ventures = [
    {
      name: "Celebso-Social",
      link: "/ventures/celebso-social",
      description:
        "Celebso Social is a next-generation professional networking platform designed to connect founders, creators, investors, and professionals through meaningful digital interactions. We blend social engagement with credibility, helping people build authentic connections, showcase talent, and unlock opportunities within a powerful business ecosystem.",
      tags: ["Social Network", "Professional"],
    },
    {
      name: "TechCelebso",
      link: "/ventures/techcelebso",
      description:
        "TechCelebso is Celebso Group’s technology innovation arm — building AI-powered platforms, scalable digital products, and smart ecosystems that empower founders, creators, and enterprises.",
      tags: ["FutureTech", "FashionTech", "AI"],
      subtext: "Powered by Celebso Production",
    },
    {
      name: "Celebso Productions",
      link: "https://celebso-production.netlify.app/",
      description:
        "Celebso Productions is the creative storytelling arm of Celebso Group — crafting cinematic brand films, fashion media, and digital content.",
      tags: ["FashionMedia", "BrandFilms", "DigitalMedia"],
    },
    {
      name: "Celebso Ai Labs",
      link: "/ventures/ai-labs",
      description:
        "Celebso AI Labs builds intelligent platforms, automation systems, and AI-powered products that help founders scale smarter.",
      tags: ["FutureTech", "Automation", "FounderTech"],
    },
    {
      name: "Celebso Startup Valley",
      link: "/ventures/startup-valley",
      description:
        "Founder-first innovation ecosystem supporting early-stage startups with mentorship, technology, community, and investor access.",
      tags: ["Startups", "Ecosystem"],
    },
    {
      name: "Celebso Business School",
      link: "/ventures/business-school",
      description:
        "Next-generation learning platform equipping founders and professionals with real-world business skills.",
      tags: ["Education", "Leadership"],
    },
    {
      name: "PersonaSeek.ai",
      link: "/ventures/personaseek",
      description:
        "AI-powered people and startup discovery platform connecting talent, founders, and opportunities.",
      tags: ["AITalent", "TechForStartups"],
    },
    {
      name: "Spacerentia",
      link: "/ventures/spacerentia",
      description:
        "Smart real estate and workspace solutions platform simplifying property discovery and leasing.",
      tags: ["RealEstate", "Workspace"],
    },
    {
      name: "Numerixx",
      link: "/ventures/numerixx",
      description:
        "Data intelligence and financial analytics platform turning complex numbers into clear business insights.",
      tags: ["DataIntelligence", "FinancialAnalytics"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Our Ventures"
        subtitle="Platforms and brands shaping the future of influence and innovation"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Ventures Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ventures.map((venture, idx) => (
              <Link
                key={venture.name}
                to={venture.link}
                className="block"
              >
                <div
                  className="group animate-fade-in border-l-4 border-primary p-8 hover:border-accent hover:bg-slate-50 transition-all duration-300 rounded-r-lg cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-4xl font-serif font-bold text-secondary group-hover:text-primary transition-colors">
                      {venture.name}
                    </h3>
                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" size={24} />
                  </div>

                  {venture.subtext && (
                    <p className="text-sm text-slate-500 mb-4 italic">
                      {venture.subtext}
                    </p>
                  )}

                  <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                    {venture.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {venture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-6">
              Interested in learning more about any of our ventures?
            </p>

            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Explore Partnership Opportunities <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}