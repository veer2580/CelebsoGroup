import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/about.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About Celebso Group"
        subtitle="Building ecosystems where influence meets opportunity"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-8">
              Who We Are
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Celebso Group is a diversified innovation company focused on
              building scalable brands across multiple industries. Our mission
              is to create powerful ecosystems that connect ambition with
              opportunity.
            </p>

            <h3 className="text-3xl font-serif font-bold text-secondary mb-4 mt-12">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              To build India's most influential multi-sector innovation group.
            </p>

            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 mt-12">
              Our Mission
            </h3>
            <ul className="space-y-4 text-lg text-slate-600">
              {[
                "Empower founders",
                "Elevate brands",
                "Build global influence platforms",
                "Create long-term scalable value",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 mt-12">
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Innovation",
                "Influence",
                "Integrity",
                "Impact",
                "Scalability",
              ].map((value) => (
                <div
                  key={value}
                  className="p-6 bg-primary/10 rounded-lg border border-primary/20"
                >
                  <p className="text-lg font-semibold text-secondary">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
