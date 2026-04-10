import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/press.png";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InfiniteNews } from "./InfiniteNews";

export default function Press() {
  const pressReleases = [
    {
      title: "CelebsoX Announces Delhi Fashion Runway",
      date: "March 15, 2024",
      category: "Events",
      excerpt:
        "Celebso Group announces a landmark fashion runway event in Delhi, bringing together top designers, founders, and investors.",
    },
    {
      title: "Celebso Group Expands Into AI Ecosystem",
      date: "March 10, 2024",
      category: "Technology",
      excerpt:
        "With the expansion of Personaseek.ai, Celebso Group strengthens its position in the artificial intelligence space.",
    },
    {
      title: "Celebso Launches Founder Growth Platform",
      date: "March 5, 2024",
      category: "Startups",
      excerpt:
        "New platform aims to democratize access to mentorship, funding, and networking for emerging entrepreneurs.",
    },
  ];

  const mediaKits = [
    {
      name: "Company Profile",
      description: "Complete overview of Celebso Group's operations and vision",
    },
    {
      name: "Founder Bio",
      description: "Detailed biography and achievements of Veer Singh",
    },
    {
      name: "Logo Assets",
      description: "High-resolution logos and brand assets",
    },
    {
      name: "Brand Guidelines",
      description: "Complete brand guidelines and design standards",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Press & Media"
        subtitle="Latest announcements, mentions, and updates"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Press Releases */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Latest Press Releases
          </h2>

          <div className="space-y-8">
            {pressReleases.map((release, idx) => (
              <div
                key={release.title}
                className="group animate-fade-in border-b border-slate-200 pb-8 hover:pb-8 transition-all"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4 flex-col md:flex-row gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {release.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-sm text-slate-500">{release.date}</p>
                  </div>
                  <ArrowRight className="text-primary mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 flex-shrink-0" />
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {release.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Downloads */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Media Kit Downloads
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaKits.map((kit, idx) => (
              <div
                key={kit.name}
                className="group animate-fade-in p-8 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-serif font-bold text-secondary">
                    {kit.name}
                  </h3>
                  <Download className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                </div>
                <p className="text-slate-600 mb-6">{kit.description}</p>
                <button className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1 group-hover:gap-2">
                  Download <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Coming Soon */}
      <section className="section-padding bg-white border-t border-slate-200">
        <div className="container-max max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
            Featured Media Coverage
          </h2>
          <p className="text-slate-600 text-lg">
            Check back soon for our latest features in leading publications
            including Forbes, The Economic Times, Business Today, and Times of
            India.
          </p>
        </div>
      </section>
      <InfiniteNews/>

      {/* CTA */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Have a Press Inquiry?
          </h2>
          <p className="text-slate-200 mb-8">
            Get in touch with our media team for interviews, quotes, and
            partnerships.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
