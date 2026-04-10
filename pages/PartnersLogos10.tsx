export const PartnersLogos10 = () => {
  const partners = [
    { name: "Allevents", logo: "/logos/allevents.png" },
    { name: "Markifid", logo: "/logos/markifid.png" },
    { name: "iStart", logo: "/logos/istart.png" },
    { name: "Ooglesoft", logo: "/logos/ooglesoft.png" },
    { name: "Get Gabs", logo: "/logos/getgabs.png" },
    { name: "Rajnova", logo: "/logos/rajnova.png" },
    { name: "HDFC Bank", logo: "/logos/idfc.png" },
  ];

  return (
    <section className="bg-gray-50 py-16 mt-5 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold text-gray-900">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 mt-2">
          Collaborating with industry leaders
        </p>
      </div>

      {/* Scrolling Row */}
      <div className="relative overflow-hidden">
        {/* Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />

        {/* Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Moving Logos */}
        <div className="flex w-max animate-marquee gap-16">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[140px]"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

