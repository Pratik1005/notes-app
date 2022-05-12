const Footer = () => {
  return (
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
  );
};

export {Footer};
