import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    const particles = [];
    const N = Math.floor((w * h) / 23000);
    const LINK_DIST = 150;
    const LINK_DIST2 = LINK_DIST * LINK_DIST;
    const mouse = { x: w / 2, y: h / 2, r: 140 };

    class P {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.04; 
        this.vy = (Math.random() - 0.5) * 0.04;
        this.size = Math.random() * 2 + 0.6;
        this.alpha = Math.random() * 0.5 + 0.4;
      }

      step() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < mouse.r) {
          this.vx -= (dx / d) * 0.002; 
          this.vy -= (dy / d) * 0.002;
        }

        this.x += this.vx;
        this.y += this.vy;

    
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 8);
        grad.addColorStop(0, `rgba(140,180,255,${this.alpha})`);
        grad.addColorStop(1, `rgba(6,12,30,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
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
            ctx.strokeStyle = `rgba(100,160,255,${o * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function frame() {
      ctx.fillStyle = "#060e21";
      ctx.fillRect(0, 0, w, h);

      const halo = ctx.createRadialGradient(w * 0.3, h * 0.2, 0, w * 0.3, h * 0.2, Math.max(w, h));
      halo.addColorStop(0, "rgba(35,80,170,0.15)");
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

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    frame();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1000px 700px at 20% 10%, #0b1e4b 0%, #081228 55%, #060e21 100%)",
      }}
    />
  );
}
