import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Brandon Woodruff" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-video min-h-screen relative overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="/video/video-1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center m-8">
        {/* <div className="mx-auto max-w-lg bg-white bg-opacity-50 rounded-lg p-8 mt-8"> */}
        <br></br><br></br>
        <h1 className="text-3xl font-bold underline">Brandon Woodruff</h1>
        <br></br><br></br>
        <p className="text-2xl">Welcome to my portfolio website!</p>
        {/* <img src="/images/brandonwoodruff.jpg" alt="Brandon Woodruff" className="h-80 w-80 mx-auto" /> */}
      </div>
      </div>
    // </div>
  );
}
