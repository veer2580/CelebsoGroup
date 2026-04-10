export const InfiniteNews = () => {
  const channels = [
    { name: "Forbs", logo: "/News/forbs.jpeg" },
    { name: "AAj Tak", logo: "/News/aajtak.jpeg" },
    { name: "News18", logo: "/News/news18.jpeg" },
    { name: "EnterpenuerIndia", logo: "/News/ent.jpeg" },
    { name: "Zoom", logo: "/News/zoom.jpeg" },
    { name: "StartupNews", logo: "/News/sp.jpeg" },
    { name: "YourStory", logo: "/News/ys.jpeg" },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="relative overflow-hidden">
        
        {/* Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Infinite Scroll */}
        <div className="flex w-max animate-marquee gap-16">
          {[...channels, ...channels].map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px]"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

