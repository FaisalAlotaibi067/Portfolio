import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    const particles = [];
    const N = Math.floor((w * h) / 20000);
    const LINK_DIST = 150;
    const LINK_DIST2 = LINK_DIST * LINK_DIST;

    class P {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.vx = (Math.random() - 0.5) * 0.20;
        this.vy = (Math.random() - 0.5) * 0.20;

        this.drift = (Math.random() - 0.5) * 0.003;

        this.size = Math.random() * 2 + 0.6;
        this.alpha = Math.random() * 0.6 + 0.5;
      }

      step() {
        this.x += this.vx + Math.sin(Date.now() * 0.0003) * this.drift;
        this.y += this.vy + Math.cos(Date.now() * 0.0003) * this.drift;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 10
        );

        grad.addColorStop(0, `rgba(150,170,255,${this.alpha})`);
        grad.addColorStop(1, `rgba(10,20,40,0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < N; i++) particles.push(new P());

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;

          if (d2 < LINK_DIST2) {
            const o = 1 - d2 / LINK_DIST2;

            ctx.strokeStyle = `rgba(120,160,255,${o * 0.18})`;
            ctx.lineWidth = 0.7;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function frame() {

      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#060e21");
      bg.addColorStop(1, "#08142f");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const halo = ctx.createRadialGradient(
        w * 0.3,
        h * 0.2,
        0,
        w * 0.3,
        h * 0.2,
        Math.max(w, h)
      );
      halo.addColorStop(0, "rgba(50,80,160,0.2)");
      halo.addColorStop(1, "rgba(6,17,39,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.step();
        p.draw();
      });

      connect();
      requestAnimationFrame(frame);
    }

    const onResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);
    frame();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 10%, #0a1430 0%, #060e21 60%, #050a1a 100%)",
      }}
    />
  );
}
