import React from "react";
import image1 from "../assets/about-1.jpg";
import image2 from "../assets/about-2.jpg";

const IYClock = () => {
  return (
    <div>
      <title>IYKONS</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta
        content="Consulting Website Template Free Download"
        name="keywords"
      />
      <meta
        content="Consulting Website Template Free Download"
        name="description"
      />

      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@200;300;400&display=swap"
        rel="stylesheet"
      />

      {/* CSS Libraries */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Nav Bar Start */}
      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">
            IYKONS
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto">
              <a href="index.html" className="nav-item nav-link">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link active">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="feature.html" className="nav-item nav-link">
                Feature
              </a>
              <a href="advisor.html" className="nav-item nav-link">
                Advisor
              </a>
              <a href="review.html" className="nav-item nav-link">
                Review
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a href="blog.html" className="dropdown-item">
                    Blog Page
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Single Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Nav Bar End */}

      <div class="about mt-125">
        <div class="container">


          <div class="row mt-120 align-items-center">
            <div class="col-md-6">
              <div class="about-img">
                <div class="about-img-1">
                  <img src={image1} alt="Image1" />
                </div>
                <div class="about-img-2">
                  <img src={image2} alt="Image2" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="section-header">
                <p></p>
                <h2>
                  IYCLOCK IYKONS PROVIDES A SIMPLIFIED E-COMMERCE SOLUTION
                </h2>
                <p>
                  Increase business volume and profit margin, Help your local
                  community and support them to shop from home
                </p>
              </div>
              <div class="about-text">
                <p>
                  <h6>IYKONS PROVIDES A SIMPLIFIED E-COMMERCE SOLUTION</h6>
                  <div>
                    <p>Here are some key points:</p>
                    <ul>
                      <li>IYKONS Provides a Simplified E-Commerce Solution</li>
                      <li>Increase business volume and profit margin</li>
                      <li>
                        Help your local community and support them to shop from
                        home
                      </li>
                      <li>
                        Help elderly and vulnerable people who may not be able
                        to visit shops
                      </li>
                      <li>Stay open online 24 / 7 x 365 days</li>
                      <li>Expand market for niche products</li>
                      <li>Decrease operational costs</li>
                      <li>Convenience & ease</li>
                    </ul>
                  </div>
                </p>
                <p>L</p>
                <a class="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div class="row align-items-center">

            <div class="col-md-6">
 
              {/* iMAGE pART */}
              <div class="section-header">
                <p></p>
                <h2>
                  IYCLOCK IYKONS PROVIDES A SIMPLIFIED E-COMMERCE SOLUTION
                </h2>
                <p>
                  Increase business volume and profit margin, Help your local
                  community and support them to shop from home
                </p>
              </div>
              <div class="about-text">
                <p>
                  <h6>IYKONS PROVIDES A SIMPLIFIED E-COMMERCE SOLUTION</h6>
                  <div>
                    <p>Here are some key points:</p>
                    <ul>
                      <li>IYKONS Provides a Simplified E-Commerce Solution</li>
                      <li>Increase business volume and profit margin</li>
                      <li>
                        Help your local community and support them to shop from
                        home
                      </li>
                      <li>
                        Help elderly and vulnerable people who may not be able
                        to visit shops
                      </li>
                      <li>Stay open online 24 / 7 x 365 days</li>
                      <li>Expand market for niche products</li>
                      <li>Decrease operational costs</li>
                      <li>Convenience & ease</li>
                    </ul>
                  </div>
                </p>
                <p>L</p>
                <a class="btn" href="">
                  Learn More
                </a>
              </div>

              {/* iMAGE pART */}

            </div>


            <div class="col-md-6">

            <div class="about-img">
                <div class="about-img-1">
                  <img src={image1} alt="Image1" />
                </div>
                <div class="about-img-2">
                  <img src={image2} alt="Image2" />
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    </div>

    
  );
};

export default IYClock;
