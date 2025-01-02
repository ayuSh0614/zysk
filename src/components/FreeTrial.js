import React from "react";

const FreeTrial = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Start your free trial</h2>
      <p style={styles.subtext}>
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.learnMoreButton}>Learn more</button>
        <button style={styles.getStartedButton}>Get started</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#F9FAFB", // Light gray background
  },
  heading: {
    fontSize: "36px",
    fontWeight: "600",
    color: "#101828", // Dark text color
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "20px",
    color: "#475467", // Subtle gray color
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  learnMoreButton: {
    padding: "12px 20px",
    fontSize: "16px",
    color: "#344054",
    backgroundColor: "#ffffff",
    border: "1px solid #D0D5DD", // Border color
    borderRadius: "8px",
    cursor: "pointer",
  },
  getStartedButton: {
    padding: "12px 20px",
    fontSize: "16px",
    color: "#ffffff",
    backgroundColor: "#7F56D9", // Purple background
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FreeTrial;
