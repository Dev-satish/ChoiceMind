import React from 'react'

function Portfolio() {
  return (
    <div>
       {/* Portfolio Section */}
       <section className="portfolio" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="portfolio-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Our Portfolio</h2>
          <div className="portfolio-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="portfolio-image" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/portfolio-image-1.jpg" alt="Portfolio Image 1" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="portfolio-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Project 1</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="portfolio-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="portfolio-image" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/portfolio-image-2.jpg" alt="Portfolio Image 2" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="portfolio-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Project 2</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="portfolio-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="portfolio-image" style={{ marginRight: '1.5rem' }}>
              <img src="path/to/portfolio-image-3.jpg" alt="Portfolio Image 3" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="portfolio-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Project 3</h3>
              <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
