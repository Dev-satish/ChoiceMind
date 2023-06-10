import React from 'react'

function footer() {
  return (
    <div>
        <footer className="footer" style={{ backgroundColor: '#f9f9f9', padding: '2rem 0' }}>
        <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>© 2023 ChoiseMind. All rights reserved.</p>
          <ul className="footer-menu" style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '1rem', padding: '0' }}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p style={{ fontSize: '1rem', color: '#777777', marginTop: '1rem' }}>Designed and developed by Satish Mishra</p>
        </div>
      </footer>
    </div>
  );
}

export default footer;
