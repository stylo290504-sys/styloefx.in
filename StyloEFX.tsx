import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
 // <-- paste this here
import { Instagram, Youtube, Music, Disc, Headphones } from "lucide-react";

// Feature Component
type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-3 p-4 bg-gray-900/40 rounded-2xl border border-gray-800">
    <div className="text-3xl text-purple-400">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-400 text-sm text-center">{desc}</p>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="py-8 bg-gradient-to-t from-black to-transparent border-t border-white/6">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          StyloEFX
        </span>
        <span className="text-sm text-gray-400">Cinematic Visuals & Audio</span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://www.youtube.com/@styloefx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-600 flex items-center gap-1 transition-colors duration-300"
        >
          <Youtube /> YouTube
        </a>
        <a
          href="https://www.instagram.com/styloefx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 flex items-center gap-1 transition-colors duration-300"
        >
          <Instagram /> Instagram
        </a>
      </div>
    </div>
    <div className="mt-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} StyloEFX. All rights reserved.
    </div>
  </footer>
);

const StyloEFX: React.FC = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
  };

  const songs = [
    { lyrics: "I'm just waking up at 10am\nI skip my breakfast...", title: "I'm just waking up" },
    { lyrics: "Magarasi Magarasanum\nOnnu sernthachu...", title: "Ketti Mellam" },
    { lyrics: "You Be The one\nJust raise like a sun...", title: "Raise Like a Sun" },
    { lyrics: "Just looking at you is enough...", title: "It's enough" },
    { lyrics: "En thanthai yaga unnai parpaenae...", title: "En Thanthaiyaga" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 border-b border-gray-800 sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-gray-900 to-black backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white flex items-center gap-2">
          StyloEFX
        </h1>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-300 mt-4 md:mt-0">
          {['Home', 'About', 'Portfolio'].map(section => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-white relative group"
              onClick={e => {
                e.preventDefault();
                const target = document.getElementById(section.toLowerCase());
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Music Animation */}
      <motion.div
        {...({} as HTMLMotionProps<"div">)}
        style={{ position: "absolute", left: 24, top: "50%", translateY: "-50%" }}
        animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Music size={56} />
      </motion.div>

      {/* Hero Text */}
      <motion.section
        {...({} as HTMLMotionProps<"section">)}
        className="text-center py-16 px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <motion.h2
          {...({} as HTMLMotionProps<"h2">)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Creative Visuals
        </motion.h2>
        <p className="mt-6 max-w-xl md:max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
          At StyloEFX, we craft cinematic edits, stylish visuals, and digital magic that define the future of media.
        </p>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        {...({} as HTMLMotionProps<"section">)}
        id="portfolio"
        className="px-4 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {songs.map((song, i) => (
          <motion.div
            {...({} as HTMLMotionProps<"div">)}
            key={i}
            variants={cardVariant}
            whileHover="hover"
            className="flex justify-center"
          >
            <div className="bg-gray-900/60 border-gray-800 rounded-2xl shadow-lg w-full max-w-sm p-4 md:p-6">
              <p className="text-gray-300 text-base md:text-lg whitespace-pre-line">{song.lyrics}</p>
              <p className="mt-2 font-semibold text-purple-400">Song Title: {song.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* About Section */}
      <motion.section
        {...({} as HTMLMotionProps<"section">)}
        id="about"
        className="px-4 md:px-10 py-16 md:py-20 text-center max-w-xl md:max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About StyloEFX</h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          StyloEFX is more than just a channel — it's a creative journey. With a passion for premium edits and artistic visuals, we bring cinematic experiences to life.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Feature icon={<Music />} title="Creative Vision" desc="Cinematic storytelling and bold visual language." />
          <Feature icon={<Disc />} title="Innovation" desc="Exploring new textures, soundscapes, and techniques." />
          <Feature icon={<Headphones />} title="Passion" desc="Relentless craft and obsession for detail." />
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StyloEFX;
