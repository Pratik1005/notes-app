import {NavLink} from "react-router-dom";

const Notes = () => {
  return (
    <>
      <header className="top-header">
        <h1 className="header-logo">MyNotes</h1>
      </header>
      <section className="app-ctn">
        <aside className="side-menu">
          <nav className="menu-ctn">
            <NavLink to="/notes" className="menu-link">
              <span className="material-icons menu-icon">home</span> Notes
            </NavLink>
            <NavLink to="/notes" className="menu-link">
              <span className="material-icons menu-icon">edit</span> Edit labels
            </NavLink>
            <NavLink to="/notes" className="menu-link">
              <span className="material-icons menu-icon">archive</span> Archive
            </NavLink>
            <NavLink to="/notes" className="menu-link">
              <span className="material-icons menu-icon">delete</span> Trash
            </NavLink>
          </nav>
          <footer>
            <p>Made by Pratik Devle</p>
            <div className="footer-links">
              <a href="https://github.com/Pratik1005" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-devle-296184160"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/DevlePratik" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} MyNotes</p>
          </footer>
        </aside>
        <div className="notes-ctn">
          <h2>All notes</h2>
        </div>
      </section>
    </>
  );
};

export {Notes};
