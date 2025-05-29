import { Link } from "react-router-dom";
import {services} from '../data/data'
const ServicesPage = () => {
 

  return (
    <>
      <header className="app-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your digital needs</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="services-flex">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div>
                     <img className="service-image" src={service.img} alt="cour-image" />
                </div>
               <div>
                 <div className="service-icon">{service.icon} <span>{service.level}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${service.id}`} replace>
                <button className="btn btn-primary">Learn More</button>
                </Link>
               </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;