import { useState, useEffect, useCallback, useRef } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

const artworks = [
  { src: "/artwork/the-pattern-that-still-breathes-1.jpg", title: "The Pattern That Still Breathes", medium: "Mixed Media on Canvas", year: "2025", size: "30 × 50 cm", description: "An exploration of heritage patterns that continue to live and breathe through generations." },
  { src: "/artwork/hikaya.jpg", title: "Hikaya", medium: "Mixed Media on Canvas", year: "2025", size: "30 × 50 cm", description: "Translating oral stories into visual narratives — the patterns that carry memory." },
  { src: "/artwork/teitas-house.jpg", title: "Teita's House", medium: "Acrylic on Canvas", year: "2024", size: "65 × 80 cm", description: "A warm reimagining of my grandmother's home, where every corner holds a memory." },
  { src: "/artwork/the-other-side.jpg", title: "The Other Side", medium: "Acrylic on Canvas", year: "2023", size: "50 × 60 cm", description: "Exploring duality and the spaces between what we see and what we feel." },
  { src: "/artwork/babas-couch.jpg", title: "Baba's Couch", medium: "Oil on Canvas", year: "2023", size: "40 × 40 cm", description: "A portrait of comfort and familiarity — the place where stories were shared." },
  { src: "/artwork/mesmerized.jpg", title: "Mesmerized", medium: "Acrylic on Canvas", year: "2023", size: "50 × 60 cm", description: "Capturing a moment of wonder and the feeling of being completely absorbed." },
  { src: "/artwork/naseem.jpg", title: "Naseem", medium: "Acrylic on Canvas", year: "2023", size: "30 × 50 cm", description: "Named after the Arabic word for breeze — gentle, fleeting, and life-giving." },
  { src: "/artwork/the-shopkeepers-spirit.jpg", title: "The Shopkeeper's Spirit", medium: "Acrylic on Canvas", year: "2023", size: "20 × 25 cm", description: "A tribute to the warmth and character of small shop owners." },
  { src: "/artwork/al-salt-jordan.jpg", title: "Al-Salt, Jordan", medium: "Acrylic on Canvas", year: "2023", size: "65 × 80 cm", description: "A cityscape of Al-Salt — golden stone buildings cascading down Jordanian hillsides." },
  { src: "/artwork/babas-pool.jpg", title: "Baba's Pool", medium: "Oil on Canvas", year: "2024", size: "50 × 60 cm", description: "Light and water, stillness and reflection — a quiet family memory." },
  { src: "/artwork/did-you-forget-me.jpg", title: "Did You Forget Me?", medium: "Acrylic on Canvas", year: "2024", size: "30 × 40 cm", description: "A question asked by places we've left behind." },
];

const Artwork = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });

  const selected = selectedIndex !== null ? artworks[selectedIndex] : null;

  // Preload all images before showing gallery
  useEffect(() => {
    let loaded = 0;
    artworks.forEach((art) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= artworks.length) {
          setTimeout(() => setImagesLoaded(true), 300);
        }
      };
      img.src = art.src;
    });
  }, []);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedIndex((selectedIndex + 1) % artworks.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedIndex((selectedIndex - 1 + artworks.length) % artworks.length);
  }, [selectedIndex]);

  const closeLightbox = () => {
    setSelectedIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const toggleZoom = () => {
    if (zoom > 1) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(2.5);
    }
  };

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev]);

  // Pan handlers for zoomed images
  const handlePanStart = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    panOffset.current = { ...pan };
  };

  const handlePanMove = (e: React.MouseEvent) => {
    if (!isPanning || zoom <= 1) return;
    setPan({
      x: panOffset.current.x + (e.clientX - panStart.current.x),
      y: panOffset.current.y + (e.clientY - panStart.current.y),
    });
  };

  const handlePanEnd = () => setIsPanning(false);

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-6">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Art & Expression</h1>
            <p className="text-muted-foreground font-body max-w-xl mb-16">
              My paintings explore themes of memory, heritage, and place — often drawing from my Jordanian roots. 
              Each piece is a conversation between the past and present.
            </p>
          </FadeIn>

          {/* Loading state */}
          {!imagesLoaded && (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="w-48 h-1 bg-muted rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(loadedCount / artworks.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-muted-foreground font-body">Loading gallery...</p>
            </div>
          )}

          {/* Gallery */}
          {imagesLoaded && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {artworks.map((art, i) => (
                <FadeIn key={art.title} delay={i * 0.05}>
                  <button
                    onClick={() => { setSelectedIndex(i); setZoom(1); setPan({ x: 0, y: 0 }); }}
                    className="block w-full text-left break-inside-avoid group"
                  >
                    <div className="rounded-lg overflow-hidden bg-muted">
                      <img
                        src={art.src}
                        alt={art.title}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display text-base text-foreground mt-3 group-hover:text-primary transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body">{art.medium}, {art.year}</p>
                  </button>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Carousel with Zoom */}
      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-3 text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-3 text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Zoom toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
              className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary transition-colors"
            >
              {zoom > 1 ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
            </button>

            {/* Image + Info */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="overflow-hidden rounded-xl bg-muted/20 cursor-grab active:cursor-grabbing w-full flex items-center justify-center"
                style={{ maxHeight: "70vh" }}
                onMouseDown={handlePanStart}
                onMouseMove={handlePanMove}
                onMouseUp={handlePanEnd}
                onMouseLeave={handlePanEnd}
                onDoubleClick={(e) => { e.stopPropagation(); toggleZoom(); }}
              >
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="max-h-[70vh] max-w-full object-contain transition-transform duration-200 select-none"
                  draggable={false}
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  }}
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="font-display text-xl md:text-2xl text-background">{selected.title}</h2>
                <p className="text-sm text-background/60 font-body mt-1">{selected.medium}, {selected.year} · {selected.size}</p>
                <p className="text-background/50 font-body mt-2 text-sm max-w-lg mx-auto leading-relaxed">{selected.description}</p>
                <p className="text-background/30 font-body mt-3 text-xs">
                  {selectedIndex + 1} / {artworks.length} · Double-click or press +/- to zoom
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Artwork;
