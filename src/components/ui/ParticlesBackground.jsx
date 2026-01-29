import { useEffect, useRef } from 'react';

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 0.5; // Smaller, star-like
    this.opacity = Math.random() * 0.5 + 0.2;
    this.pulsateSpeed = Math.random() * 0.02 + 0.005;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.vx;
    this.y += this.vy;

    // Pulsate opacity
    this.opacity += this.pulsateSpeed;
    if (this.opacity > 0.8 || this.opacity < 0.2) this.pulsateSpeed *= -1;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
  }

  draw(ctx, isDark) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Gold color: #BD9553 => 189, 149, 83
    ctx.fillStyle = isDark
        ? `rgba(189, 149, 83, ${this.opacity})`
        : `rgba(189, 149, 83, ${this.opacity})`; // Gold in both modes? Or darker gold?
    ctx.fill();

    // Gold glow
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#BD9553"; // Always gold glow
  }
}

export function ParticlesBackground() {
  const canvasRef = useRef(null);

  // Since we don't have direct access to theme context value effectively inside a canvas loop
  // without re-triggering, we'll try to detect theme from html class or use a prop if available.
  // However, for simplicity, I will use a simple mutation observer or just check document class.

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialize particles on resize to ensure distribution?
      // Or just let them float. If we don't re-init, we should handle bounds in update.
      // We pass width/height to update() so bounds are handled.
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const initParticles = () => {
       particles = [];
       const particleCount = Math.min(window.innerWidth / 8, 200); // Increased density
       for (let i = 0; i < particleCount; i++) {
         particles.push(new Particle(canvas.width, canvas.height));
       }
    };

    initParticles();

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, isDark);
      });

      // Connections removed as per user request for a cleaner look

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
