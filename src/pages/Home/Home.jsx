import "./Home.css";
import heroImg from "../../assets/hero.svg";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className="home-ctn">
      <div className="hero-ctn">
        <h1 className="logo">MyNotes</h1>
        <h2>Remember less, note more &amp; increase productivity</h2>
        <p className="hero-para">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency with MyNotes
        </p>
        <div className="cta">
          <Link to="/notes" className="btn btn-primary cta-btn">
            Try MyNotes
          </Link>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="hero-image" className="img-responsive" />
      </div>
    </section>
  );
};

export {Home};
