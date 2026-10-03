import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const VIDEO_SRC = "/video/Maxime%20GOUGAT.mp4";
const POSTER_SRC = "/video/poster.webp";

const formatDuration = (seconds) => {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

// Lecteur de la vidéo de présentation : affiche (poster) + bouton de lecture,
// puis lecture avec le son et les contrôles natifs au clic.
export const VideoPresentation = () => {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [duration, setDuration] = useState(null);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    video.play().catch(() => {
      // lecture refusée par le navigateur : les contrôles natifs restent disponibles
    });
  };

  // Met la vidéo en pause lorsqu'elle sort de l'écran
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // À la fin, on revient à l'affiche
  const handleEnded = () => {
    setHasStarted(false);
    videoRef.current?.load();
  };

  return (
    <div className="absolute inset-0 bg-[#0d0817]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        preload="metadata"
        playsInline
        controls={hasStarted}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleEnded}
        aria-label="Vidéo de présentation de Maxime GOUGAT"
      />

      {!hasStarted && (
        <button
          type="button"
          onClick={play}
          aria-label="Lire la vidéo de présentation"
          className="group/play absolute inset-0 flex items-end justify-end p-3 sm:justify-center sm:p-0 sm:pb-[6%] cursor-pointer focus-visible:outline-none"
        >
          <span className="flex items-center gap-3 rounded-full bg-white/10 p-1.5 sm:py-2 sm:pl-2 sm:pr-5 text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 group-hover/play:bg-white/15 group-hover/play:scale-105 group-focus-visible/play:ring-2 group-focus-visible/play:ring-primary">
            <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-primary to-accent shadow-lg">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 translate-x-px" fill="currentColor" />
              </span>
            </span>
            <span className="hidden sm:inline text-sm font-semibold uppercase tracking-[0.2em]">
              Vidéo de présentation
            </span>
            {duration && (
              <span className="hidden sm:inline text-sm tabular-nums text-white/70">
                {formatDuration(duration)}
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
};
