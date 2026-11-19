import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const onHoverIn = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '60px';
        ringRef.current.style.height = '60px';
        ringRef.current.style.borderColor = 'rgba(139, 92, 246, 0.8)';
      }
    };
    const onHoverOut = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '40px';
        ringRef.current.style.height = '40px';
        ringRef.current.style.borderColor = 'rgba(6, 182, 212, 0.5)';
      }
    };

    const attachHover = () => {
      const targets = document.querySelectorAll('a, button, .card-lift, .cursor-hover');
      targets.forEach((t) => {
        t.addEventListener('mouseenter', onHoverIn);
        t.addEventListener('mouseleave', onHoverOut);
      });
      return () => {
        targets.forEach((t) => {
          t.removeEventListener('mouseenter', onHoverIn);
          t.removeEventListener('mouseleave', onHoverOut);
        });
      };
    };

    window.addEventListener('mousemove', onMove);
    animateRing();
    let detachHover = attachHover();
    const interval = setInterval(() => {
      detachHover();
      detachHover = attachHover();
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      detachHover();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
