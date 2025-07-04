import React from 'react';

function LandingPage() {
  return (
    <div style={styles.landing}>
      <header style={styles.header}>
        <div style={styles.logo}>WANTAM PHARMACEUTICAL</div>
        <nav>
          <a href="#" style={styles.navLink}>Services</a>
          <a href="#" style={styles.navLink}>Pharmcare</a>
          <a href="#" style={styles.navLink}>Consult</a>
          <button style={styles.button}>Login</button>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1>Appointment Booking</h1>
          <p>Book appointments with licensed doctors, upload prescriptions, and track your medicine delivery with ease.</p>
          <button style={styles.button}>Book Now</button>
        </div>
        <div style={styles.heroImage}>
          <img src="/doctor1.jpg" alt="Doctor holding medicine" style={styles.image} />
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Appointment Booking</h3>
          <p>Choose doctor, date, and time.</p>
        </div>
        <div style={styles.card}>
          <h3>M-Pesa Payment Plan</h3>
          <p>Flexible and secure payment options.</p>
        </div>
        <div style={styles.card}>
          <h3>Online Consultation</h3>
          <p>Talk to qualified doctors from anywhere.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  landing: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
    lineHeight: '1.6',
  },
  header: {
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#2196f3',
  },
  navLink: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#673ab7',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#e3f2fd',
  },
  heroText: {
    flex: 1,
    paddingRight: '2rem',
  },
  heroImage: {
    flex: 1,
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fafafa',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    textAlign: 'center',
    width: '30%',
  },
};

export default LandingPage;
