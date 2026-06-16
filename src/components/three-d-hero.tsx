import { useRef, useEffect, useCallback } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  targetOpacity: number;
  type: "shard" | "dot" | "line";
};

function spawnParticle(w: number, h: number): Particle {
  const type = Math.random() < 0.15 ? "line" : Math.random() < 0.5 ? "shard" : "dot";
  return {
    x: (Math.random() - 0.5) * w * 2,
    y: (Math.random() - 0.5) * h * 2,
    z: 100 + Math.random() * 600,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3 - 0.2,
    vz: 0.3 + Math.random() * 0.7,
    size: type === "dot" ? 1.5 + Math.random() * 2 : 3 + Math.random() * 5,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    opacity: 0,
    targetOpacity: 0.15 + Math.random() * 0.45,
    type,
  };
}

function drawShard(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  opacity: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  const s = size * 1.4;
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.7, 0);
  ctx.lineTo(0, s * 0.6);
  ctx.lineTo(-s * 0.7, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(201, 168, 76, ${opacity})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(201, 168, 76, ${opacity * 0.5})`;
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  opacity: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.strokeStyle = `rgba(201, 168, 76, ${opacity * 0.6})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-size, 0);
  ctx.lineTo(size, 0);
  ctx.stroke();
  ctx.restore();
}

export function ThreeDHero({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const handleMouse = useCallback((e: MouseEvent) => {
    const { w, h } = dimensionsRef.current;
    mouseRef.current = {
      x: (e.clientX / w - 0.5) * 2,
      y: (e.clientY / h - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width ?? window.innerWidth;
      h = rect?.height ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
    };

    resize();

    const maxParticles = 120;
    while (particlesRef.current.length < maxParticles) {
      particlesRef.current.push(spawnParticle(w, h));
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    function drawShield(cx: number, cy: number, s: number, alpha: number) {
      ctx.save();
      ctx.translate(cx, cy - s * 0.1);
      ctx.beginPath();
      const r = s * 1.5;
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.9, -r * 0.8, r, r * 0.3, 0, r * 1.1);
      ctx.bezierCurveTo(-r, r * 0.3, -r * 0.9, -r * 0.8, 0, -r);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, `rgba(201, 168, 76, ${alpha * 0.6})`);
      grad.addColorStop(0.5, `rgba(201, 168, 76, ${alpha * 0.1})`);
      grad.addColorStop(1, `rgba(201, 168, 76, ${alpha * 0.3})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    let shieldPulse = 0;

    function animate() {
      shieldPulse += 0.008;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const { x: mx, y: my } = mouseRef.current;

      const shieldAlpha = 0.3 + Math.sin(shieldPulse) * 0.1;
      const shieldSize = Math.min(w, h) * 0.18;
      drawShield(cx, cy, shieldSize, shieldAlpha);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.z -= p.vz;
        p.rotation += p.rotationSpeed;
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;

        const perspective = 400 / (400 + p.z);
        const px = cx + (p.x - mx * 80) * perspective;
        const py = cy + (p.y - my * 80) * perspective;
        const sz = p.size * perspective;
        const alpha = p.opacity * Math.min(1, perspective * 2);

        if (p.z <= -100 || p.z > 700) {
          particles[i] = spawnParticle(w, h);
          particles[i].z = 600;
          continue;
        }

        if (alpha <= 0.02) continue;

        if (p.type === "shard") drawShard(ctx, px, py, sz, p.rotation, alpha);
        else if (p.type === "line") drawLine(ctx, px, py, sz * 1.5, p.rotation, alpha);
        else {
          ctx.beginPath();
          ctx.arc(px, py, sz, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.7})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [handleMouse]);

  return (
    <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 z-10 flex items-center">{children}</div>
    </div>
  );
}
