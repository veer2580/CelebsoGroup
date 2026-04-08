import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  /** Optional: make hero shorter on internal pages */
  heightClassName?: string;
};

export default function Hero({
  title,
  subtitle,
  image,
  heightClassName = "min-h-screen",
}: HeroProps) {
  return (
    <section
      className={`relative ${heightClassName} flex items-center justify-center overflow-hidden pt-16 text-white`}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{title}</h1>
        {subtitle ? (
          <p className="text-xl text-slate-200 mb-8">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
