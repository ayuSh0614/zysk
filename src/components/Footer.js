import React from "react";

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <h4 style={styles.heading}>Product</h4>
        <ul style={styles.list}>
          <li>Overview</li>
          <li>Features</li>
          <li>
            Solutions <span style={styles.newBadge}>New</span>
          </li>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Company</h4>
        <ul style={styles.list}>
          <li>About us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Media kit</li>
          <li>Contact</li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Resources</h4>
        <ul style={styles.list}>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Events</li>
          <li>Help centre</li>
          <li>Tutorials</li>
          <li>Support</li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Use cases</h4>
        <ul style={styles.list}>
          <li>Startups</li>
          <li>Enterprise</li>
          <li>Government</li>
          <li>SaaS centre</li>
          <li>Marketplaces</li>
          <li>Ecommerce</li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Social</h4>
        <ul style={styles.list}>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>GitHub</li>
          <li>AngelList</li>
          <li>Dribbble</li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Legal</h4>
        <ul style={styles.list}>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Licenses</li>
          <li>Settings</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 20px",
    // backgroundColor: "#f9fafb",
  },
  column: {
    flex: "1",
    margin: "0 10px",
  },
  heading: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#667085",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    lineHeight: "2",
    fontSize: "16px",
    fontWeight: "600",
    color: "#475467",
  },
  newBadge: {
    backgroundColor: "#ECFDF3",
    color: "#067647",
    fontSize: "12px",
    padding: "2px 6px",
    border: "1px solid #ABEFC6",
    borderRadius: "16px",
    marginLeft: "5px",
    fontWeight: "500",
  },

  
};

export default Footer;
