import React from 'react'
import { Triangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";
import MovingComponent from "react-moving-text";
import Nav from './Nav';


function Home() {
  return (
    <div>
      <Nav />
      <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        {/* <!-- Page Navbar --> */}

        {/* <!-- End of Page Navbar --> */}

        {/* <!-- page header --> */}
        <header id="home" className="header">
          {/* <div className="overlay"></div> */}

          <div className="header-content container">
            <h1 className="header-title">
              <span className="up">HI!</span>

              <span className="down">I am Manu krishnan</span>
            </h1>
            <TypeAnimation
              sequence={[
                "Mern stack developer", // Types 'One'
                1000, // Waits 1s
                "With 2 years of experience", // Deletes 'One' and types 'Two'
                2000, // Waits 2s

                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
            <p className="header-subtitle" style={{ display: "none" }}>
              fULL STACK DEVELOPER
            </p>
            <br />
            <a className="link" href="#portfolio">
              <button
                className="btn "
                style={{ backgroundColor: "black", color: "red" }}
              >
                Visit My latest Works
              </button>
            </a>
          </div>
        </header>
        {/* <!-- end of page header --> */}

        {/* <!--/</div> about section --> */}
        <section className="section pt-0" id="about">
          {/* <!-- container --> */}
          <div className="container text-center">
            {/* <!-- about wrapper --> */}
            <div className="about">
              <div className="about-img-holder">
                <img
                  src="assets/imgs/epdLPGF2_male_-1_cartoon20.png"
                  style={{ marginTop: "-20px" }}
                  className="about-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="about-caption">
                <p className="section-subtitle">Who Am I ?</p>
                <h2 className="section-title mb-3">About Me</h2>
                <p>
                  Hello, my name is Manu Krishnan. I am a skilled Full Stack
                  Developer with a strong passion for Creating websites. My
                  Interest in web development began during my school days, and I
                  have been pursuing this career Path ever since. In addition to
                  my work as a developer, I am also an avid cricket lover and a
                  left-handed cricket player. Being a left-hander, I possess a
                  unique perspective on things, which allows me to think
                  creatively and outside the box. Overall, my passion for web
                  development, combined with my love for cricket, has helped me
                  develop a well-rounded skill set that I can apply to any
                  project I work on. I take pride in creating unique and
                  innovative websites that stand out from the rest, and I am
                  always looking for new ways to push the boundaries of what's
                  possible in this field.
                </p>
                <a href="assets/resume/manu krishnan (9).pdf" download>
                  {" "}
                  <button className="btn-rounded btn btn-outline-primary mt-4">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- end of about wrapper --> */}
          </div>
          {/* <!-- end of container --> */}
        </section>
        {/* <!-- end of about section --> */}

        {/* <!-- service section --> */}
        {/* <section className="section" id="service">
          <div className="container text-center">
            <p className="section-subtitle">What I Do?</p>
            <h6 className="section-title mb-6">Service</h6>
            {/* <!-- row --> */}
        {/* <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="div">
                    <img
                      src="assets/imgs/DALL·E 2023-03-21 22.36.11 - web development wallpaper with white background.png"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                      className="icon"
                    />
                    <h6 className="title">Website Development</h6>
                    <p className="subtitle">
                      Development of responsive and user-friendly websites using
                      the front-end Technologies and back-end technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="div">
                    <img
                      src="assets/imgs/images.jpeg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                      className="icon"
                    />
                    <h6 className="title">Database Management</h6>
                    <p className="subtitle">
                      Design and development of databases to store and retrieve
                      data Efficiently, using technologies like MySQL, MongoDB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="div">
                    <img
                      src="assets/imgs/toolbox.svg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                      className="icon"
                    />
                    <h6 className="title">Maintenance and Support</h6>
                    <p className="subtitle">
                      Regular updates and bug fixes for existing applications,
                      and ongoing Technical support to ensure smooth operation
                      of Applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="div">
                    <img
                      src="assets/imgs/analytics.svg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                      className="icon"
                    />
                    <h6 className="title">Website Hosting</h6>
                    <p className="subtitle">
                      Provision of website hosting services on cloud-based
                      platforms like AWS, Netlify
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        {/* <!-- end of row --> */}
        {/* </div> */}
        {/* </section> */}
        {/* <!-- end of service section --> */}

        {/* <!-- portfolio section --> */}
        <section className="section" id="portfolio">
          <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Latest Projects</h6>
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-4">
                <a href="https://iplwinindia.com/" className="portfolio-card">
                  <img
                    className="portfolio-card-img img-responsive rounded"
                    src="assets/imgs/iplwij.png"
                    style={{ height: "350px" }}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                  <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                      <h4>Gaming Company </h4>
                      <p className="font-weight-normal">
                        Technolgies used:Html,css,Bootstrap,sweetalert,
                        <br />
                        Netlify
                      </p>
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-md-4">
                <Link to="https://hitecmart.com" className="portfolio-card">
                  <img
                    src="assets/imgs/hitec.png"
                    style={{ height: "350px" }}
                    className="portfolio-card-img"
                    alt="hitecmart work"
                  />
                  <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                      <h4>Hitecmart</h4>
                      <p className="font-weight-normal">
                        Technolgies used:ExpressJs,node,Mongodb,ReactJs,
                        <br />
                        Twillio
                      </p>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="col-md-4">
                <a href="#" className="portfolio-card img-responsive rounded">
                  <img
                    className="portfolio-card-img"
                    src="assets/imgs/kiyara.png"
                    style={{ height: "350px" }}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                  <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                      <h4>E-commerce website</h4>
                      <p className="font-weight-normal">
                        Technolgies used :ExpressJs,node,Mongodb,jQuery,Ajax,
                        <br />
                        sweetAlert,Twillio
                      </p>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container --> */}
        </section>
        {/* <!-- end of portfolio section --> */}

        {/* <!-- pricing section --> */}
        <section className="section" id="pricing">
          <div className="container text-center">
            <p className="section-subtitle"></p>
            <h6 className="section-title mb-6">My lAB</h6>
            {/* <!-- row --> */}
            <div className="pricing-wrapper">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <img
                    className="pricing-card-icon"
                    src="assets/imgs/weather.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="pricing-card-div">
                  <h6 className="pricing-card-title" style={{ color: "green" }}>
                    Weather App
                  </h6>
                  {/* <div className="pricing-card-list">
                    <p>Current city weather</p>
                    <p> </p>
                    <p>Prototype Development</p>

                    <p>
                      <i className="ti-close"></i>
                    </p>
                    <p>
                      <i className="ti-close"></i>
                    </p>
                  </div> */}
                </div>
                {/* <div className="pricing-card-footer">
                  <span>₹</span>
                  <span>0.00</span>
                </div> */}
                <Link
                  to="/weather"
                  className="btn btn-primary mt-3 pricing-card-btn"
                >
                  Explore !
                </Link>
              </div>
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <img
                    className="pricing-card-icon"
                    src="assets/imgs/you.png"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="pricing-card-div">
                  <MovingComponent
                    type="pulse"
                    duration="1000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease-in"
                    iteration="infinite"
                    fillMode="forwards"
                  >
                    <h6 className="pricing-card-title" style={{ color: "red" }}>
                      Did you Know ..?
                    </h6>
                  </MovingComponent>

                  <div className="pricing-card-list">
                    {/* <p>5 Page web site</p>
                    <p>Unlimited images </p>
                    <p>Responsive</p>
                    <p>1 year free updates</p>
                    <p>High secured with SSL certificate</p>
                    <p>Personal website (portfolio)</p> */}
                    {/* <!-- <p><i className="ti-close"></i></p> --> */}
                  </div>
                </div>
                {/* <div className="pricing-card-footer">
                  <span>₹</span>
                  <span>13050</span>
                </div> */}
                <Link
                  to="/ip "
                  className="btn btn-primary mt-3 pricing-card-btn"
                >
                  Let's go
                </Link>
              </div>
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <img
                    className="pricing-card-icon"
                    src="assets/imgs/startup.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="pricing-card-div">
                  <h6 className="pricing-card-title" style={{ color: "black" }}>
                    Coming sooon
                  </h6>
                  {/* <div className="pricing-card-list">
                    <p>Up to 10 web pages</p>
                    <p>Admin side </p>
                    <p>Life long free updating</p>
                    <p>
                      Dynamic website (with all e-commerce website features)
                    </p>
                    <p>High secured with SSL certificate</p>
                    <p>Email and SMS Notifications</p>
                  </div> */}
                </div>
                {/* <div className="pricing-card-footer">
                  <span>₹</span>
                  <span>27999</span>
                  <br />

                  <a
                    href="https://wa.me/+918943293217?text= Hi there! I'm interested in purchasing your black plan for my website. Can you please provide me with more information about what's included in the red  package, and what the cost would be? "
                    className="btn btn-primary mt-3 pricing-card-btn"
                  >
                    Subscribe
                  </a>
                </div> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Triangle
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </div>
              </div>
              {/* <!-- end of pricing wrapper --> */}
            </div>
          </div>
          {/* <!-- end of container --> */}
        </section>
        {/* <!-- end of pricing section --> */}

        {/* <!-- section --> */}
        <section
          className="section-sm "
          style={{
            backgroundImage: "linear-gradient(#36d1dc, #5b86e5)",
          }}
        >
          {/* <!-- container --> */}
          <div className="container text-center text-sm-left">
            {/* <!-- row --> */}
            <div className="row align-items-center">
              <div className="col-sm offset-md-1 mb-4 mb-md-0">
                <h6 className="title text-light">Want to work with me?</h6>
                <p className="m-0 text-light">
                  Always feel Free to Contact & Hire me
                </p>
              </div>
              <div className="col-sm offset-sm-2 offset-md-3">
                <a href="https://www.linkedin.com/in/manu-krishnan-979135293/">
                  <button className="btn btn-lg my-font btn-light rounded">
                    Hire Me
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container --> */}
        </section>
        {/* <!-- end of section --> */}

        {/* <!-- testimonial section --> */}
        {/* <!-- <section className="section" id="testmonial">
        <div className="container text-center">
            <p className="section-subtitle">What Think Client About Me ?</p>
            <h6 className="section-title mb-6">Testmonial</h6> --> */}

        {/* <!-- row --> */}
        {/* <!-- <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="assets/imgs/avatar2.jpg" className="testimonial-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                        </div>
                        <div className="testimonial-card-div">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                                adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="assets/imgs/avatar3.jpg" className="testimonial-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                        </div>
                        <div className="testimonial-card-div">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                                adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- end of container -->
    <!-- </section> end of testimonial section --> */}

        {/* <!-- blog section --> */}
        {/* <!-- <section className="section" id="blog">
        <!-- container -->
    <!-- <div className="container text-center">
            <p className="section-subtitle">Recent Posts?</p>
            <h6 className="section-title mb-6">Blog</h6> -->
    <!-- blog-wrapper -->
    <!-- <div className="blog-card">
                <div className="blog-card-header">
                    <img src="assets/imgs/img-1.jpg" className="blog-card-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                </div>
                <div className="blog-card-div">
                    <h5 className="blog-card-title">Consectetur adipisicing elit</h6>

                        <p className="blog-card-caption">
                            <a href="#">By: Admin</a>
                            <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                            <a href="#"><i className="ti-comment"></i> 123</a>
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit
                            delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium
                            neque numquam mollitia modi quasi distinctio.</p>

                        <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b>
                        </p>
                        <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis
                            cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                        <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                </div>
            </div>end of blog wrapper --> */}
        {/* 
    <!-- blog-wrapper -->
    <!-- <div className="blog-card">
                <div className="blog-card-header">
                    <img src="assets/imgs/img-2.jpg" className="blog-card-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                </div>
                <div className="blog-card-div">
                    <h5 className="blog-card-title">Explicabo illo</h6>

                        <p className="blog-card-caption">
                            <a href="#">By: Admin</a>
                            <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                            <a href="#"><i className="ti-comment"></i> 264</a>
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim,
                            vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro
                            quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto
                            omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae?
                            Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non
                            dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus
                            eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                        <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                </div>
            </div>
            <!-- end of blog wrapper --> */}

        {/* <!-- </div>end of container -->
    <!-- </section>end of blog section --> */}

        {/* <!-- contact section --> */}
        <section className="section" id="contact">
          <div className="container text-center">
            <p className="section-subtitle" style={{ color: "red" }}>
              How can you communicate?
            </p>
            <h6 className="section-title mb-5" style={{ color: "green" }}>
              Contact Me
            </h6>
            {/* <!-- contact form --> */}
            <form
              action=""
              className="contact-form col-md-10 col-lg-8 m-auto"
              id="submit-form"
            >
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <input
                    type="text"
                    size="50"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group col-sm-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    requried
                  />
                </div>
                <div className="form-group col-sm-12">
                  <textarea
                    name="comment"
                    id="comment"
                    rows="6"
                    className="form-control"
                    placeholder="Write Something"
                  ></textarea>
                </div>
                <div className="form-group col-sm-12 mt-3">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-outline-danger rounded"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- footer --> */}
        {/* <div className="container"> */}
        <footer className="footer">
          {/* <p className="views-container">
            This site has total
            <h2 id="viewss"></h2>
            <p>Views</p>
          </p> */}

          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="https://github.com/Manu1305" className="link">
              <i className="ti-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/manu-krishnan-979135293"
              className="link"
            >
              <i className="ti-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/Manu.kallooppara/"
              className="link"
            >
              <i className="ti-facebook"></i>
            </a>
            <a href="https://twitter.com/manukrishna1305" className="link">
              <i className="ti-twitter-alt"></i>
            </a>
          </div>
        </footer>
        {/* </div> <!-- end of page footer --> */}

        {/* <!-- core  --> */}
      </div>
    </div>
  );
}

export default Home
