const Contact = () => {
  return (
    <section>
      <h1>Matthew Tartaglione</h1>
      <h3>Full-Stack Developer</h3>
      <a
        target="_blank"
        href="https://tartcodes.netlify.app/"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>
      <div className="email-cont">
        <div className="email-link">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto: tartaglione@gmail.com">Email</a>
        </div>
        {/*  */}
        <div className="linkedIn-link">
          <i class="fa-brands fa-linkedin"></i>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/matt-tartaglione/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
