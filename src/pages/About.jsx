import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import svg from "../images/about.svg"
import customersvg from "../images/customers/customer1.svg"

function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={svg}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">About Us </h1>
          <p className="lead text-justify text-center">
            we are among the leading hostel chains all over the country providing our service from last three decades. We offer rooms for single person, 2 person suits and also we provoide the family suits. we can also customize rooms according your need but needed prior booking for that
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/Contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">About Company</h1>
        <div className="pt-4">
          <p className="about_info">
            We the Marriat hostel comapy is leading brand in the hostel industory in Pakistan. we offer our service in three main cities of pakistan Islamabad, lahore and karachi. We are rated highest for our good services and customer care. We consider our customer ours, so offer then those facilities that make them feel at home. The five-star international Islamabad Marriott Hotel is located at the footsteps of the iconic and famous Margalla Hills and is within proximity to Rawal Lake, the city center, hiking trails, and Pakistan Secretariat on Constitution Avenue. Owing to the great location, the Hotel is just a short ride away from the cultural heritage sites such as Saidpur Village, Faisal Mosque, Lok Virsa, and Shah Allah Ditta Caves.It takes less than an hour to commute between the Hotel and Islamabad International Airport, and an Air-port shuttle service is available on request. 
          </p>
        </div>
      </div>
      <div className="testimony">
        <h1 className="display-4 mb-4">What Our Clients says</h1>
        <div className="row mb-5">
          <div className="col-md-10 col-12 mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                ></li>
              </ol>
              <div className="carousel-inner card border-0 shadow-lg p-4">
                <div className="carousel-item active text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Muhammad Ibrahim Rajput</h3>
                        <p>
                          Best service like International hotels. Recommended stay if you visit Islamabad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer2"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Sagar Ali</h3>
                        <p>
                          Good services. Good rating. My freind booked hotel for me. International services. felt at home
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={require("../images/customers/customer3.svg")}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer3"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Quad Azam</h3>
                        <p>
                         Good services. I booked family suit. enough decent space and good staff attitude.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={require("../images/customers/customer4.svg")}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer4"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Sheeraz Ahmed Memon</h3>
                        <p>
                          Good room. Good staff service. Found room good for stay like International hotel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1 className="display-4">Our Team</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/TMgQMXoglsM/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Director</h5>
              <div className="card-text text-black-50">
                CEO <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">8 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
