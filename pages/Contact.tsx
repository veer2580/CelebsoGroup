import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/contact.png";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@celebso.com",
      href: "mailto:info@celebso.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 97846 26443",
      href: "tel:+919784626443",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "24-48 hours",
      href: "#",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "investment", label: "Investment Inquiry" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "media", label: "Media Inquiry" },
    { value: "other", label: "Other" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Let’s build something powerful together"
        image={heroImage}
        heightClassName="min-h-screen"
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="animate-fade-in p-6 border border-slate-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">
                    {info.label}
                  </h3>
                  <a
                    href={info.href}
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+91 (123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">
                Why Connect With Us?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Fast Response",
                    description:
                      "We typically respond to inquiries within 24-48 hours",
                  },
                  {
                    title: "Expert Team",
                    description:
                      "Connect with the right person for your specific inquiry",
                  },
                  {
                    title: "Multiple Options",
                    description:
                      "Whether you're interested in investing, partnering, or media coverage",
                  },
                  {
                    title: "Collaborative Approach",
                    description:
                      "We believe in building long-term relationships with our partners",
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                <h4 className="font-semibold text-secondary mb-3">
                  Email directly:
                </h4>
                <a
                  href="mailto:info@celebso.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@celebso.com
                </a>
                <p className="text-sm text-slate-600 mt-3">
                  For urgent matters, feel free to reach out directly to our
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "What's the best way to reach you?",
                answer:
                  "You can reach us through this contact form, email at info@celebso.com, or by filling out the specific inquiry form for your needs.",
              },
              {
                question: "How long does it take to get a response?",
                answer:
                  "We typically respond to all inquiries within 24-48 business hours. Urgent matters may receive faster responses.",
              },
              {
                question: "Can I schedule a meeting?",
                answer:
                  "Absolutely! After your initial inquiry, our team will reach out to schedule a suitable time for a discussion.",
              },
              {
                question: "Do you accept unsolicited pitches?",
                answer:
                  "Yes, we're always open to new ideas and partnerships. Please submit your proposal through our partnership inquiry form.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-primary transition-all duration-300"
              >
                <summary className="font-semibold text-secondary cursor-pointer group-open:text-primary transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
