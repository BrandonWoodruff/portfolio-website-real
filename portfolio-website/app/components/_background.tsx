export function Background () {
  return (
    <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
      <source src="/video/video-1.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Background;