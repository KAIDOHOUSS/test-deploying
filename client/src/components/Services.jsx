const ServicesPage = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Custom web applications built with modern technologies', icon: '🌐' },
    { id: 2, title: 'Mobile Development', description: 'Native and cross-platform mobile applications', icon: '📱' },
    { id: 3, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment', icon: '☁️' },
    { id: 4, title: 'Consulting', description: 'Technical consulting and architecture planning', icon: '💡' },
  ];

  return (
    <>
      <header className="app-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your digital needs</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;