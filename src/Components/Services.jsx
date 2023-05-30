import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const service = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free CockTail",
          info: "Free cocktail drink service upon arrival to hotel. ",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "located such that you can go for hiking easily.",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "Free pickup and drop from and to the airport from hotel",
        },
        {
          icon: <FaBeer />,
          title: "Unlimited Water",
          info: "unlimited supply of water to room and service of drinking water facility to room",
        },
      ],
    };
    return (
      <div className="container-fluid services">
        <Title title="Services" />
        <div className="row">
          {service.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services
