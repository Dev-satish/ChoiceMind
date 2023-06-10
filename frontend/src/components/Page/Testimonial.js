import React from 'react'

function Testimonial() {
  return (
    <div>
      {/* Testimonial Section */}
      <section className="testimonial" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="testimonial-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Testimonials</h2>
          <div className="testimonial-item" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <img src="path/to/testimonial-avatar-1.jpg" alt="Testimonial Avatar 1" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
            <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, risus vitae interdum tempor, lacus metus vehicula dui, in condimentum tellus turpis sed nulla.</p>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1rem' }}>John Doe</h4>
            <p style={{ fontSize: '1rem', color: '#777777' }}>CEO, Company ABC</p>
          </div>
          <div className="testimonial-item" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <img src="path/to/testimonial-avatar-2.jpg" alt="Testimonial Avatar 2" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
            <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, risus vitae interdum tempor, lacus metus vehicula dui, in condimentum tellus turpis sed nulla.</p>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1rem' }}>Jane Smith</h4>
            <p style={{ fontSize: '1rem', color: '#777777' }}>COO, Company XYZ</p>
          </div>
          <div className="testimonial-item" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <img src="path/to/testimonial-avatar-3.jpg" alt="Testimonial Avatar 3" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
            <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, risus vitae interdum tempor, lacus metus vehicula dui, in condimentum tellus turpis sed nulla.</p>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1rem' }}>Sarah Johnson</h4>
            <p style={{ fontSize: '1rem', color: '#777777' }}>CTO, Company PQR</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
