// create a header function that will be used in the routes
export function Header() {
  return (
    <header className="z-10">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutMe">About Me</a></li>
          <li>Brandon Woodruff</li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contactMe">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;