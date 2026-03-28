import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/event.jpeg";
import { Calendar } from "lucide-react";

export default function Events() {
  const pastEvents = [
    {
      name: "Fashion Runway Event",
      category: "Fashion",
      date: "February 2024",
      image: "/images/events/fashion.jfif",
    },
    {
      name: "Founder Networking Summit",
      category: "Networking",
      date: "January 2024",
      image: "/images/events/founder_connect.jpeg",
    },
    {
      name: "Tech Innovation Hackathon",
      category: "Technology",
      date: "December 2023",
      image: "/images/events/tech.jfif",
    },
    {
      name: "Startup Pitch Panel",
      category: "Startups",
      date: "November 2023",
      image: "/images/events/startup.jpeg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="CelebsoX Events"
        subtitle="Runway, luxury experiences, and influence-driven gatherings"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Upcoming Events
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8 text-center mb-16">
            <p className="text-slate-600 text-lg">
              Check back soon for our upcoming event calendar. Major events
              across fashion, technology, and startup ecosystems coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, idx) => (
              <div
                key={event.name}
                className="group animate-fade-in bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/15" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-secondary text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12">
            Our Event Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Fashion Runway",
                description: "Premium fashion events showcasing top designers",
              },
              {
                title: "Founder Networking",
                description:
                  "Exclusive networking events for entrepreneurs and investors",
              },
              {
                title: "Hackathons",
                description: "Innovation challenges and coding competitions",
              },
              {
                title: "Startup Panels",
                description: "Industry insights and founder discussions",
              },
            ].map((category, idx) => (
              <div
                key={category.title}
                className="group animate-fade-in p-8 border border-slate-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-200 mb-8 text-lg">
            Subscribe to our newsletter to get notified about upcoming events
          </p>

          <form className="flex gap-4 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 border border-white/20 focus:border-accent outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}