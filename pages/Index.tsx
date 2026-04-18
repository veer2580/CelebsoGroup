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
  Film,
  Code2,
  Users,
  BarChart3,
  BookOpen,
  Home,
  GraduationCap,
  Camera,
} from "lucide-react";
import { PartnersLogos10 } from "./PartnersLogos10";
import { InfiniteNews } from "./InfiniteNews";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const industries = [
    { icon: Cpu, label: "Technology & AI" },
    { icon: Network, label: "Social Networking" },
    { icon: Sparkles, label: "Fashion & Luxury" },
    { icon: Palette, label: "Branding & Marketing" },
    { icon: Building2, label: "Real Estate" },
    { icon: Rocket, label: "Startup Ecosystem" },
  ];

  const ventures = [
    {
      name: "TechCelebso",
      description:
        "– A high-tech software company building SaaS, AI, and custom digital solutions for startups and businesses.",
      action: "See platform",
      link: "/ventures#techcelebso",
    },
    {
      name: "CelebsoX",
      description:
        " A digital innovation platform focused on next-generation social networking and creator economy tools.",
      action: "See platform",
      link: "/ventures#techcelebso",
    },
    {
      name: "Celebso Ventures",
      description:
        "  A startup investment and growth support arm helping early-stage companies scale and raise funding. ",
      action: "See platform",
      link: "/ventures#techcelebso",
    },
      {
      name: " Celebso Production",
      description:
        " A media and production house creating content, branding films, and digital storytelling for modern brands.",
      action: "Explore studio",
      link: "/ventures#production",
    },
    {
      name: "PersonaSeek AI",
      description:
        " An AI-powered intelligence platform for smart profile discovery, networking, and opportunity matching. ",
      action: "Discover AI",
      link: "/ventures#persona-seek-ai",
    },
     

    {
      name: "Startup Valley",
      description:
        " A physical startup ecosystem where founders connect, collaborate, and build real ventures together.",
      action: "View network",
      link: "/ventures#startup-valley",
    },
  
  
    {
      name: "Business School",
      description:
        "Practical business education shaped around real growth, systems, and leadership.",
      action: "Learn more",
      link: "/ventures#business-school",
    },
    {
      name: "Space Rentiya",
      description:
        "Flexible real estate opportunities connecting people with smart, modern spaces.",
      action: "View spaces",
      link: "/ventures#space-rentiya",
    },
    {
      name: "Numerixx",
      description:
        "Data, finance, and operational intelligence for the next generation of ventures.",
      action: "Read overview",
      link: "/ventures#numerixx",
    },
  ];

  type ConnectedVenture = {
    name: string;
    initials: string;
    icon: typeof Cpu;
    color: string;
    position: {
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
      transform?: string;
    };
    logoSrc?: string;
  };

  const connectedVentures: ConnectedVenture[] = [
   
  
    {
      name: "Celebso Ventures",
      initials: "CV",
      icon: Rocket,
      color: "bg-[#FFE5E5]",
      position: { left: "8%", top: "10%" },
    },
    {
      name: "TechCelebso",
      initials: "TC",
      icon: Code2,
      color: "bg-[#FFF0F0]",
      position: { left: "50%", top: "8%", transform: "translateX(-50%)" },
    },
    {
      name: "Production",
      initials: "PR",
      icon: Camera,
      color: "bg-[#F7F7FF]",
      position: { right: "8%", top: "10%" },
    },
    {
      name: "PersonaSeek AI",
      initials: "PS",
      icon: Cpu,
      color: "bg-[#EAF5FF]",
      position: { left: "8%", bottom: "10%" },
    },
    {
      name: "CelebsoX",
      initials: "CX",
      icon: Network,
      color: "bg-[#F5E6FF]",
      position: { left: "8%", top: "50%", transform: "translateY(-50%)" },
    },
    {
      name: "Numerixx",
      initials: "NX",
      icon: BarChart3,
      color: "bg-[#FFF4E5]",
      position: { right: "8%", top: "50%", transform: "translateY(-50%)" },
    },
    {
      name: "Startup Valley",
      initials: "SV",
      icon: Users,
      color: "bg-[#F0FFEF]",
      position: { right: "8%", bottom: "10%" },
    },
    {
      name: "Business School",
      initials: "BS",
      icon: BookOpen,
      color: "bg-[#FFF7F0]",
      position: { left: "50%", bottom: "8%", transform: "translateX(-50%)" },
    },
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
            estate ecosystems.  <h1 className="text-5xl">“Website under maintenance due to payment issue”

( “payment not received”</h1>
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
{/* our trusted partners */}
      <PartnersLogos10/>
      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="rounded-[2.5rem] bg-slate-50 border border-slate-200 p-10 shadow-sm animate-fade-in">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
                Industries
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                Where the Celebso ecosystem creates leverage
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Celebso is positioned to connect communities and capital across
                high-attention sectors with long-term demand and modern brand
                potential.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.label}
                    className="group animate-fade-in flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      animationDelay: `${idx * 80}ms`,
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-base font-semibold text-slate-900">
                      {industry.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Connected Ventures Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max animate-fade-in">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">
              Connected Ventures
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              A unified ecosystem designed around one brand center
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Celebso sits at the center of interconnected ventures, turning
              audience energy into products, learning, services, and high-value
              opportunities.
            </p>
          </div>

          <div className="space-y-8 md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {connectedVentures.map((venture) => {
                const Icon = venture.icon;
                return (
                  <div
                    key={venture.name}
                    className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center gap-4 animate-fade-in"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${venture.color}`}
                    >
                      {Icon ? (
                        <Icon className="h-7 w-7 text-slate-700" />
                      ) : (
                        <span className="text-sm font-semibold text-slate-700">
                          {venture.initials}
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-slate-900">
                      {venture.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden md:block mx-auto max-w-6xl h-[760px] rounded-[3rem] border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200/60 -translate-x-1/2" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200/60 -translate-y-1/2" />
            </div>

            <div className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border border-slate-200 animate-fade-in">
              <img
                src="/logo/logo1.png"
                alt="Celebso logo"
                className="h-full w-full object-contain"
              />
            </div>

            {connectedVentures.map((venture) => {
              const Icon = venture.icon;
              return (
                <div
                  key={venture.name}
                  className="absolute rounded-3xl bg-white p-5 shadow-sm border border-slate-200 w-56 text-center animate-fade-in"
                  style={venture.position}
                >
                  <div className="flex items-center justify-center gap-3">
                    {venture.logoSrc ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <img
                          src={venture.logoSrc}
                          alt={`${venture.name} logo`}
                          className="h-full w-full object-contain"
                          onError={(event) => {
                            const img = event.currentTarget;
                            if (!img.src.endsWith("/logo/logo.png")) {
                              img.src = "/logo/logo.png";
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${venture.color}`}
                      >
                        {Icon ? (
                          <Icon className="h-6 w-6 text-slate-700" />
                        ) : (
                          <span className="text-sm font-semibold text-slate-700">
                            {venture.initials}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-900">
                    {venture.name}
                  </p>
                </div>
              );
            })}
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
                To create a global powerhouse ecosystem originating from India —
                integrating social networking, technology, AI, startups, and the
                entertainment industry — where ambition transforms into
                influence, and ideas scale into impactful businesses.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To bridge the gap between ideas, execution, and visibility by
                combining technology, AI, media, and strategic networks —
                helping startups scale faster, creators build powerful brands,
                and investors discover high-potential opportunities.
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

      {/* Venture Portfolio Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max animate-fade-in">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Venture Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Eight focused ventures under one premium growth umbrella
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each brand extends the Celebso ecosystem into a specific market
              while compounding reach, trust, and commercial upside across the
              group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {ventures.map((venture, idx) => (
              <Link
                key={venture.name}
                to={venture.link}
                className="group block w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {venture.name}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8">
                  {venture.description}
                </p>
                <div className="inline-flex items-center gap-2 text-base font-semibold text-primary group-hover:text-primary-dark">
                  <span>{venture.action}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
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
                " Celebso is not a company. It’s a movement shaping the future
                of startups, creators, and the entertainment industry. "
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
      {/* {NewsLoop} */}
<InfiniteNews/>
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
