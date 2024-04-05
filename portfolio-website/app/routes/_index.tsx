import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "Brandon Woodruff" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [summaryVisible, setSummaryVisible] = useState(false);

  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
  };

  const highlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.add("text-purple-400");
  };

  const unHighlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.remove("text-purple-400");
  }

  return (
    <div className="bg-video min-h-screen relative overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="/video/video-1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center">
        <br/><br/>
        <h1 className="text-3xl font-bold underline">Brandon Woodruff</h1>
        <br/><br/>
        <div id="summary-link" className="transition duration-150 ease-in-out text-2xl underline cursor-pointer" onClick={toggleSummary} onMouseOver={highlightSummary} onMouseOut={unHighlightSummary}>Summary</div>
        {summaryVisible && (
          <div id="summary-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
            Experienced IT professional with a focus on computing systems and web server technology. Proficient in software development, adept at resolving diverse issues and delivering outstanding support in dynamic, fast-paced environments. Proficient in crafting and implementing solutions, monitoring systems, and facilitating changes. Specialized in leveraging software development skills to enhance operational efficiency and address complex challenges.
          </div>
        )}
      </div>
    </div>
  );
}
