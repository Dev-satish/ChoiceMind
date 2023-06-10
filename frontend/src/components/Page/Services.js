import React from 'react'

function Services() {
  return (
    <div>
       {/* Services Section */}
       <section className="services" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="services-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Our Services</h2>
          <div className="service" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="service-icon" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/service-icon-1.png" alt="Service Icon 1" style={{ width: '50px', height: '50px' }} />
            </div>
            <div className="service-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Service 1</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="service" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="service-icon" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/service-icon-2.png" alt="Service Icon 2" style={{ width: '50px', height: '50px' }} />
            </div>
            <div className="service-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Service 2</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="service" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="service-icon" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/service-icon-3.png" alt="Service Icon 3" style={{ width: '50px', height: '50px' }} />
            </div>
            <div className="service-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Service 3</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  );
}

export default Services
