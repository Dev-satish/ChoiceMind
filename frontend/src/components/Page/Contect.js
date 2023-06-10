import React from 'react'

function Contect() {
  return (
    <div>
       {/* Contact Section */}
       <section className="contact" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="contact-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Contact Us</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" placeholder="Your Name" style={{ marginBottom: '1.5rem', padding: '1rem', fontSize: '1.2rem' }} />
            <input type="email" placeholder="Your Email" style={{ marginBottom: '1.5rem', padding: '1rem', fontSize: '1.2rem' }} />
            <textarea placeholder="Your Message" rows="5" style={{ marginBottom: '1.5rem', padding: '1rem', fontSize: '1.2rem' }} />
            <button type="submit" style={{ padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: '#f50057', color: '#ffffff', border: 'none', borderRadius: '4px' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contect
