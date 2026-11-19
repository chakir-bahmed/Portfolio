export function GradientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="blob absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/30 animate-float" />
      <div className="blob absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-secondary/20 animate-float-slow" />
      <div className="blob absolute bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full bg-accent/20 animate-float" />
      <div className="blob absolute top-[60%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary/15 animate-float-slow" />
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 grid-pattern opacity-60 pointer-events-none" />
  );
}

export function NoiseOverlay() {
  return <div className="fixed inset-0 -z-10 noise pointer-events-none" />;
}
