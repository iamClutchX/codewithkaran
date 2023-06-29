const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5"
        data-wow-delay=".1s"
      >
        <div className="bg-primary/10 py-8">
          <div className="container">
            <div className="text-center  text-2xl text-body-color dark:text-white">
              <h3>
                Made with <span className="text-3xl text-red">&hearts;</span> by{" "}
                <a href="http://linkedin.com/in/iamrkaran">Karan</a>
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
