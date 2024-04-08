import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline/esm/index.js";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-D2sP0ihz.css";
function Background() {
  return /* @__PURE__ */ jsxs("video", { className: "fixed top-0 left-0 w-full h-full object-cover z-0", autoPlay: true, loop: true, muted: true, children: [
    /* @__PURE__ */ jsx("source", { src: "/video/video-1.mp4", type: "video/mp4" }),
    "Your browser does not support the video tag."
  ] });
}
let links$1 = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Background, {}),
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links: links$1
}, Symbol.toStringTag, { value: "Module" }));
const Gif = () => {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: " h-1/4 w-auto z-10",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsx("div", { className: "inset-0 overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: isHovered ? "/video/logo.gif" : "/image/logo.jpg",
          alt: "Your GIF",
          className: "w-full h-full scale-50 object-cover transition-transform duration-500 hover:scale-50",
          style: { maxHeight: "25%", maxWidth: "25%" },
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false)
        }
      ) })
    }
  );
};
function Header() {
  return /* @__PURE__ */ jsxs("header", { className: "z-10 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Gif, {}) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex", children: [
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/brandon-woody-woodruff/", "aria-label": "Brandon Woodruff on LinkedIn", target: "_blank", rel: "noopener", className: "mr-4", children: /* @__PURE__ */ jsx("svg", { className: "h-10 w-10 hover:text-gray-400", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z", fill: "currentColor" }) }) }),
        /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff", target: "_blank", className: "hover:text-gray-400 dark:hover:text-white dark:text-gray-400", children: /* @__PURE__ */ jsx("svg", { className: "w-10 h-10", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", "clip-rule": "evenodd" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "/contactMe", className: "text-white hover:text-gray-400", children: [
        "Contact Me ",
        /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-4 h-4 inline" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "fixed bottom-0 right-0 z-10", children: /* @__PURE__ */ jsx("div", { className: "text-white z-9 text-right", children: /* @__PURE__ */ jsx("p", { children: "© 2024 Brandon Woodruff  " }) }) });
}
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-white text-center", children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Contact Me" }),
    /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", action: "routes/success", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-lg mb-2", children: "Your Name:" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "name", className: "input-box", onChange: (e) => setName(e.target.value) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-lg mb-2", children: "Your Email:" }),
        /* @__PURE__ */ jsx("input", { type: "email", name: "email", className: "input-box", onChange: (e) => setEmail(e.target.value) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-lg mb-2", children: "Message:" }),
        /* @__PURE__ */ jsx("textarea", { name: "message", className: "input-box", onChange: (e) => setMessage(e.target.value) })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600", children: "Send" })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "text-white", children: /* @__PURE__ */ jsx(Footer, {}) })
  ] });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactMe
}, Symbol.toStringTag, { value: "Module" }));
let links = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
};
const meta = () => {
  return [
    { title: "Brandon Woodruff" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [summaryHighlighted, setSummaryHighlighted] = useState(false);
  const [skillsHighlighted, setSkillsHighlighted] = useState(false);
  const [experienceHighlighted, setExperienceHighlighted] = useState(false);
  const toggleExperience = () => {
    setExperienceVisible(!experienceVisible);
    setExperienceHighlighted(!experienceVisible);
  };
  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
    setSummaryHighlighted(!summaryVisible);
  };
  const toggleSkills = () => {
    setSkillsVisible(!skillsVisible);
    setSkillsHighlighted(!skillsVisible);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-white text-center", children: [
    /* @__PURE__ */ jsxs("header", { className: "z-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Gif, {}) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex", children: [
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/brandon-woody-woodruff/", "aria-label": "Brandon Woodruff on LinkedIn", target: "_blank", rel: "noopener", className: "mr-4", children: /* @__PURE__ */ jsx("svg", { className: "h-10 w-10 hover:text-gray-400", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z", fill: "currentColor" }) }) }),
          /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff", target: "_blank", className: "hover:text-gray-400 dark:hover:text-white dark:text-gray-400", children: /* @__PURE__ */ jsx("svg", { className: "w-10 h-10", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/contactMe", className: "text-white hover:text-gray-400", children: [
          "Contact Me ",
          /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "w-4 h-4 inline" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold underline", children: "Brandon Woodruff" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `transition duration-150 ease-in-out text-2xl cursor-pointer ${summaryHighlighted ? "text-purple-400" : ""}`,
        onClick: toggleSummary,
        onMouseOver: () => setSummaryHighlighted(true),
        onMouseOut: () => setSummaryHighlighted(false),
        children: "Summary"
      }
    ),
    summaryVisible && /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl", children: [
      "Experienced IT professional with a focus on web applications and software development. Proficient in software development, adept at resolving diverse issues and delivering outstanding support in dynamic, fast-paced environments. Proficient in crafting and implementing solutions, monitoring systems, and facilitating changes. Specialized in leveraging software development skills to enhance operational efficiency and address complex challenges.",
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `text-2xl cursor-pointer ${skillsHighlighted ? "text-purple-400" : ""}`,
        onClick: toggleSkills,
        onMouseOver: () => setSkillsHighlighted(true),
        onMouseOut: () => setSkillsHighlighted(false),
        children: "Skills"
      }
    ),
    skillsVisible && /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl flex justify-between", children: [
      /* @__PURE__ */ jsxs("ul", { className: "w-1/2", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://profound-sprite-bad9f7.netlify.app/", target: "_blank", children: "HTML, CSS" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff/DriveHubApp", target: "_blank", children: "NodeJS" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://react.dev/", target: "_blank", children: "React" }) }),
        /* @__PURE__ */ jsxs("li", { children: [
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff/portfolio-website-real", target: "_blank", children: "Remix" })
        ] }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff/PWDictionary", target: "_blank", children: "Scripting" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://isocpp.org/", target: "_blank", children: "C++" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.sqlservercentral.com/", target: "_blank", children: "SQL" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/BrandonWoodruff/CatchTheRacoon", target: "_blank", children: "Python" }) }),
        /* @__PURE__ */ jsx("li", { children: "Java" }),
        /* @__PURE__ */ jsx("li", { children: "Linux" }),
        /* @__PURE__ */ jsx("li", { children: "Windows" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "w-1/2", children: [
        /* @__PURE__ */ jsx("li", { children: "Git" }),
        /* @__PURE__ */ jsx("li", { children: "GitHub" }),
        /* @__PURE__ */ jsx("li", { children: "C#" }),
        /* @__PURE__ */ jsx("li", { children: "Postman" }),
        /* @__PURE__ */ jsx("li", { children: "AWS" }),
        /* @__PURE__ */ jsx("li", { children: "Okta Development" }),
        /* @__PURE__ */ jsx("li", { children: "Hubspot Development" }),
        /* @__PURE__ */ jsx("li", { children: "MongoDB" }),
        /* @__PURE__ */ jsx("li", { children: "TypeScript" }),
        /* @__PURE__ */ jsx("li", { children: "MySQL" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.postgresql.org/", target: "_blank", children: "PostgreSQL" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `text-2xl cursor-pointer ${experienceHighlighted ? "text-purple-400" : ""}`,
        onClick: toggleExperience,
        onMouseOver: () => setExperienceHighlighted(true),
        onMouseOut: () => setExperienceHighlighted(false),
        children: "Experience"
      }
    ),
    experienceVisible && /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl bg-white bg-opacity-50 rounded-lg text-2xl", children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " PROJECT SOLAR – Orem, Utah" }),
      /* @__PURE__ */ jsx("p", { children: "June 2021 to Current " }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " Systems Engineer" }),
      /* @__PURE__ */ jsx("p", { children: "June 2022 to Present" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Oversee the management and monitoring of all installed systems and infrastructure." }),
        /* @__PURE__ */ jsx("li", { children: "Install, configure, test, and maintain operating systems and applications to ensure optimal performance." }),
        /* @__PURE__ */ jsx("li", { children: "Proactively ensure the highest levels of systems and infrastructure availability." }),
        /* @__PURE__ */ jsx("li", { children: "Monitor and test application performance, identifying potential bottlenecks and collaborating with developers to implement effective solutions." }),
        /* @__PURE__ */ jsx("li", { children: "Implement and maintain robust security, backup, and redundancy strategies." }),
        /* @__PURE__ */ jsx("li", { children: "Develop and maintain custom scripts to enhance system efficiency and reduce human intervention time." }),
        /* @__PURE__ */ jsx("li", { children: "Contribute to the design of information and operational support systems." }),
        /* @__PURE__ */ jsx("li", { children: "Collaborate with vendors for effective problem resolution." })
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " Associate Systems Engineer" }),
      /* @__PURE__ */ jsx("p", { children: "June 2022 to Dec 2023" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Spearheaded the establishment of the IT Department, assuming responsibility for all hardware, software, and network administration." }),
        /* @__PURE__ */ jsx("li", { children: "Formulated comprehensive Standard Operating Procedures (SOPs) for security protocols and software utilization." }),
        /* @__PURE__ */ jsx("li", { children: "Successfully integrated Okta into the company's infrastructure without relying on a third-party integration team, resulting in cost savings of $40,000." }),
        /* @__PURE__ */ jsx("li", { children: "Demonstrated proficiency as a Zendesk administrator, actively involved in building reports and addressing various company needs." })
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " BLUE RAVEN SOLAR - Orem, Utah" }),
      /* @__PURE__ */ jsx("p", { children: "April 2021 to June 2022" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: "Work Order Specialist" }),
      /* @__PURE__ */ jsx("p", { children: "February 2022 to June 2022" }),
      /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Acted as a Project Manager for “non-standard works”." }) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " Permit Coordinator" }),
      /* @__PURE__ */ jsx("p", { children: "May 2021 to February 2022" }),
      /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Worked with Jurisdictions to receive approval permits for solar." }) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h3", { children: " Proposal Coordinator" }),
      /* @__PURE__ */ jsx("p", { children: "April 2021 to May 2021" }),
      /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Created Project Proposals for customers using CAD and Aurora." }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "fixed bottom-0 right-0 z-10", children: /* @__PURE__ */ jsx("div", { className: "text-white z-9 text-right", children: /* @__PURE__ */ jsx("p", { children: "© 2024 Brandon Woodruff  " }) }) })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CmAxv4Nw.js", "imports": ["/assets/jsx-runtime-BlSqMCxk.js", "/assets/components-CT78CVRP.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BLKzIYVr.js", "imports": ["/assets/jsx-runtime-BlSqMCxk.js", "/assets/components-CT78CVRP.js", "/assets/tailwind-BJJYOo8r.js"], "css": [] }, "routes/contactMe": { "id": "routes/contactMe", "parentId": "root", "path": "contactMe", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contactMe-B3IUkluA.js", "imports": ["/assets/jsx-runtime-BlSqMCxk.js", "/assets/ExternalLinkIcon-DSEbWx94.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Baw-XcqT.js", "imports": ["/assets/jsx-runtime-BlSqMCxk.js", "/assets/ExternalLinkIcon-DSEbWx94.js", "/assets/tailwind-BJJYOo8r.js"], "css": [] } }, "url": "/assets/manifest-064740ad.js", "version": "064740ad" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/contactMe": {
    id: "routes/contactMe",
    parentId: "root",
    path: "contactMe",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
