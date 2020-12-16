import linkedin from "../images/social/linkedin.png";
import github from "../images/social/github.png";

const Footer = () => {
  return (
    <>
      <small>© Claudia Palazón Añón</small>
      <section className="social">
        <a target="BLANK" href="https://www.linkedin.com/in/claudiapalazon/">
          <img
            src={linkedin}
            alt="linkedin Claudia Palazón"
            title="linkedin Claudia Palazón"
          />
        </a>
        <a target="BLANK" href="https://github.com/claudiapalazon">
          <img
            className="github"
            src={github}
            alt="Github Claudia Palazón"
            title="Github Claudia Palazón"
          />
        </a>
      </section>
    </>
  );
};

export default Footer;
