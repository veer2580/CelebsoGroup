import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero/home.jpeg";
import { Instagram, Linkedin, Mail } from "lucide-react";
import {
  Cpu,
  Network,
  Sparkles,
  Palette,
  Building2,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ventures = [
    {
      name: "Celebso (Social Network) ",
      description:
        "A next-generation social platform blending the power of professional networking with the reach and engagement of modern content platforms. ",
    },
    {
      name: "TechCelebso (Software Company)",
      description:
        "  Our technology arm focused on building scalable software, digital products, and innovativesolutions for startups and businesses. ",
    },
    {
      name: "Celebso Startup School",
      description:
        "  An educational platform designed to guide aspiring founders with practical knowledge, mentorship, and real-world startup insights.",
    },
    {
      name: "Celebso Production",
      description:
        "  A media and content division focused on high-quality digital content, brand storytelling, and creator-driven production. ",
    },
    {
      name: "Celebso Startup Valley",
      description: "  A curated space for founders to connect, collaborate, pitch, and access growth opportunities within a strong startup community. ",
    },
    {
      name: "Celebso Bussiness School",
      description: "Celebso Business School empowers future leaders with practical business education, mentorship, and startup-ready skills.",
    },
    {
      name: "PersonaSeek.ai",
      description: "Personaseek AI transforms networking into precision — leveraging artificial intelligence to align skills, ambition, and opportunity within a single smart ecosystem.",
    },
    {
      name: "Space Rentiya",
      description: "Space Rentiya is a premium real estate platform that offers innovative property solutions and smart investment opportunities.",
    },
    {
      name: "Numerixx",
      description: "Numerixx delivers data-driven insights, analytics, and financial intelligence to help businesses scale with clarity and confidence.",
    },
  ];

  const industries = [
    { icon: Cpu, label: "Technology & AI" },
    { icon: Network, label: "Social Networking" },
    { icon: Sparkles, label: "Fashion & Luxury" },
    { icon: Palette, label: "Branding & Marketing" },
    { icon: Building2, label: "Real Estate" },
    { icon: Rocket, label: "Startup Ecosystem" },
  ];

  const news = [
    {
      title: "CelebsoX Announces Delhi Fashion Runway",
      date: "March 15, 2024",
    },
    {
      title: "Celebso Group Expands Into AI Ecosystem",
      date: "March 10, 2024",
    },
    {
      title: "Celebso Launches Founder Growth Platform",
      date: "March 5, 2024",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          background: `linear-gradient(135deg, #1a0a0f 0%, #2d1319 50%, #1a0a0f 100%)`,
        }}
      >
        {/* Background photo */}
        <img
          src={heroImage}
          alt="Celebso Group"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
            style={{
              transform: `translateY(${scrollY * -0.3}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Building Influence.
            <br />
            Creating Icons.
            <br />
            Scaling Vision.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Celebso Group is a premium innovation company operating across
            technology, social networking, fashion, AI, branding, and real
            estate ecosystems.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/ventures"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Ventures
            </Link>
            <Link
              to="/partnerships"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative z-10 section-padding bg-white">
        <div className="container-max animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                About Celebso Group
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Celebso Group is a next-generation innovation ecosystem designed for ambitious founders, 
creators, and industry leaders. 
At the convergence of technology, capital, and curated networks, Celebso creates scalable 
digital products, backs high-potential startups, and builds exclusive platforms where visionary 
ideas meet strategic capital. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We operate at the intersection of influence, technology, and
                opportunity.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about.jpeg"
                alt="About Celebso Group"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission Section */}
      <section className="relative z-10 section-padding bg-white">
        <div className="container-max animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white max-h-[600px]">
              <img
                src="/images/vision.jpeg"
                alt="Celebso Vision"
                className="w-full h-full object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To create a global powerhouse ecosystem originating from India — integrating social 
networking, technology, AI, startups, and the entertainment industry — where ambition 
transforms into influence, and ideas scale into impactful businesses. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               To bridge the gap between ideas, execution, and visibility by combining technology, AI, media, 
and strategic networks — helping startups scale faster, creators build powerful brands, and 
investors discover high-potential opportunities.
              </p>
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300"
              >
                Explore Partnerships <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Our Ventures
            </h2>
            <p className="text-lg text-slate-600">
              Diverse innovations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, idx) => (
              <div
                key={venture.name}
                className="group animate-fade-in p-8 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* ✅ Removed the gradient/icon square here */}
                <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {venture.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {venture.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Industries We Operate In
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.label}
                  className="group animate-fade-in flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/10 transition-all duration-300"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <Icon className="w-12 h-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm md:text-base font-medium text-slate-700">
                    {industry.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* LEFT IMAGE */}
            <div className="relative h-97 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/founder.jpeg"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* RIGHT TEXT */}
            <div>
              <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-6">
             " Celebso is not a company. It’s a movement shaping the future of startups, creators, and the 
entertainment industry. "   
              </blockquote>

              <p className="text-lg font-semibold text-accent">
                — Veer Singh, Founder & Vision Architect
              </p>

              <p className="text-slate-300 mt-4">
                Visionary leader driving innovation across multiple sectors
              </p>
              <div className="flex gap-4 mt-8 ml-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ent.veer_offical?igsh=OTh1Y2JxNHNsbGM2"
                  target="_blank"
                  className="p-3 bg-white/10 rounded-lg hover:bg-accent transition-all"
                >
                  <Instagram
                    className="text-white hover:text-black"
                    size={20}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/er-veer-singh-549380245/"
                  target="_blank"
                  className="p-3 bg-white/10 rounded-lg hover:bg-accent transition-all"
                >
                  <Linkedin className="text-white hover:text-black" size={20} />
                </a>

                {/* Gmail */}
                <a
                  href="mailto:info@celebso.com"
                  className="p-3 bg-white/10 rounded-lg hover:bg-accent transition-all"
                >
                  <Mail className="text-white hover:text-black" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Media Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-center justify-between mb-16 animate-fade-in flex-col md:flex-row gap-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              Latest News
            </h2>
            <Link
              to="/press"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              View All Press <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, idx) => (
              <article
                key={article.title}
                className="group animate-fade-in border-b-2 border-primary pb-6 hover:border-accent transition-colors"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <p className="text-sm text-slate-500 mb-3">{article.date}</p>
                <h3 className="text-xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <Link
                  to="/press"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #1a0a0f 0%, #2d1319 50%, #1a0a0f 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container-max relative z-10 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Collaborate With Celebso Group
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-4">
            Invest | Partner | Build | Scale
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
