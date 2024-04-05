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
    const summaryLink = document.getElementById("summary-link");
    //underline the link
    if (summaryVisible) {
      summaryLink.classList.remove("underline");
    } else {
      summaryLink.classList.add("underline");
    }
  };

  const highlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.add("text-purple-400");
  };

  const unHighlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.remove("text-purple-400");
  }

  const highlightSkills = () => {
    const skillsLink = document.getElementById("skills");
    skillsLink.classList.add("text-purple-400");
  };

  const unHighlightSkills = () => {
    const skillsLink = document.getElementById("skills");
    skillsLink.classList.remove("text-purple-400");
  };

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
        <p id="summary-link" className="transition duration-150 ease-in-out text-2xl underline cursor-pointer" onClick={toggleSummary} onMouseOver={highlightSummary} onMouseOut={unHighlightSummary}>Summary</p>
        {summaryVisible && (
          <div id="summary-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
            Experienced IT professional with a focus on web applications and software development. Proficient in software development, adept at resolving diverse issues and delivering outstanding support in dynamic, fast-paced environments. Proficient in crafting and implementing solutions, monitoring systems, and facilitating changes. Specialized in leveraging software development skills to enhance operational efficiency and address complex challenges.
            <br></br>
          </div>
        )}
        <br></br><br></br>
        <p id="skills" className="text-2xl underline cursor-pointer" onMouseOver={highlightSkills} onMouseOut={unHighlightSkills}>Skills</p>
        <div id="skills-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
            <ul id='skills-column-1'>
              <li><a href="https://profound-sprite-bad9f7.netlify.app/" target="_blank">HTML, CSS</a></li>
              <li>NodeJS</li>
              <li>React</li>
              <li>Remix</li>
              <li>Scripting</li>
              <li>C++</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Java</li>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
            <ul id='skills-column-2'>
              <li>Git</li>
              <li>GitHub</li>
              <li>Meraki Administration</li>
              <li>Postman</li>
              <li>Wireshark</li>
              <li>VMware</li>
              <li>Hubspot Development</li>
              <li>Apache</li>
              <li>Nginx</li>
              <li>MySQL</li>
              <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
            </ul>
          </div>
      </div>
    </div>


  );
}
