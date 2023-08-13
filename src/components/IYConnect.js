import React from "react";
import "./IYPage.css"; // Import your CSS file for this page

const IYConnect = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/flatpickr.min.css" />
      <title>Document</title>
      <div className="hero overlay inner-page">
        <img src="images/blob.svg" alt="" className="img-fluid blob" />
        <div className="container">
          <div className="row align-items-center justify-content-center text-center pt-5">
            <div className="col-lg-6">
              <h1 className="heading text-white mb-3" data-aos="fade-up">
                IYCONNECT
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section sec-services">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center" data-aos="fade-up">
              <h2 className="heading text-primary">
                IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS
              </h2>
              <p>
                IYCONNECT is a collaborative practice management platform to
                manage the workflow, communicate with the team, and deliver
                exceptional client work. IYCONNECT brings a total transformation
                across the entire practice, allowing any firm to maximize
                efficiencies, streamline processes, and optimize the scale.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
            >
              <div className="service text-center">
                <span className="bi-cash-coin"></span>
                <div>
                  <h3>Visibility and Management</h3>
                  <p className="mb-4">Track wherever every job stands</p>
                  <p>
                    <a href="#" className="btn btn-outline-primary py-2 px-3">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service text-center">
                <span className="bi-chat-text"></span>
                <div>
                  <h3>Workflow Automation</h3>
                  <p className="mb-4">
                    Standardize and automate common processes
                  </p>
                  <p>
                    <a href="#" className="btn btn-outline-primary py-2 px-3">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service text-center">
                <span className="bi-fingerprint"></span>
                <div>
                  <h3>Collaboration & Connectivity</h3>
                  <p className="mb-4">Unite the team together</p>
                  <p>
                    <a href="#" className="btn btn-outline-primary py-2 px-3">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service text-center">
                <span className="bi-gear"></span>
                <div>
                  <h3>Deliver Exceptional Standards</h3>
                  <p className="mb-4">Work delivered on target</p>
                  <p>
                    <a href="#" className="btn btn-outline-primary py-2 px-3">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service text-center">
                <span className="bi-gear"></span>
                <div>
                  <h3>Improve Satisfaction</h3>
                  <p className="mb-4">
                    Build enduring client relationships by providing a
                    first-class service
                  </p>
                  <p>
                    <a href="#" className="btn btn-outline-primary py-2 px-3">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IYConnect;
