import { useEffect, useState } from "react"

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 10000),
      220
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id:i,
        size: Math.random() * 2.5 + 0.5 ,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.4,
        animationDuration: Math.random() * 4 + 2,
      })
    };
    setStars(newStars);
  };


  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id:i,
        size: Math.random() * 2 + 1 ,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    };
    setMeteors(newMeteors);
  };


  return (
    <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Halos colorés (clair et sombre) */}
      <div className="absolute -top-[20%] -left-[10%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_60%)] dark:bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_60%)]" />
      <div className="absolute -bottom-[25%] -right-[15%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.14),transparent_60%)] dark:bg-[radial-gradient(circle,hsl(var(--accent)/0.12),transparent_60%)]" />

      {/* Grille discrète en thème clair */}
      <div className="absolute inset-0 dark:hidden opacity-[0.5] bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      {/* Étoiles et météores en thème sombre */}
      <div className="hidden dark:block">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle" style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        ))}
      </div>
    </div>
  );
};
