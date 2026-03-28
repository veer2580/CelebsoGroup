import { useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

type MediaItem =
  | { id: string; type: "image"; src: string }
  | { id: string; type: "video"; src: string; poster?: string };

export default function Gallery() {
  // ✅ Replace these with your own files/links
  // If you use local files, put them in /public/gallery/...
  const media = useMemo<MediaItem[]>(
    () => [
      { id: "i1", type: "image", src: "/gallery/1.jpeg" },
      { id: "i2", type: "image", src: "/gallery/2.jpeg" },
      { id: "v1", type: "video", src: "/gallery/1.mp4", poster: "/gallery/v1.jpg" },
      { id: "i3", type: "image", src: "/gallery/3.jpeg" },
      { id: "i4", type: "image", src: "/gallery/4.jpeg" },
      { id: "v2", type: "video", src: "/gallery/2.mp4", poster: "/gallery/v2.jpg" },
      { id: "i5", type: "image", src: "/gallery/5.jpeg" },
      { id: "i6", type: "image", src: "/gallery/6.jpeg" },
      { id: "i7", type: "image", src: "/gallery/7.jpeg" },
      { id: "v3", type: "video", src: "/gallery/3.mp4", poster: "/gallery/v3.jpg" },
      { id: "i8", type: "image", src: "/gallery/8.jpeg" },
      { id: "i9", type: "image", src: "/gallery/9.jpeg" },
      { id: "i10", type: "image", src: "/gallery/10.jpeg" },
      { id: "i11", type: "image", src: "/gallery/11.jpeg" },
      { id: "i12", type: "image", src: "/gallery/12.jpeg" },
      { id: "i13", type: "image", src: "/gallery/13.jpeg" },
      { id: "i14", type: "image", src: "/gallery/14.jpeg" },
      { id: "i15", type: "image", src: "/gallery/15.jpeg" },
      { id: "i16", type: "image", src: "/gallery/16.jpeg" },
      { id: "i17", type: "image", src: "/gallery/17.jpeg" },
      { id: "i18", type: "image", src: "/gallery/18.jpeg" },
      { id: "i19", type: "image", src: "/gallery/19.jpeg" },
      { id: "i20", type: "image", src: "/gallery/20.jpeg" },
      { id: "i21", type: "image", src: "/gallery/21.jpeg" },
      { id: "i22", type: "image", src: "/gallery/22.jpeg" },
      { id: "i23", type: "image", src: "/gallery/23.jpeg" },
      { id: "i24", type: "image", src: "/gallery/24.jpeg" },
    ],
    []
  );

  return (
    <Layout>
    <div className="min-h-screen bg-white">
      {/* ✅ Banner / Hero */}
      <section className="relative h-[58vh] min-h-[940px] w-full overflow-hidden">
        {/* Background image (change to your banner image) */}
        <img
          src="/gallery/banner.png"
          alt="Gallery Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay like your screenshot */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Title */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl md:text-5xl font-semibold tracking-wide"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* ✅ Simple Image + Video Grid (no text) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {media.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Same aspect ratio for all tiles */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    src={item.src}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    </Layout>
  );
  
}