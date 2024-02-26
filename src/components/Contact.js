import React from 'react';

const Contact = () => {
  return (
    <div style={styles.contactSection}>
      <div style={styles.contactInfo}>
        <a href="mailto:info@pickupatease.com" style={styles.contactEmail}>
          info@pickupatease.com
        </a>
        <p style={styles.contactPhone}>1-234-567-8910</p>
      </div>
      <div style={styles.socialMedia}>
        {/* Icons would be rendered here */}
      </div>
    </div>
  );
};

const styles = {
  contactSection: {
    backgroundColor: '#004165', // Color from the picture provided
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactEmail: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '5px',
  },
  contactPhone: {
    margin: 0,
  },
  socialMedia: {
    // Add styles for social media icons container
  }
};

export default Contact;
