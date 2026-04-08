import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/leadership.jpeg";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Leadership() {
  const team = [
    {
      name: "Veer Singh",
      title: "Founder & Vision Architect",
      description:
        "Visionary leader driving innovation across technology, fashion, and real estate ecosystems. With a track record of building successful ventures.",
      social: ["linkedin", "twitter"],
    },
  ];

  const openPositions = [
    {
      title: "Tech Lead",
      department: "Engineering",
      description: "Lead our technology initiatives",
    },
    {
      title: "Marketing Head",
      department: "Marketing",
      description: "Drive brand strategy across ventures",
    },
    {
      title: "Operations Head",
      department: "Operations",
      description: "Manage cross-venture operations",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Leadership"
        subtitle="Visionaries building the Celebso ecosystem"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-16">
            Founder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-3xl">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/images/founder2.jpeg"
                alt="Veer Singh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div>
              {team.map((member) => (
                <div key={member.name}>
                  <h3 className="text-3xl font-serif font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {member.title}
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/er-veer-singh-549380245/"
                      className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      title="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="mailto:info@celebso.com"
                      className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      title="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Core Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openPositions.map((position, idx) => (
              <div
                key={position.title}
                className="group animate-fade-in p-8 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <p className="text-sm text-slate-500 font-semibold mb-2">
                  {position.department}
                </p>
                <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <p className="text-slate-600">{position.description}</p>
                <p className="text-slate-400 text-sm mt-4 italic">
                  Coming soon
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 text-center">
              We're looking for talented individuals to join our leadership
              team.
              <br />
              <a
                href="mailto:admin@cafenoir.com"
                className="text-primary font-semibold hover:underline"
              >
                Get in touch if you're interested →
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
