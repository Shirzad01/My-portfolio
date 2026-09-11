"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  color: string;
}

export const NeuralCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Node count based on screen width
    const nodeCount = Math.min(Math.floor(width / 22), 65);
    const nodes: Node[] = [];
    const colors = ["#00F0FF", "#38BDF8", "#818CF8", "#C084FC", "#10B981"];

    for (let i = 0; i < nodeCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.45),
        vy: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.45),
        radius: Math.random() * 2 + 1.2,
        baseRadius: Math.random() * 2 + 1.2,
        pulsePhase: Math.random() * Math.PI * 2,
        color
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let frame = 0;
    const maxDistance = Math.min(width / 8, 140);

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce on boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse subtle attraction
        const dxMouse = mouseX - nodeA.x;
        const dyMouse = mouseY - nodeA.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          const force = (180 - distMouse) / 180;
          nodeA.x += (dxMouse / distMouse) * force * 0.8;
          nodeA.y += (dyMouse / distMouse) * force * 0.8;
        }

        // Connect with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Pulse node size
        const pulse = Math.sin(frame * 0.03 + nodeA.pulsePhase) * 0.5 + 1;
        const currentRadius = nodeA.baseRadius * pulse;

        // Draw node glow
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color === "#00F0FF" ? "rgba(0, 240, 255, 0.15)" : "rgba(129, 140, 248, 0.15)";
        ctx.fill();

        // Draw node core
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-auto opacity-75"
        aria-hidden="true"
      />
    </div>
  );
};
