// import React from 'react'
import './main.css'; // Ensure your styles are included

const Service = () => {
  // Simple array of services
  const services = [
    { id: 1, title: "Web Development", description: "Building responsive and functional websites." },
    { id: 2, title: "Mobile App Development", description: "Creating mobile applications for iOS and Android." },
    { id: 3, title: "UI/UX Design", description: "Designing user-friendly interfaces and experiences." },
    { id: 4, title: "SEO Services", description: "Optimizing websites for search engines." },
  ];

  return (
    <div className="service-list">
      <h2 className="service-list-title">Our Services</h2>
      <ul className="service-list-items">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <h3 className="service-item-title">{service.title}</h3>
            <p className="service-item-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
