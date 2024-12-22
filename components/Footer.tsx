import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '2rem 1rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo and About Us */}
        <div>
          <img
            src="/assets/images/logo/LOGOO YA JEPG.jpg" // Replace with your logo path
            alt="Logo"
            style={{ width: '150px', marginBottom: '1rem' }}
          />
          <p style={{ fontSize: '0.9rem' }}>
            We are committed to delivering sustainable solutions for a better
            future. Join us in our journey to make a difference.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Company</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li>Email: contact@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Projects</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        </div>

        {/* Additional Text Sections */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Community</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Be part of our community and work together to bring meaningful
            change.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Sustainability</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Our projects are designed with a focus on sustainability and
            long-term impact.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Innovation</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Pioneering innovative solutions to address modern challenges.
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" aria-label="Facebook">
              <img
                src="/assets/icons/facebook.png" // Replace with your icon path
                alt="Facebook"
                style={{ width: '30px' }}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="/assets/icons/twitter.png" // Replace with your icon path
                alt="Twitter"
                style={{ width: '30px' }}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="/assets/icons/linkedin.png" // Replace with your icon path
                alt="LinkedIn"
                style={{ width: '30px' }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          borderTop: '1px solid #444',
          paddingTop: '1rem',
          fontSize: '0.8rem',
        }}
      >
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
