const AboutPage = () => {
  return (
    <>
      <header className="app-header">
        <h1>About Us</h1>
        <p>Learn more about our company and mission</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>We are a modern technology company focused on building innovative solutions that make a difference. Our team combines expertise in full-stack development with a passion for creating exceptional user experiences.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;