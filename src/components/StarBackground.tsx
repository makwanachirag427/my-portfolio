import { useEffect, useState } from "react";

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  angle: number; // rotation angle
  radius: number; // distance from center
  speed: number; // radial speed
};

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  animationDuration: number;
};

const StartBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          const newRadius = star.radius + star.speed;
          const newAngle = star.angle + 0.0005;

          const centerX = 50;
          const centerY = 50;
          const x = centerX + newRadius * Math.cos(newAngle);
          const y = centerY + newRadius * Math.sin(newAngle);

          if (x < -10 || x > 110 || y < -10 || y > 110) {
            return {
              ...star,
              radius: Math.random() * 300,
              angle: Math.random() * Math.PI * 2,
              x: centerX + Math.random() * 50 - 25,
              y: centerY + Math.random() * 50 - 25,
              speed: Math.random() * 0.000001 + 0.0000002,
            };
          }

          return { ...star, x, y, radius: newRadius, angle: newAngle };
        })
      );

      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numbersOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 20000
    );
    const newStars: Star[] = [];

    for (let i = 0; i < numbersOfStars; i++) {
      const radius = Math.random() * 300;
      const angle = Math.random() * Math.PI * 2;
      const centerX = 50;
      const centerY = 50;

      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        angle,
        radius,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        speed: Math.random() * 0.000001 + 0.0000002,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numbersOfMeteors = 1;
    const newMeteors: Meteor[] = [];

    for (let i = 0; i < numbersOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 0.5 + 1,
        x: Math.random() * 70 + 10,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            borderRadius: "50%",
            backgroundColor: "white",
            position: "absolute",
          }}
          className="star animate-pulse-subtle"
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StartBackground;
