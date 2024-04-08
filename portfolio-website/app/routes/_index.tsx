import { useState } from 'react';
import Header from "~/components/_header";
import Footer from "~/components/_footer";
import Background from "~/components/_background";
export const meta: MetaFunction = () => {
  return [
    { title: "Brandon Woodruff" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const toggleExperience = () => {
    setExperienceVisible(!experienceVisible);
    const experienceLink = document.getElementById("experience");
    //underline the link
    if (experienceVisible) {
      experienceLink.classList.remove("underline");
    } else {
      experienceLink.classList.add("underline");
    }
  }

  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
    const summaryLink = document.getElementById("summary-link");
    //underline the link
    if (summaryVisible) {
      summaryLink.classList.remove("underline");
    } else {
      summaryLink.classList.add("underline");
    }
  }
  const toggleSkills = () => {
    setSkillsVisible(!skillsVisible);
    const skillsLink = document.getElementById("skills");
    //underline the link
    if (skillsVisible) {
      skillsLink.classList.remove("underline");
    } else {
      skillsLink.classList.add("underline");
    }
  }

  const highlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.add("text-purple-400");
  }

  const unHighlightSummary = () => {
    const summaryLink = document.getElementById("summary-link");
    summaryLink.classList.remove("text-purple-400");
  }

  const highlightSkills = () => {
    const skillsLink = document.getElementById("skills");
    skillsLink.classList.add("text-purple-400");
  }

  const unHighlightSkills = () => {
    const skillsLink = document.getElementById("skills");
    skillsLink.classList.remove("text-purple-400");
  }

  const highlightExperience = () => {
    const experienceLink = document.getElementById("experience");
    experienceLink.classList.add("text-purple-400");
  }

  const unHighlightExperience = () => {
    const experienceLink = document.getElementById("experience");
    experienceLink.classList.remove("text-purple-400");
  }


  return (
      
    <div className="relative text-white text-center z-1">
        <Header />
        <br/><br/>
        <h1 className="text-3xl font-bold underline">Brandon Woodruff</h1>
        <br/><br/>
        <p id="summary-link" className="transition duration-150 ease-in-out text-2xl cursor-pointer" onClick={toggleSummary} onMouseOver={highlightSummary} onMouseOut={unHighlightSummary}>Summary</p>
        {summaryVisible && (
          <div id="summary-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
            Experienced IT professional with a focus on web applications and software development. Proficient in software development, adept at resolving diverse issues and delivering outstanding support in dynamic, fast-paced environments. Proficient in crafting and implementing solutions, monitoring systems, and facilitating changes. Specialized in leveraging software development skills to enhance operational efficiency and address complex challenges.
            <br></br>
          </div>
        )}
        <br></br><br></br>
        <p id="skills" className="text-2xl cursor-pointer" onClick={toggleSkills} onMouseOver={highlightSkills} onMouseOut={unHighlightSkills}>Skills</p>
        {skillsVisible && (<div id="skills-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl">
            <ul id='skills-column-1'>
              <li><a href="https://profound-sprite-bad9f7.netlify.app/" target="_blank">HTML, CSS</a></li>
              <li><a href="https://github.com/BrandonWoodruff/DriveHubApp" target="_blank">NodeJS</a></li>
              <li><a href="https://react.dev/" target="_blank">React</a></li>
              <li> <a href="https://github.com/BrandonWoodruff/portfolio-website-real" target="_blank">Remix</a></li>
              <li><a href="https://github.com/BrandonWoodruff/PWDictionary" target="_blank">Scripting</a></li>
              <li><a href="https://isocpp.org/" target="_blank">C++</a></li>
              <li><a href="https://www.sqlservercentral.com/" target="_blank">SQL</a></li>
              <li><a href="https://github.com/BrandonWoodruff/CatchTheRacoon" target='_blank'>Python</a></li>
              <li>Java</li>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
            <ul id='skills-column-2'>
              <li>Git</li>
              <li>GitHub</li>
              <li>C#</li>
              <li>Postman</li>
              <li>AWS</li>
              <li>Okta Development</li>
              <li>Hubspot Development</li>
              <li>MongoDB</li>
              <li>TypeScript</li>
              <li>MySQL</li>
              <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
            </ul>
        </div>
        )}

        <br /><br />
        <p id="experience" className="text-2xl cursor-pointer" onClick={toggleExperience} onMouseOver={highlightExperience} onMouseOut={unHighlightExperience}>Experience</p>
    {experienceVisible && (<div id="experience-content" className="mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl z-10">
                  <br></br>
                    <h3> PROJECT SOLAR – Orem, Utah</h3>
          <p>June 2021 to Current </p>
          <br></br>
                    <h3> Systems Engineer</h3>
                    <p>June 2022 to Present</p>
                    <ul>
                        <li>Oversee the management and monitoring of all installed systems and infrastructure.</li>
                        <li>Install, configure, test, and maintain operating systems and applications to ensure optimal
                            performance.</li>
                        <li>Proactively ensure the highest levels of systems and infrastructure availability.</li>
                        <li>Monitor and test application performance, identifying potential bottlenecks and
                            collaborating with developers to
                            implement effective solutions.</li>
                        <li>Implement and maintain robust security, backup, and redundancy strategies.</li>
                        <li>Develop and maintain custom scripts to enhance system efficiency and reduce human
                            intervention time.</li>
                        <li>Contribute to the design of information and operational support systems.</li>
                        <li>Collaborate with vendors for effective problem resolution.</li>
                    </ul>
                    <br></br><br></br>
                    <h3> Associate Systems Engineer</h3>
                    <p>June 2022 to Dec 2023</p>
                    <ul>
                        <li>Spearheaded the establishment of the IT Department, assuming responsibility for all
                            hardware, software, and
                            network administration.</li>
                        <li>Formulated comprehensive Standard Operating Procedures (SOPs) for security protocols and
                            software utilization.
                        </li>
                        <li>Successfully integrated Okta into the company's infrastructure without relying on a
                            third-party integration
                            team, resulting in cost savings of $40,000.</li>
                        <li>Demonstrated proficiency as a Zendesk administrator, actively involved in building reports
                            and addressing
                            various company needs.</li>
                    </ul>
                    <br></br><br></br><br></br><br></br>

          <h3> BLUE RAVEN SOLAR - Orem, Utah</h3>
          <p>April 2021 to June 2022</p>
          <br></br>
                    <h3>Work Order Specialist</h3>
                    <p>February 2022 to June 2022</p>
                    <ul>
                        <li>Acted as a Project Manager for “non-standard works”.</li>
                    </ul>
                    <br></br><br></br>
                    <h3> Permit Coordinator</h3>
                    <p>May 2021 to February 2022</p>
                    <ul>
                        <li>Worked with Jurisdictions to receive approval permits for solar.</li>
                    </ul>
                    <br></br><br></br>
                    <h3> Proposal Coordinator</h3>
                    <p>April 2021 to May 2021</p>
                    <ul>
                        <li>Created Project Proposals for customers using CAD and Aurora.</li>
                    </ul>
    </div>
      )}
        <br></br><br></br>
      <Footer />
      
      </div>
  );
}
